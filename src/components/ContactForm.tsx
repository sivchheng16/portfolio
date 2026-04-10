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
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
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
    console.log("Form submitted:", values);
    toast.success("Message sent successfully! I'll get back to you soon.", {
      className: "font-sans uppercase text-[10px] tracking-widest font-bold",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem className="relative flex flex-col group">
                <FormControl>
                  <Input
                    placeholder=" "
                    {...field}
                    className={`peer h-14 rounded-none border-0 border-b ${fieldState.error ? 'border-destructive' : 'border-border'
                      } bg-transparent px-0 text-xl font-serif focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-primary transition-all duration-300 placeholder:text-transparent`}
                  />
                </FormControl>
                <FormLabel className={`absolute left-0 top-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em]${fieldState.error ? 'text-destructive' : 'text-foreground/30'
                  } transition-all duration-500 pointer-events-none peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-primary/60`}>
                  Full Name
                </FormLabel>
                <FormMessage className="text-[10px] uppercase font-sans tracking-widest font-bold mt-2 text-destructive" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem className="relative flex flex-col group">
                <FormControl>
                  <Input
                    placeholder=" "
                    {...field}
                    className={`peer h-14 rounded-none border-0 border-b ${fieldState.error ? 'border-destructive' : 'border-border'
                      } bg-transparent px-0 text-xl font-serif focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-primary transition-all duration-300 placeholder:text-transparent`}
                  />
                </FormControl>
                <FormLabel className={`absolute left-0 top-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em] ${fieldState.error ? 'text-destructive' : 'text-foreground/30'
                  } transition-all duration-500 pointer-events-none peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-primary/60`}>
                  Email Address
                </FormLabel>
                <FormMessage className="text-[10px] uppercase font-sans tracking-widest font-bold mt-2 text-destructive" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem className="relative flex flex-col group">
              <FormControl>
                <Textarea
                  placeholder=" "
                  className={`peer min-h-[160px] rounded-none border-0 border-b ${fieldState.error ? 'border-destructive' : 'border-border'
                    } bg-transparent px-0 py-4 text-xl font-serif focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-primary transition-all duration-300 resize-none placeholder:text-transparent leading-relaxed`}
                  {...field}
                />
              </FormControl>
              <FormLabel className={`absolute left-0 top-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em] ${fieldState.error ? 'text-destructive' : 'text-foreground/30'
                } transition-all duration-500 pointer-events-none peer-focus:-top-6 peer-focus:text-[9px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[9px] peer-[:not(:placeholder-shown)]:text-primary/60`}>
                Project Detail
              </FormLabel>
              <FormMessage className="text-[10px] uppercase font-sans tracking-widest font-bold mt-2 text-destructive" />
            </FormItem>
          )}
        />
        <div className="flex justify-start pt-8">
          <motion.div
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              type="submit"
              className="rounded-none h-20 px-16 bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-sans text-[11px] font-bold tracking-[0.4em] uppercase group overflow-hidden relative shadow-2xl shadow-black/10"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">Send Inquiry</span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Button>
          </motion.div>
        </div>
      </form>
    </Form>
  );
}
