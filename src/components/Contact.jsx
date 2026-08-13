import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const recipient = 'milanrouth43@gmail.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/[0.05]">
      
      {/* Section Title */}
      <div className="text-center mb-14">
        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
          Get In Touch
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left 5 Cols: Contact Info */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-sm">
            Have a project in mind or want to work together? Feel free to reach out, I'll get back to you!
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Mail size={14} />
              </div>
              <a href={`mailto:${recipient}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {recipient}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Phone size={14} />
              </div>
              <a href="tel:+918649881569" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                +91 8649881569
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <MapPin size={14} />
              </div>
              <span>West Bengal, India</span>
            </div>
          </div>
          {/* Passport Photo Container */}
          <div className="relative w-40 h-40 mt-6 hidden sm:block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-lg pointer-events-none"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-[#080d1a]">
              <img
                src="/images/passport.jpg"
                alt="Passport Size"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/profile.png";
                }}
              />
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Clean Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
              />
            </div>

            <input
              type="text"
              required
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            />

            <textarea
              rows={4}
              required
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-[#080e1d] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none shadow-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              {sent ? (
                <>
                  <Check size={14} />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={13} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Contact;
