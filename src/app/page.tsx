"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a12] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 204, 0.05) 0%, transparent 70%)
          `
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl animate-float">🦞</span>
            <span className="text-2xl font-bold tracking-tight">
              Open<span className="gradient-text">Claw</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#7a8ba3]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
            <a href="#github" className="hover:text-white transition-colors">GitHub</a>
            <a 
              href="https://github.com/alchem-x/openclaw-2026" 
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] text-[#050a12] font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] text-[#00d4ff] text-sm mb-8 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            Open Source AI Agent Framework
          </div>

          {/* Main Title */}
          <h1 className={`text-6xl md:text-8xl font-extrabold leading-tight mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Build Intelligent
            <br />
            <span className="gradient-text glow-cyan">Agent Systems</span>
            <br />
            <span className="text-5xl md:text-7xl">with Confidence</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-[#7a8ba3] max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            OpenClaw is a powerful, flexible framework for building production-ready AI agents. 
            Designed for developers who demand <span className="text-[#00d4ff]">control</span>, 
            <span className="text-[#00ffcc]"> performance</span>, and <span className="text-[#ff6b6b]">reliability</span>.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
              href="https://github.com/alchem-x/openclaw-2026"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ffcc] text-[#050a12] font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10">Start Building</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a 
              href="#features"
              className="px-8 py-4 rounded-full border border-[rgba(255,255,255,0.2)] text-white font-medium text-lg hover:bg-[rgba(255,255,255,0.05)] transition-all"
            >
              Explore Features →
            </a>
          </div>

          {/* Code Preview */}
          <div className={`mt-20 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="code-gradient rounded-2xl p-1 gradient-border">
              <div className="bg-[#0d1520] rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffd93d]" />
                  <div className="w-3 h-3 rounded-full bg-[#6bcb77]" />
                  <span className="ml-4 text-sm text-[#7a8ba3] font-mono">agent.ts</span>
                </div>
                <div className="p-6 text-left font-mono text-sm md:text-base">
                  <div><span className="text-[#ff79c6]">import</span> <span className="text-[#f8f8f2]">{"{"}</span> <span className="text-[#50fa7b]">Agent</span><span className="text-[#f8f8f2]">{"} "}</span><span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">&apos;openclaw&apos;</span><span className="text-[#f8f8f2]">;</span></div>
                  <div className="mt-3"><span className="text-[#6272a4]">// Create your first agent</span></div>
                  <div className="mt-2"><span className="text-[#8be9fd]">const</span> <span className="text-[#f8f8f2]">agent</span> <span className="text-[#ff79c6]">=</span> <span className="text-[#ff79c6]">new</span> <span className="text-[#50fa7b]">Agent</span><span className="text-[#f8f8f2]">(</span><span className="text-[#f1fa8c]">&apos;./config.yaml&apos;</span><span className="text-[#f8f8f2]">);</span></div>
                  <div className="mt-3"><span className="text-[#6272a4]">// Run it</span></div>
                  <div><span className="text-[#ff79c6]">await</span> <span className="text-[#f8f8f2]">agent.</span><span className="text-[#50fa7b]">run</span><span className="text-[#f8f8f2]">(</span><span className="text-[#f1fa8c]">&apos;Analyze this codebase&apos;</span><span className="text-[#f8f8f2]">);</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7a8ba3" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">OpenClaw?</span>
            </h2>
            <p className="text-[#7a8ba3] text-lg max-w-xl mx-auto">
              Built for developers who want full control over their AI agents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Optimized execution engine with sub-millisecond agent response times",
                gradient: "from-[#00d4ff] to-[#00ffcc]"
              },
              {
                icon: "🛡️",
                title: "Type Safe",
                desc: "Full TypeScript support with comprehensive type definitions",
                gradient: "from-[#ff6b6b] to-[#ffd93d]"
              },
              {
                icon: "🔌",
                title: "Plugin System",
                desc: "Extendable architecture with powerful plugin ecosystem",
                gradient: "from-[#a855f7] to-[#ec4899]"
              },
              {
                icon: "🎯",
                title: "Precise Control",
                desc: "Fine-grained control over agent behavior and decision making",
                gradient: "from-[#f97316] to-[#ef4444]"
              },
              {
                icon: "📊",
                title: "Observable",
                desc: "Built-in logging, tracing, and debugging tools",
                gradient: "from-[#14b8a6] to-[#06b6d4]"
              },
              {
                icon: "🌐",
                title: "Multi-Model",
                desc: "Support for OpenAI, Anthropic, Ollama, and more",
                gradient: "from-[#8b5cf6] to-[#d946ef]"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group p-8 rounded-2xl bg-[#111d32] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,212,255,0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#7a8ba3] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦞</span>
            <span className="font-semibold">OpenClaw 2026</span>
          </div>
          <div className="text-[#7a8ba3] text-sm">
            Open Source · Built with ❤️ by the Community
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/alchem-x/openclaw-2026" className="text-[#7a8ba3] hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
