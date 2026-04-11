import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { AlertCircle, Loader2, Mail, Lock, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';
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
  const [error, setError] = useState<{ message: string; id: number } | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  
  // Auto-hide error after 2 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

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
          <span className="font-mono text-[10px] font-bold tracking-[0.5em] text-primary animate-pulse">
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
      setError({ message: err.message || "Failed to sign in. Please check your credentials.", id: Date.now() });
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
      setError({ message: err.message || "Failed to create account. Please try again.", id: Date.now() });
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

      {/* Error Feedback - Fixed at the top */}
      <AnimatePresence>
        {error && (
          <motion.div
            key={error.id}
            initial={{ opacity: 0, y: -40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -40, x: "-50%" }}
            className="fixed top-12 left-1/2 z-[200] w-full max-w-[460px] px-6 pointer-events-none"
          >
            <div className="pointer-events-auto">
              <Alert variant="destructive" className="glass-panel border-red-500/90 bg-red-500/5 text-red-500 rounded-2xl py-4 shadow-[0_20px_40px_rgba(255,0,0,0.1)] backdrop-blur-md">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-[10px] font-mono font-bold tracking-wider">
                  {error.message}
                </AlertDescription>
              </Alert>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-[460px] px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center justify-center"
        >
          {/* <div className="inline-block relative mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 w-16 h-16 rounded-[24px] glass-panel flex items-center justify-center text-primary shadow-[0_0_30px_rgba(0,180,180,0.2)]"
            >
              <ShieldCheck className="w-8 h-8" />
            </motion.div>
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-50" />
          </div> */}

          <div className="space-y-4">
            <h1 className="text-5xl font-sans font-medium tracking-tighter leading-tight text-gradient">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
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
              <CardTitle className="text-3xl font-sans font-medium tracking-tight text-white/90">
                {isLogin ? "Login" : "Register"}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-10 pb-6">
             

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
                              <FormLabel className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Email</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <Mail className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/10 group-focus-within:text-primary transition-colors" />
                                  <Input
                                    placeholder="user@gmail.com"
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 pr-14 lowercase"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono text-red-500 tracking-widest" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={loginForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Password</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white/20 hover:text-primary transition-colors focus:outline-none"
                                  >
                                    {showPassword ? (
                                      <EyeOff className="h-4 w-4" />
                                    ) : (
                                      <Eye className="h-4 w-4" />
                                    )}
                                  </button>
                                  <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 pr-14 lowercase"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono text-red-500 tracking-widest" />
                            </FormItem>
                          )}
                        />
                        <div className="pt-6">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-16 rounded-full font-mono text-[11px] font-bold tracking-[0.4em] transition-all duration-500 bg-primary text-background hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                          >
                            {isSubmitting ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : "Login"}
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
                                <FormLabel className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">First name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="First name"
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 lowercase"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-[9px] font-mono text-red-500 tracking-widest" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={registerForm.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Last name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Last name"
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 lowercase"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-[9px] font-mono text-red-500 tracking-widest" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={registerForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Email</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <Mail className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/10 group-focus-within:text-primary transition-colors" />
                                  <Input
                                    placeholder="example@gmail.com"
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 pr-14 lowercase"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono text-red-500 tracking-widest" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={registerForm.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/60 font-bold ml-1">Password</FormLabel>
                              <FormControl>
                                <div className="group relative">
                                  <button
                                    type="button"
                                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white/20 hover:text-primary transition-colors focus:outline-none"
                                  >
                                    {showRegisterPassword ? (
                                      <EyeOff className="h-4 w-4" />
                                    ) : (
                                      <Eye className="h-4 w-4" />
                                    )}
                                  </button>
                                  <Input
                                    type={showRegisterPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:bg-white/[0.05] transition-all duration-500 rounded-2xl font-mono text-[11px] font-bold tracking-widest px-6 pr-14 lowercase"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-[9px] font-mono text-red-500 tracking-widest" />
                            </FormItem>
                          )}
                        />
                        <div className="pt-6">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-16 rounded-full font-mono text-[11px] font-bold tracking-[0.4em] transition-all duration-500 bg-primary text-background hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                          >
                            {isSubmitting ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : "Register"}
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
                className="group flex items-center gap-3 text-[9px] font-mono font-bold tracking-[0.4em] text-foreground/60 hover:text-primary transition-all duration-500"
              >
                <span>{isLogin ? "Create account" : "Back to login"}</span>
                <ArrowRight className="h-3 w-3 translate-x-0 group-hover:translate-x-2 transition-transform" />
              </button>
            </CardFooter>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}



