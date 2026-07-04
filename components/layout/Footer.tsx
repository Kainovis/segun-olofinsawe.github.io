"use client";

import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] dark:bg-[#020810] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0057D9] to-[#0078D4] rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Segun Olofinsawe
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Software Engineer & Architect building secure, scalable
              cloud-native enterprise solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-[#0078D4] text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-[#0078D4] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-[#0078D4] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SOCIAL_LINKS.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Segun Olofinsawe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0078D4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-slate-400 hover:text-[#0078D4] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
