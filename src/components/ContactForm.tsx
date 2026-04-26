import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Terminal, Send, Cpu, ReceiptIcon, ReceiptText } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "NAME_REQUIRED_ERR.",
  }),
  email: z.string().email({
    message: "INVALID_IDENTIFIER_ERR.",
  }),
  message: z.string().min(10, {
    message: "DETAIL_INSUFFICIENT_ERR.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Transmission sent:", values);
    toast.success("TRANSMISSION_SUCCESS: I'll reach out shortly.", {
      className: "font-mono text-[10px]  font-bold bg-background border-primary/20 text-primary",
    });
    form.reset();
  }

  return (
    <div id="contact" className=" p-2 md:p-4  relative overflow-hidden flex flex-col h-full">


      <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
        <div className="w-9 md:w-10 h-9 md:h-10 glass-panel rounded-xl flex items-center justify-center text-primary flex-shrink-0">
          <ReceiptText size={16} className="md:w-[18px] md:h-[18px]" />
        </div>
        <div>
          <h2 className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-1">Contact Form</h2>
          <div className="h-[1px] w-8 md:w-12 bg-primary/30" />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-7 flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem className="relative flex flex-col group">
                  <FormLabel className="font-mono text-[8px] md:text-[9px] font-bold  tracking-[0.3em] uppercase text-muted-foreground/90 mb-1 md:mb-2 ml-1 transition-colors group-focus-within:text-primary">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your name here..."
                      {...field}
                      className="h-11 md:h-14 glass-panel bg-white/5 border-none rounded-2xl font-mono text-[10px] md:text-[11px] font-bold tracking-widest px-4 md:px-6 focus-visible:ring-1 focus-visible:ring-primary/40 transition-all"
                    />
                  </FormControl>
                  <FormMessage className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-red-500/80 mt-1 md:mt-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem className="relative flex flex-col group">
                  <FormLabel className="font-mono text-[8px] md:text-[9px] font-bold  tracking-[0.3em] uppercase text-muted-foreground/90 mb-1 md:mb-2 ml-1 transition-colors group-focus-within:text-primary">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your@gmail.com"
                      {...field}
                      className="h-11 md:h-14 glass-panel bg-white/5 border-none rounded-2xl font-mono text-[10px] md:text-[11px] font-bold tracking-widest  px-4 md:px-6 focus-visible:ring-1 focus-visible:ring-primary/40 transition-all"
                    />
                  </FormControl>
                  <FormMessage className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-red-500/80 mt-1 md:mt-2" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem className="relative flex flex-col group flex-1">
                <FormLabel className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground/90 mb-1 md:mb-2 ml-1 transition-colors group-focus-within:text-primary">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your project..."
                    className="min-h-[120px] md:min-h-[180px] flex-1 glass-panel bg-white/5 border-none rounded-[24px] md:rounded-[32px] font-mono text-[10px] md:text-[11px] font-bold tracking-widest  p-4 md:p-8 focus-visible:ring-1 focus-visible:ring-primary/40 transition-all resize-none leading-relaxed"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-red-500/80 mt-1 md:mt-2" />
              </FormItem>
            )}
          />
          <div className="flex justify-start mt-auto">
            <motion.div
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            // transition={{ duration: 0.4 }}
            >
              <Button
                type="submit"
                className="h-12 md:h-16 px-10 md:px-16 rounded-3xl bg-primary text-background hover:bg-primary/90 transition-all duration-700 font-mono text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase flex items-center gap-3 md:gap-4 text-nowrap"
              >
                <span className="text-[6px] md:text-[9px]">Send Message</span>
                <Send size={14} className="md:w-4 md:h-4" />
              </Button>
            </motion.div>
          </div>
        </form>
      </Form>
    </div>
  );
}
