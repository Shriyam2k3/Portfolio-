import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: false });

    // Retrieve environment variables if available
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    if (serviceId === 'service_placeholder' || templateId === 'template_placeholder' || publicKey === 'public_key_placeholder') {
      // Simulate EmailJS delivery if environment variables are not filled
      console.log('Form submission simulation (Set environment variables to connect real EmailJS):', formData);
      setTimeout(() => {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Auto reset success message after 5s
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }, (error) => {
        console.error('EmailJS error:', error);
        setStatus({ loading: false, success: false, error: true });
        setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
      });
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            Get In <span className="text-brand-cyan">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-brand-cyan mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Cards */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-4">
              Let's create something great!
            </h3>
            <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed mb-8">
              Whether you want to discuss a new full-stack project, explore MERN configurations, or just want to chat about DSA - feel free to send a message. I will respond as soon as possible.
            </p>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow glassmorphism">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Email Me</p>
                <a 
                  href="mailto:shriyam.rastogi2003@gmail.com"
                  className="text-sm font-bold text-gray-800 dark:text-gray-250 hover:text-brand-cyan hover:underline transition-colors"
                >
                  shriyam.rastogi2003@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow glassmorphism">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Location</p>
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-250">
                  Madhya Pradesh, India
                </h4>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 p-8 rounded-3xl bg-gray-50/40 dark:bg-dark-card/30 border border-gray-200 dark:border-white/5 shadow-md glassmorphism"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-sm bg-white dark:bg-dark-card/60 border rounded-2xl focus:outline-none focus:ring-1 transition-all dark:text-white ${
                    errors.name 
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' 
                      : 'border-gray-205 dark:border-white/10 focus:border-brand-cyan/60 focus:ring-brand-cyan/20'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.name}</p>}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-sm bg-white dark:bg-dark-card/60 border rounded-2xl focus:outline-none focus:ring-1 transition-all dark:text-white ${
                    errors.email 
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' 
                      : 'border-gray-205 dark:border-white/10 focus:border-brand-cyan/60 focus:ring-brand-cyan/20'
                  }`}
                  placeholder="johndoe@example.com"
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.email}</p>}
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-sm bg-white dark:bg-dark-card/60 border rounded-2xl focus:outline-none focus:ring-1 transition-all dark:text-white ${
                    errors.subject 
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' 
                      : 'border-gray-205 dark:border-white/10 focus:border-brand-cyan/60 focus:ring-brand-cyan/20'
                  }`}
                  placeholder="Project Collaboration"
                />
                {errors.subject && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.subject}</p>}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 text-sm bg-white dark:bg-dark-card/60 border rounded-2xl focus:outline-none focus:ring-1 transition-all dark:text-white resize-none ${
                    errors.message 
                      ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' 
                      : 'border-gray-205 dark:border-white/10 focus:border-brand-cyan/60 focus:ring-brand-cyan/20'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-brand-purple to-brand-cyan hover:opacity-90 disabled:opacity-50 text-white font-semibold rounded-2xl shadow-lg hover:shadow-brand-purple/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {status.loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    Send Message <FiSend size={15} />
                  </>
                )}
              </button>

              {/* Status Notifications */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-500"
                  >
                    <FiCheck size={18} />
                    <span>Thanks! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-2.5 text-xs font-semibold text-rose-600 dark:text-rose-500"
                  >
                    <FiAlertCircle size={18} />
                    <span>Whoops! Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
