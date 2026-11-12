"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Download,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect scroll offset for sticky background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting on homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Optionally update URL hash without jump
            if (window.location.hash !== `#${entry.target.id}`) {
              history.replaceState(null, "", `#${entry.target.id}`);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
        history.pushState(null, "", `#${sectionId}`);
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-border-subtle/80 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-card-surface to-dark-surface border border-sand/40 flex items-center justify-center font-bold text-sand group-hover:border-electric group-hover:glow-electric-subtle transition-all duration-300">
              <span className="text-base tracking-wider font-mono">
                {personalData.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-off-white group-hover:text-sand transition-colors duration-200">
                {personalData.name}
              </span>
              <span className="text-[11px] text-muted-text -mt-1 hidden sm:block">
                Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? "text-electric bg-electric/10 font-semibold"
                      : "text-muted-text hover:text-off-white hover:bg-card-surface/40"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-electric rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side: Socials & Resume CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 pr-2 border-r border-border-subtle/80">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-muted-text hover:text-off-white hover:bg-card-surface transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-muted-text hover:text-[#0A66C2] hover:bg-card-surface transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2 rounded-lg text-muted-text hover:text-[#FFA116] hover:bg-card-surface transition-colors"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
            </div>

            <Button
              href={personalData.resumeUrl}
              variant="primary"
              size="sm"
              download="Shriyam_Rastogi_Resume.pdf"
              icon={<Download className="w-3.5 h-3.5" />}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href={personalData.resumeUrl}
              variant="outline"
              size="sm"
              download="Shriyam_Rastogi_Resume.pdf"
              className="px-2.5 py-1 text-xs"
            >
              <Download className="w-3 h-3" />
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-muted-text hover:text-off-white hover:bg-card-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-sand" />
              ) : (
                <Menu className="w-6 h-6 text-off-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-xl border-b border-border-subtle/80 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-electric bg-electric/10 font-semibold"
                      : "text-muted-text hover:text-off-white hover:bg-card-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card-surface text-muted-text hover:text-off-white"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card-surface text-muted-text hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card-surface text-muted-text hover:text-[#FFA116]"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
            </div>

            <Button
              href={personalData.resumeUrl}
              variant="primary"
              size="sm"
              download="Shriyam_Rastogi_Resume.pdf"
              icon={<Download className="w-3.5 h-3.5" />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
