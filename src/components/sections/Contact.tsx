"use client";

import React, { useState } from "react";
import { personalData } from "@/data/personal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Clock,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") {
      setStatus("idle");
      setFeedbackMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please fill in all required fields.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("error");
      setFeedbackMessage("Please provide a message with at least 10 characters.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver message.");
      }

      setStatus("success");
      setFeedbackMessage(data.message || "Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (err: unknown) {
      setStatus("error");
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : "Delivery encountered an issue. Please email me directly."
      );
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-charcoal">
      <SectionHeading
        badge="Get in Touch"
        title="Let's Build Something Great Together"
        subtitle="Open to software development opportunities, internships, and meaningful engineering collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="card" className="p-6 sm:p-7 space-y-6 border-sand/30">
            <div>
              <h3 className="text-xl font-bold text-off-white mb-1">
                Contact Information
              </h3>
              <p className="text-sm text-muted-text">
                Feel free to reach out directly via email or connect across professional platforms.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalData.socials.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-dark-surface border border-border-subtle hover:border-sand/40 hover:glow-electric-subtle transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-sand group-hover:text-electric transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] text-muted-text uppercase font-semibold block">
                    Email Address
                  </span>
                  <span className="text-sm font-medium text-off-white group-hover:text-sand transition-colors truncate block">
                    {personalData.socials.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-dark-surface border border-border-subtle">
                <div className="w-10 h-10 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-electric">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-muted-text uppercase font-semibold block">
                    Location
                  </span>
                  <span className="text-sm font-medium text-off-white">
                    {personalData.education.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-dark-surface border border-border-subtle">
                <div className="w-10 h-10 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-muted-text uppercase font-semibold block">
                    Response Window
                  </span>
                  <span className="text-sm font-medium text-off-white">
                    Typically within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-border-subtle/80">
              <span className="text-xs font-semibold text-sand uppercase tracking-wider block mb-3">
                Connect Online
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-surface border border-border-subtle hover:border-sand/40 flex items-center justify-center gap-2 text-xs font-medium text-off-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-surface border border-border-subtle hover:border-[#0A66C2]/60 flex items-center justify-center gap-2 text-xs font-medium text-off-white transition-colors"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-surface border border-border-subtle hover:border-[#FFA116]/60 flex items-center justify-center gap-2 text-xs font-medium text-off-white transition-colors"
                >
                  <SiLeetcode className="w-4 h-4 text-[#FFA116]" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <Card variant="card" className="p-6 sm:p-8 border-border-subtle">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-spam honeypot (hidden from human visitors) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this</label>
                <input
                  type="text"
                  id="hp_field"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact_name"
                  className="block text-xs font-semibold uppercase tracking-wider text-sand mb-2"
                >
                  Full Name <span className="text-electric">*</span>
                </label>
                <input
                  type="text"
                  id="contact_name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-border-subtle text-off-white placeholder:text-muted-text/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm"
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="contact_email"
                  className="block text-xs font-semibold uppercase tracking-wider text-sand mb-2"
                >
                  Email Address <span className="text-electric">*</span>
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-border-subtle text-off-white placeholder:text-muted-text/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact_message"
                  className="block text-xs font-semibold uppercase tracking-wider text-sand mb-2"
                >
                  Message <span className="text-electric">*</span>
                </label>
                <textarea
                  id="contact_message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-border-subtle text-off-white placeholder:text-muted-text/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-colors text-sm resize-none"
                />
              </div>

              {/* Status alerts */}
              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "loading"}
                className="w-full justify-center"
                icon={
                  status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
              >
                {status === "loading" ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
