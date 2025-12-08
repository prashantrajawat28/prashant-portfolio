import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:pl-20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Get In <span className="text-primary">Touch</span>
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
            <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-muted-foreground">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="space-y-6">
              <a href="mailto:prashantrajawat1628@gmail.com" className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-sm text-muted-foreground">prashantrajawat1628@gmail.com</div>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
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
            className="rounded-2xl border border-border bg-card p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Subject</label>
                <Input placeholder="Project Discussion" className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50" />
              </div>

              <Button type="submit" className="w-full gap-2 font-semibold">
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
