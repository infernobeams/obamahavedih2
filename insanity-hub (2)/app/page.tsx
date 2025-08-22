"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronDown,
  Zap,
  TrendingUp,
  Globe,
  Clock,
  Eye,
  RotateCcw,
  ExternalLink,
  Play,
  X,
  CheckCircle,
  AlertCircle,
  Users,
  Star,
  Target,
} from "lucide-react"

export default function CrimsonHub() {
  const [showWelcomePortal, setShowWelcomePortal] = useState(true)
  const [beamCheck, setBeamCheck] = useState<"pending" | "yes" | "no" | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBeamCheck = (answer: "yes" | "no") => {
    setBeamCheck(answer)
    if (answer === "yes") {
      setTimeout(() => {
        setShowWelcomePortal(false)
      }, 1500)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-950 text-white relative overflow-hidden">
      {/* Styles */}
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .crimson-title {
          background: linear-gradient(135deg, #dc2626, #991b1b, #dc2626);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: title-glow 3s ease-in-out infinite;
        }

        @keyframes title-glow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .glass-card {
          background: rgba(220, 38, 38, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(220, 38, 38, 0.3);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(220, 38, 38, 0.15);
          border-color: rgba(220, 38, 38, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.2);
        }
        
        .beam-button {
          background: linear-gradient(45deg, #dc2626, #991b1b);
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .beam-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .beam-button:hover::before {
          left: 100%;
        }

        .beam-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
          background: linear-gradient(45deg, #ef4444, #dc2626);
        }

        .beam-button:active {
          transform: translateY(-1px) scale(1.02);
        }

        /* Text Button Animations */
        .text-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .text-button .button-text {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .text-button:hover .button-text {
          transform: translateY(-2px);
          text-shadow: 0 2px 8px rgba(220, 38, 38, 0.5);
        }

        .text-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #dc2626, #ef4444, #dc2626);
          transition: all 0.4s ease;
          transform: translateX(-50%);
        }

        .text-button:hover::after {
          width: 100%;
        }

        /* Better Floating Dots */
        .floating-dots {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .floating-dots-small {
          width: 3px;
          height: 3px;
          background: rgba(220, 38, 38, 0.7);
          animation: float-up-small 8s linear infinite;
        }

        .floating-dots-medium {
          width: 5px;
          height: 5px;
          background: rgba(220, 38, 38, 0.6);
          animation: float-up-medium 10s linear infinite;
        }

        .floating-dots-large {
          width: 7px;
          height: 7px;
          background: rgba(220, 38, 38, 0.5);
          animation: float-up-large 12s linear infinite;
        }

        @keyframes float-up-small {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes float-up-medium {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(-40px) rotate(-360deg);
            opacity: 0;
          }
        }

        @keyframes float-up-large {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(60px) rotate(720deg);
            opacity: 0;
          }
        }

        .pulse-dot {
          position: absolute;
          border-radius: 50%;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .pulse-dot-small {
          width: 4px;
          height: 4px;
          background: rgba(220, 38, 38, 0.8);
        }

        .pulse-dot-medium {
          width: 6px;
          height: 6px;
          background: rgba(220, 38, 38, 0.7);
        }

        .pulse-dot-large {
          width: 8px;
          height: 8px;
          background: rgba(220, 38, 38, 0.6);
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(220, 38, 38, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.8);
            transform: scale(1.3);
          }
        }

        /* Drifting Dots */
        .drift-dot {
          position: absolute;
          border-radius: 50%;
          background: rgba(220, 38, 38, 0.4);
          animation: drift-around 15s linear infinite;
        }

        @keyframes drift-around {
          0% {
            transform: translateX(0px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(100px) translateY(-50px) rotate(90deg);
          }
          50% {
            transform: translateX(-50px) translateY(-100px) rotate(180deg);
          }
          75% {
            transform: translateX(-100px) translateY(50px) rotate(270deg);
          }
          100% {
            transform: translateX(0px) translateY(0px) rotate(360deg);
          }
        }

        .beam-glow {
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
          animation: beam-pulse 2s ease-in-out infinite;
        }

        @keyframes beam-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(220, 38, 38, 0.6);
          }
        }

        .stat-card {
          animation: stat-float 4s ease-in-out infinite;
        }

        .stat-card:nth-child(2n) {
          animation-delay: 1s;
        }

        .stat-card:nth-child(3n) {
          animation-delay: 2s;
        }

        @keyframes stat-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .beam-trail {
          position: relative;
        }

        .beam-trail::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(220, 38, 38, 0.8), transparent);
          transform: translateY(-50%);
          animation: beam-sweep 3s ease-in-out infinite;
        }

        @keyframes beam-sweep {
          0%, 100% { opacity: 0; transform: translateY(-50%) scaleX(0); }
          50% { opacity: 1; transform: translateY(-50%) scaleX(1); }
        }

        .hover-glow:hover {
          box-shadow: 0 0 25px rgba(220, 38, 38, 0.5);
          transition: box-shadow 0.3s ease;
        }

        .text-beam {
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
        }

        .border-beam {
          border: 2px solid rgba(220, 38, 38, 0.5);
          animation: border-glow 3s ease-in-out infinite;
        }

        @keyframes border-glow {
          0%, 100% {
            border-color: rgba(220, 38, 38, 0.5);
            box-shadow: 0 0 10px rgba(220, 38, 38, 0.2);
          }
          50% {
            border-color: rgba(220, 38, 38, 0.8);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
          }
        }

        /* Typewriter Effect */
        .typewriter {
          overflow: hidden;
          border-right: 2px solid rgba(220, 38, 38, 0.8);
          white-space: nowrap;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: rgba(220, 38, 38, 0.8); }
        }
      `}</style>

      {/* Enhanced Background Dots */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Dots - Small */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`small-${i}`}
            className="floating-dots floating-dots-small"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Floating Dots - Medium */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`medium-${i}`}
            className="floating-dots floating-dots-medium"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating Dots - Large */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`large-${i}`}
            className="floating-dots floating-dots-large"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Pulse Dots - Small */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`pulse-small-${i}`}
            className="pulse-dot pulse-dot-small"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Pulse Dots - Medium */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`pulse-medium-${i}`}
            className="pulse-dot pulse-dot-medium"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Pulse Dots - Large */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`pulse-large-${i}`}
            className="pulse-dot pulse-dot-large"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Drifting Dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`drift-${i}`}
            className="drift-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Welcome Portal Modal */}
      {showWelcomePortal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <Card className="w-full max-w-md mx-4 glass-card border-beam">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center beam-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-beam">CRIMSON Beam Check</CardTitle>
              <p className="text-gray-300">Verify your beam setup</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {beamCheck === null && (
                <div className="text-center">
                  <p className="text-lg font-medium mb-4">Do your beams say "CRIMSON"?</p>
                  <p className="text-sm text-gray-400 mb-6">
                    If your beams are hooked by another site, they're being stolen by dualhook websites.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button onClick={() => handleBeamCheck("yes")} className="beam-button text-button px-8 py-3">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="button-text">Yes, CRIMSON</span>
                    </Button>
                    <Button
                      onClick={() => handleBeamCheck("no")}
                      className="beam-button text-button bg-gray-700 hover:bg-gray-600 px-8 py-3"
                    >
                      <X className="w-4 h-4 mr-2" />
                      <span className="button-text">No, Different</span>
                    </Button>
                  </div>
                </div>
              )}

              {beamCheck === "yes" && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center beam-glow">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 typewriter">Beams Verified!</h3>
                  <p className="text-gray-300">Your beams are properly set to CRIMSON. Welcome!</p>
                </div>
              )}

              {beamCheck === "no" && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center beam-glow">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Unhook Required</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your beams are hooked by another site (dualhook). You need to unhook them first to use CRIMSON
                    properly.
                  </p>
                  <Button
                    onClick={() => window.open("https://streamable.com/06tnbq", "_blank")}
                    className="beam-button text-button w-full py-3"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    <span className="button-text">Watch Unhook Tutorial</span>
                  </Button>
                  <Button
                    onClick={() => setBeamCheck(null)}
                    className="beam-button text-button bg-gray-700 hover:bg-gray-600 w-full py-2"
                  >
                    <span className="button-text">Back to Check</span>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center beam-trail">
          <div className="fade-in mb-8">
            <Badge className="bg-red-600/20 text-red-400 border-red-500/50 px-6 py-3 hover-glow">
              ⚡ Premium Beaming • 1K+ Users • Elite Access
            </Badge>
          </div>

          <div className="fade-in mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 crimson-title">CRIMSON</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">The Ultimate Beam Hub Experience</p>
          </div>

          <div className="fade-in mb-16">
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Lightning-fast beam generators, secure beam protection, and unmatched beam reliability.
            </p>

            <Button
              size="lg"
              className="beam-button text-button px-12 py-4 text-lg font-semibold"
              onClick={() => window.open("https://discord.gg/k5Y2GaQM", "_blank")}
            >
              <Users className="w-5 h-5 mr-2" />
              <span className="button-text">Join Beam Community</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <button onClick={scrollToStats} className="fade-in text-gray-400 hover:text-red-400 transition-colors">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-beam">Beam Performance</h2>
            <p className="text-gray-400">Real beam statistics and metrics</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "99.9%", label: "Beam Uptime" },
              { icon: TrendingUp, value: "98.7%", label: "Beam Success" },
              { icon: Globe, value: "1K+", label: "Active Beamers", special: true },
              { icon: Clock, value: "<1.2s", label: "Beam Speed" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`fade-in text-center p-6 glass-card stat-card ${stat.special ? "border-beam" : ""}`}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-600/20 rounded-full flex items-center justify-center beam-glow">
                  <stat.icon className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-red-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                {stat.special && (
                  <div className="mt-2">
                    <Badge className="bg-red-600/20 text-red-400 border-red-500/50 text-xs">Elite Beamers!</Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-beam">Beam Access Hub</h2>
            <p className="text-gray-400">Premium beam tools and generators</p>
          </div>

          {/* Main Generator */}
          <div className="fade-in mb-12">
            <div className="glass-card p-12 text-center hover-glow border-beam">
              <div className="w-20 h-20 mx-auto mb-8 bg-red-600 rounded-full flex items-center justify-center beam-glow">
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-beam">Main Beam Generator</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Primary beam access with automatic authentication and lightning-fast beam generation.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Badge className="bg-green-600/20 text-green-400 border-green-500/50 hover-glow">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Beams Online
                </Badge>
                <Badge className="bg-red-600/20 text-red-400 border-red-500/50 hover-glow">
                  <Star className="w-3 h-3 mr-1" />
                  Premium Beams
                </Badge>
              </div>

              <Button
                size="lg"
                className="beam-button text-button px-12 py-4 text-lg font-semibold"
                onClick={() => window.open("https://logged.tg/auth/crimsons", "_blank")}
              >
                <Zap className="w-5 h-5 mr-2" />
                <span className="button-text">Launch Beam Generator</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in glass-card p-8 hover-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center beam-glow">
                  <Eye className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-beam">Beam Link Hider</h4>
                  <p className="text-gray-400 text-sm">Secure beam proxy system</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Hide your beam URLs through our secure proxy system for maximum beam privacy and protection.
              </p>
              <Button
                className="beam-button text-button w-full py-3"
                onClick={() => window.open("https://insanityhyperlink.netlify.app/", "_blank")}
              >
                <Eye className="w-4 h-4 mr-2" />
                <span className="button-text">Access Beam Hider</span>
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </div>

            <div className="fade-in glass-card p-8 hover-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center beam-glow">
                  <RotateCcw className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-beam">Beam Cookie Refresher</h4>
                  <p className="text-gray-400 text-sm">Beam restriction bypass</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Refresh and clear cookies to bypass beam restrictions and improve your beam success rates.
              </p>
              <Button
                className="beam-button text-button w-full py-3"
                onClick={() => window.open("https://logged.tg/tools/refresher", "_blank")}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                <span className="button-text">Access Beam Refresher</span>
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in glass-card p-12 hover-glow border-beam">
            <div className="w-20 h-20 mx-auto mb-8 bg-red-600/20 rounded-full flex items-center justify-center beam-glow">
              <Users className="w-10 h-10 text-red-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-beam">Join the Beam Community</h2>
            <p className="text-gray-400 mb-8">
              Connect with 1,000+ beam users, get instant beam support, and stay updated with the latest beam features.
            </p>
            <Button
              size="lg"
              className="beam-button text-button px-12 py-4 text-lg font-semibold"
              onClick={() => window.open("https://discord.gg/k5Y2GaQM", "_blank")}
            >
              <Users className="w-5 h-5 mr-2" />
              <span className="button-text">Join Beam Discord</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-red-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2 crimson-title">CRIMSON</h3>
          <p className="text-gray-400 text-sm mb-4">The Ultimate Beam Hub Experience</p>
          <div className="text-gray-500 text-xs">
            <p className="mb-1">© 2024 Crimson Beam Hub. All rights reserved.</p>
            <p>
              Created by <span className="text-red-400">psykoticx</span> • Powered by Premium Beaming
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
