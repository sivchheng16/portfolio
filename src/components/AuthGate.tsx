import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { AlertCircle, Loader2, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';
import { cn } from '@/lib/utils';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, loading, signIn, signUp } = useAuth();
   const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-primary/20 border-t-primary rounded-full"
            />
            <ShieldCheck className="absolute inset-0 m-auto w-6 h-6 text-primary animate-pulse" />
          </div>
          <span className="font-mono text-[10px] font-bold tracking-[0.5em] text-primary uppercase animate-pulse">
            Verifying session...
          </span>
        </motion.div>
      </div>
    );
  }

  if (user) {
    return <>{children}</>;
  }

   const onLogin = async (data: z.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await signIn(data);
    } catch (err: any) {
      setError(err.message || "Failed to sign in. Please check your credentials.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

   const onRegister = async (data: z.infer<typeof registerSchema>) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await signUp(data);
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden selection:bg-primary/20 selection:text-primary-foreground">
      {/* 
        ANTIGRAVITY BACKGROUND SYSTEM
        Matches Home.tsx atmospheric blobs
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 80, 0], 
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/20 blur-[130px] rounded-full opacity-40"
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0], 
            y: [0, 80, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/10 blur-[150px] rounded-full opacity-30"
        />
        
        {/* Subtle Grid Overlay matching Home.tsx */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: `24px 24px`
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[460px] px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <div className="inline-block relative mb-8">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 w-16 h-16 rounded-[24px] glass-panel flex items-center justify-center text-primary shadow-[0_0_30px_rgba(0,180,180,0.2)]"
            >
              <ShieldCheck className="w-8 h-8" />
            </motion.div>
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-sans font-medium tracking-tighter leading-tight text-gradient">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-6 bg-primary/20" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-primary/60">
                {isLogin ? "Sec_Layer_Initialized" : "New_Identity_Request"}
              </p>
              <span className="h-px w-6 bg-primary/20" />
            </div>
          </div>
        </motion.div>

        {/* Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Card className="relative glass-panel p-2 rounded-[40px] border-white/5 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />
            
            <CardHeader className="pt-10 pb-6 px-10">
              <CardTitle className="text-2xl font-sans font-medium tracking-tight text-white/90">
                {isLogin ? "Access Portal" : "Registry Entry"}
              </CardTitle>
              <CardDescription className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mt-1">
                {isLogin 
                  ? "Initialize authentication sequence" 
                  : "Architect your studio credentials"}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-10 pb-6">
              {/* Error Feedback */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-8"
                >
                  <Alert variant="destructive" className="bg-red-500/5 border-red-500/20 text-red-500 rounded-2xl py-3 backdrop-blur-sm">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {error}
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Form {...loginForm}>
                      <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-6">
                        <FormField
                          control={loginForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Email Identifier</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <Mail className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/10 group-focus-within:text-primary transition-colors" />
                                  <Input 
                                    placeholder="USER@SYSTEM.AI" 
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 pr-14" 
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono text-primary/60 uppercase tracking-widest" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Access Phrase</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <Lock className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/10 group-focus-within:text-primary transition-colors" />
                                  <Input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 pr-14" 
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono text-primary/60 uppercase tracking-widest" />
                            </FormItem>
                          )}
                        />
                        <div className="pt-6">
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full h-16 rounded-full font-mono text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 bg-primary text-background hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                          >
                            {isSubmitting ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : "Initialize Access"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Form {...registerForm}>
                      <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={registerForm.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Given Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="GIVEN" 
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest uppercase px-6" 
                                    {...field} 
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={registerForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Family Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="FAMILY" 
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest uppercase px-6" 
                                    {...field} 
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={registerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Email Identifier</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <Mail className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/10 group-focus-within:text-primary transition-colors" />
                                  <Input 
                                    placeholder="USER@SYSTEM.AI" 
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest uppercase px-6 pr-14" 
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={registerForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Access Phrase</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <Lock className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/10 group-focus-within:text-primary transition-colors" />
                                  <Input 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest uppercase px-6 pr-14" 
                                    {...field} 
                                  />
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <div className="pt-6">
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full h-16 rounded-full font-mono text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 bg-primary text-background hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                          >
                            {isSubmitting ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : "Create Identity"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>

            <CardFooter className="px-10 pb-10 flex flex-col items-center pt-8 border-t border-white/5">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                }}
                className="group flex items-center gap-3 text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-muted-foreground/30 hover:text-primary transition-all duration-500"
              >
                <span>{isLogin ? "Propose New Identity" : "Return to Access Log"}</span>
                <ArrowRight className="h-3 w-3 translate-x-0 group-hover:translate-x-2 transition-transform" />
              </button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Footer Branding */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center opacity-10"
        >
          <p className="text-[8px] font-mono font-bold uppercase tracking-[1em] text-foreground">SIVCHHENG KHEANG STUDIO // REGISTRY 2026</p>
        </motion.div>
      </div>
    </div>
  );
}



