import React, { useState, useEffect } from 'react';
import { Zap, Code, Users, Wrench, Settings, Globe, Gauge, Github, MessageSquare, Download } from 'lucide-react';

const ArcAILanding = () => {
  const [pricingPeriod, setPricingPeriod] = useState('yearly');
  const [titleGradient, setTitleGradient] = useState(0);

  // Animate the title gradient
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleGradient(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI-Powered Coding",
      description: "Easily create and manage intelligent code workflows with intuitive AI assistance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Developer Collaboration",
      description: "Build complex systems with multiple AI assistants working together seamlessly."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tool Integration",
      description: "Seamlessly integrate external tools and APIs into your coding workflow."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable Intelligence",
      description: "Design specialized AI behavior with custom decision-making logic."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Language Support",
      description: "Available in all major programming languages for maximum flexibility."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Efficient Execution",
      description: "Optimize code performance with built-in efficiency and scalability features."
    }
  ];

  const stats = [
    { icon: <Github className="w-8 h-8" />, number: "10K+", label: "Stars on GitHub" },
    { icon: <MessageSquare className="w-8 h-8" />, number: "50K+", label: "Discord Members" },
    { icon: <Download className="w-8 h-8" />, number: "1M+", label: "Downloads" }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: pricingPeriod === 'yearly' ? 99 : 12,
      period: pricingPeriod === 'yearly' ? 'year' : 'month',
      description: "Perfect for individuals and small projects.",
      features: [
        "100 AI generations per month",
        "Basic code assistance",
        "Email support",
        "Access to community forum"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: pricingPeriod === 'yearly' ? 290 : 35,
      period: pricingPeriod === 'yearly' ? 'year' : 'month',
      description: "Ideal for professionals and growing businesses.",
      features: [
        "1000 AI generations per month",
        "Advanced code refactoring",
        "Priority email support",
        "API access",
        "Custom AI model fine-tuning",
        "Collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: pricingPeriod === 'yearly' ? 'year' : 'month',
      description: "Tailored solutions for large organizations.",
      features: [
        "Unlimited AI generations",
        "Dedicated account manager",
        "24/7 phone and email support",
        "Custom AI model development",
        "On-premises deployment option",
        "Advanced analytics and reporting"
      ],
      popular: false
    }
  ];

  const companies = [
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Netflix", color: "#E50914" },
    { name: "YouTube", color: "#FF0000" },
    { name: "Instagram", color: "#E4405F" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <img src="/Arc.png" alt="Arc AI Logo" className="w-12 h-12" />
            <span>Arc AI</span>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-full text-sm mb-8">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">New</span>
            <span className="text-gray-400">Introducing Arc AI</span>
          </div>
          
          <h1 
            className="text-7xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(${titleGradient}deg, #60a5fa, #a78bfa, #ec4899, #60a5fa)`,
              backgroundSize: '200% 200%'
            }}
          >
            AI Code Editor
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create powerful AI-assisted code with just a few keystrokes, enabling complex development 
            workflows and intelligent decision-making processes.
          </p>
          
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1 mb-4">
            <Zap className="w-5 h-5" />
            Get Started
          </button>
          
          <p className="text-sm text-gray-500">Available for all major programming languages</p>

          {/* Code Preview */}
          <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-left font-mono text-sm shadow-2xl">
            <div className="space-y-1">
              <div><span className="text-pink-400">import</span> {'{ '}<span className="text-blue-400">Editor</span>, <span className="text-blue-400">AI</span> {'} '}<span className="text-pink-400">from</span> <span className="text-green-400">'arc-ai'</span>;</div>
              <div className="h-4"></div>
              <div><span className="text-pink-400">const</span> <span className="text-yellow-400">editor</span> = <span className="text-pink-400">new</span> <span className="text-blue-400">Editor</span>();</div>
              <div className="h-4"></div>
              <div><span className="text-pink-400">const</span> <span className="text-yellow-400">assistant</span> = <span className="text-pink-400">await</span> <span className="text-blue-400">AI</span>.<span className="text-blue-400">create</span>({'{'}</div>
              <div className="pl-4"><span className="text-yellow-400">model</span>: <span className="text-green-400">"arc-assistant"</span>,</div>
              <div className="pl-4"><span className="text-yellow-400">capabilities</span>: [<span className="text-green-400">"code-completion"</span>, <span className="text-green-400">"refactoring"</span>],</div>
              <div>{'});'}</div>
              <div className="h-4"></div>
              <div><span className="text-pink-400">const</span> <span className="text-yellow-400">result</span> = <span className="text-pink-400">await</span> <span className="text-yellow-400">assistant</span>.<span className="text-blue-400">enhance</span>({'{'}</div>
              <div className="pl-4"><span className="text-yellow-400">code</span>: <span className="text-yellow-400">userCode</span>,</div>
              <div className="pl-4"><span className="text-yellow-400">context</span>: <span className="text-green-400">"Optimize for performance"</span></div>
              <div>{'});'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {companies.map((company) => (
              <div 
                key={company.name} 
                className="text-2xl font-semibold text-gray-600 transition-all duration-300 cursor-pointer hover:scale-110"
                style={{
                  '--hover-color': company.color
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = company.color}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-purple-400 tracking-widest mb-16">FEATURES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-black mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-purple-400 tracking-widest mb-16">STATISTICS</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-center mb-4 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-purple-400 tracking-widest mb-8">PRICING</h2>
          <h3 className="text-5xl font-bold text-center mb-4">Simple pricing for everyone.</h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving sales.
          </p>
          
          <div className="flex justify-center gap-3 mb-16">
            <button 
              onClick={() => setPricingPeriod('yearly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                pricingPeriod === 'yearly' 
                  ? 'bg-purple-500 text-black' 
                  : 'bg-transparent border border-zinc-800 text-white hover:border-zinc-600'
              }`}
            >
              Yearly <span className="text-green-400 ml-2">Save 25%</span>
            </button>
            <button 
              onClick={() => setPricingPeriod('monthly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                pricingPeriod === 'monthly' 
                  ? 'bg-purple-500 text-black' 
                  : 'bg-transparent border border-zinc-800 text-white hover:border-zinc-600'
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl p-8 relative ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-purple-500/10 to-zinc-900 border-2 border-purple-500' 
                    : 'bg-zinc-900 border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-8 bg-purple-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-gray-400 text-sm mb-4">{plan.name}</div>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/ {plan.period}</span>
                </div>
                <p className="text-gray-400 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-400 font-bold mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-black hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1'
                      : 'border border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA with Matrix Background */}
      <section className="py-24 px-6 border-t border-zinc-800 relative overflow-hidden bg-black">
        {/* Matrix-style digital rain background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="matrix" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <text x="10" y="20" fontSize="12" fill="#0f0" opacity="0.3">01</text>
                <text x="30" y="40" fontSize="12" fill="#0f0" opacity="0.2">10</text>
                <text x="50" y="60" fontSize="12" fill="#0f0" opacity="0.4">11</text>
                <text x="70" y="80" fontSize="12" fill="#0f0" opacity="0.3">00</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#matrix)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-10">Ready to build with AI?</h2>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-800 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Top section with logo, links, and social icons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            {/* Left: Logo and links */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xl font-semibold">
                <img src="/Arc.png" alt="Arc AI Logo" className="w-8 h-8" />
                <span>Arc AI</span>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Right: Social icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Large ARC AI text in background */}
          <div className="relative mb-8 overflow-hidden">
            <div className="text-center text-8xl md:text-9xl lg:text-[12rem] font-bold text-zinc-900 select-none pointer-events-none leading-none">
              ARC AI
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArcAILanding;