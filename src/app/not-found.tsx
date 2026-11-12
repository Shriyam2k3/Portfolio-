import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-charcoal text-off-white flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/15 text-electric border border-electric/30 text-xs font-mono">
          404 &bull; Page Not Found
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-sand font-mono">
          Lost in Orbit
        </h1>
        <p className="text-sm text-muted-text leading-relaxed">
          The page or project route you are looking for does not exist or has been relocated.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Back to Homepage
          </Button>
          <Button href="/projects" variant="outline" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            View Projects
          </Button>
        </div>
      </div>
    </main>
  );
}

