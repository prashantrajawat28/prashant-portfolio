import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


const TO_EMAIL = "prashantrajawat1628@gmail.com";

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function buildGmailComposeUrl(to: string, subject: string, body: string) {
  const params =
    "view=cm&fs=1" +
    `&to=${encodeURIComponent(to)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  return `https://mail.google.com/mail/?${params}`;
}

function buildMailtoUrl(to: string, subject: string, body: string) {
  const params =
    `subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  return `mailto:${to}?${params}`;
}

export function Contact() {
  // ---- Form state ----
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultSubject = useMemo(() => {
    return subject?.trim() || "Project Discussion";
  }, [subject]);

  const composedBody = useMemo(() => {
    const lines = [
      `Hi Prashant,`,
      ``,
      message?.trim() || "",
      ``,
      `---`,
      `Sender Name: ${name?.trim() || "-"}`,
      `Sender Email: ${fromEmail?.trim() || "-"}`,
    ];
    return lines.join("\n");
  }, [name, fromEmail, message]);

  // ---- Gmail open helper ----
  const openEmail = (prefillSubject: string, prefillBody: string) => {
    const mobile = isMobileDevice();

    // Mobile: try Gmail app deep link, fallback to mailto
    // NOTE: Gmail deep link behavior varies by device/browser.
    if (mobile) {
      const mailto = buildMailtoUrl(TO_EMAIL, prefillSubject, prefillBody);

      // Try a Gmail "mailto" handler via intent on Android (best effort)
      // If it fails, we fallback to mailto.
      const isAndroid = /Android/i.test(navigator.userAgent);
      if (isAndroid) {
        const intentUrl =
          `intent://compose?to=${encodeURIComponent(TO_EMAIL)}` +
          `&subject=${encodeURIComponent(prefillSubject)}` +
          `&body=${encodeURIComponent(prefillBody)}` +
          `#Intent;scheme=mailto;package=com.google.android.gm;end`;

        // Try intent first
        window.location.href = intentUrl;

        // Fallback to normal mailto quickly (best effort)
        setTimeout(() => {
          window.location.href = mailto;
        }, 700);

        return;
      }

      // iOS or others: mailto opens default mail client (often Gmail if set)
      window.location.href = mailto;
      return;
    }

    // Desktop: open Gmail web compose in a new tab
    const gmailUrl = buildGmailComposeUrl(TO_EMAIL, prefillSubject, prefillBody);
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  // ---- Email card click ----
  const handleEmailCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openEmail("Hello Prashant", "Hi Prashant,\n\nI’d like to connect with you.\n");
  };

  // ---- Form submit ----
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const n = name.trim();
    const em = fromEmail.trim();
    const msg = message.trim();

    if (!n || !em || !msg) {
      setError("Please fill Name, Email and Message.");
      return;
    }

    // basic email check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    if (!emailOk) {
      setError("Please enter a valid email.");
      return;
    }

    setSubmitting(true);

    try {
      openEmail(defaultSubject, composedBody);
    } finally {
      // We’re not sending to a backend; just opening compose.
      setSubmitting(false);
    }
  };

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
            <h3 className="text-2xl font-bold text-white">
              Let's talk about everything!
            </h3>
            <p className="text-muted-foreground">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="space-y-6">
              {/* ✅ Opens Gmail on desktop, Gmail app/Email client on mobile */}
              <a
                href={`mailto:${TO_EMAIL}`}
                onClick={handleEmailCardClick}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-sm text-muted-foreground">
                    {TO_EMAIL}
                  </div>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-sm text-muted-foreground">
                    Available Remote / Relocate
                  </div>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-background/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <Input
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Subject</label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project Discussion"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="min-h-[150px] bg-background/50"
                  required
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full gap-2 font-semibold"
                disabled={submitting}
              >
                {submitting ? "Opening..." : "Send Message"}{" "}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
