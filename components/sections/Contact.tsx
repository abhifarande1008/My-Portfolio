"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/experienceData";
import { submitContact } from "@/lib/actions";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { ContactFormState } from "@/lib/types";

const initialState: ContactFormState = { ok: false, error: "" };
const ease = [0.22, 1, 0.36, 1] as const;

function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-white/10 bg-surface/70 p-6 backdrop-blur-sm">
      <label className="block space-y-2">
        <span className="font-mono text-[length:var(--text-mono)] text-text-secondary">Name</span>
        <input
          name="name"
          required
          className="w-full rounded-lg border border-white/10 bg-void px-3 py-2 text-text-primary outline-none focus:border-warm"
        />
      </label>
      <label className="block space-y-2">
        <span className="font-mono text-[length:var(--text-mono)] text-text-secondary">Email</span>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/10 bg-void px-3 py-2 text-text-primary outline-none focus:border-warm"
        />
      </label>
      <label className="block space-y-2">
        <span className="font-mono text-[length:var(--text-mono)] text-text-secondary">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-white/10 bg-void px-3 py-2 text-text-primary outline-none focus:border-warm"
        />
      </label>
      {state.error && <p className="text-sm text-red-400">{state.error}</p>}
      {state.ok && <p className="text-sm text-warm">Message received. I’ll get back to you soon.</p>}
      <MagneticButton
        type="submit"
        disabled={pending}
        className="rounded-full bg-warm px-5 py-3 font-mono text-[length:var(--text-mono)] text-void disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </MagneticButton>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-shell space-y-16">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="font-mono text-[length:var(--text-mono)] tracking-[0.2em] text-warm uppercase"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mt-3 font-serif text-[length:var(--text-h2)]"
        >
          Let’s work together.
        </motion.h2>
      </div>

      <div className="space-y-10">
        {experience.map((entry, index) => (
          <motion.div
            key={`${entry.title}-${entry.org}`}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08, ease }}
          >
            <TimelineItem entry={entry} />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-text-secondary">
            abhishekfarande81@gmail.com
            <br />
            +91-9326396793
            <br />
            Kolhapur, Maharashtra, India
          </p>
          <div className="flex flex-wrap gap-3">
            <MagneticButton
              href="/resume.pdf"
              className="rounded-full bg-warm px-5 py-3 font-mono text-[length:var(--text-mono)] text-void"
            >
              Download PDF
            </MagneticButton>
            <MagneticButton
              href="/resume.pdf"
              className="rounded-full border border-warm/50 px-5 py-3 font-mono text-[length:var(--text-mono)] text-warm"
            >
              View Resume
            </MagneticButton>
          </div>
          <div className="flex gap-5 font-mono text-[length:var(--text-mono)] text-text-secondary">
            <a href="https://github.com/abhishekfarande04" target="_blank" rel="noreferrer" className="hover:text-warm">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-farande-3836a6253"
              target="_blank"
              rel="noreferrer"
              className="hover:text-warm"
            >
              LinkedIn
            </a>
            <a href="mailto:abhishekfarande81@gmail.com" className="hover:text-warm">
              Email
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
