import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FloatingInput = ({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        className={cn(
          "h-12 border-border bg-background/50 px-4 pt-4 transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20",
          props.className
        )}
        onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
        }}
        onBlur={(e) => {
            setIsFocused(false);
            setHasValue(!!e.target.value);
            props.onBlur?.(e);
        }}
        onChange={(e) => {
            setHasValue(!!e.target.value);
            props.onChange?.(e);
        }}
      />
      <label
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground",
          isFocused || hasValue ? "top-1 text-[10px] text-primary" : "top-3 text-sm"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:pl-20 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            <MessageSquare className="h-3 w-3" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or want to discuss a new opportunity?
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Get in touch</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing product design work or partnership opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a href="mailto:prashantrajawat1628@gmail.com" className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">prashantrajawat1628@gmail.com</div>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-sm text-muted-foreground">Available Remote / Relocate</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-md shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <FloatingInput label="Name" type="text" />
                <FloatingInput label="Email" type="email" />
              </div>
              
              <FloatingInput label="Subject" type="text" />

              <div className="space-y-2">
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px] border-border bg-background/50 resize-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20" 
                />
              </div>

              <Button type="submit" className="w-full h-12 gap-2 font-semibold text-base transition-transform active:scale-95">
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
