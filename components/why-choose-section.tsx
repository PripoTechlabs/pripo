"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Target, Zap, Users, ArrowRight, Award, Lightbulb, Settings, File, Search, Code, Lock, Rocket, Cpu } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { OrbitingCircles } from "./ui/orbiting-circles"
import { AnimatedList } from "./ui/animated-list"
import { Globe } from "./ui/globe"
import { Marquee } from "./ui/marquee"
import { Terminal, TypingAnimation } from "./ui/terminal"
import { cn } from "@/lib/utils";
import { TweetCard } from "./ui/tweet-card"
import { ClientTweetCard } from "./ui/client-tweet-card"
import { Ripple } from "./ui/ripple"

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Pripo Techlabs",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Pripo Techlabs",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Pripo Techlabs",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Pripo Techlabs",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "Pripo Techlabs",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Pripo Techlabs",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Pripo Techlabs",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Pripo Techlabs",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "Pripo Techlabs",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Pripo Techlabs",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Pripo Techlabs",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Pripo Techlabs",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "Pripo Techlabs",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Pripo Techlabs",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Pripo Techlabs",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Pripo Techlabs",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "Pripo Techlabs",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Pripo Techlabs",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Pripo Techlabs",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Pripo Techlabs",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const differentiators = [
    {
      name: "Proven Expertise",
      description: "Delivering solutions for complex business ecosystems with deep industry knowledge and technical excellence.",
      Icon: Award,
      background: (
        <div className="absolute inset-0 overflow-hidden rounded-xl p-4">
          <ClientTweetCard id="1675849118445436929" className="shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent pointer-events-none" />
        </div>
      ),
      href: "#expertise",
      cta: "Learn more",
      className: "md:col-span-1"
    },
    {
      name: "Client-Centric",
      description: "Aligning every solution with your long-term vision for sustainable growth and measurable impact.",
      Icon: Target,
      background: (
        <div className="absolute inset-0 overflow-hidden rounded-xl p-4">
          <AnimatedListDemo />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent pointer-events-none" />
        </div>
      ),
      href: "#client-focused",
      cta: "Our approach",
      className: "lg:col-span-1"
    },
    {
      name: "Secure Solutions",
      description: "Enterprise-grade security and performance designed for reliability and business continuity.",
      Icon: Shield,
      background: (
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-black p-4 opacity-90">
          <Terminal className="h-full w-full text-xs md:text-sm">
          <TypingAnimation>$ security-scan --full --encryption=aes-256</TypingAnimation>
            <br />
            <span className="text-green-400">
            </span>&gt; Initializing security protocols...
            <br />
            <span className="text-green-400">
            </span>&gt; Encryption: AES-256 [ENABLED]
            <br />
            <span className="text-green-400">
            </span>&gt; Firewall: Active
            <br />
            <span className="text-green-400">
            </span>&gt; Intrusion Detection: Active
          </Terminal>
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent pointer-events-none" />
        </div>
      ),
      href: "#security",
      cta: "Security details",
      className: "lg:col-span-1"
    },
    {
      name: "Agility & Innovation",
      description: "Rapid development cycles powered by emerging technologies to keep you ahead in the market.",
      Icon: Zap,
      background: (
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <Globe
            className="absolute -right-20 -bottom-20 opacity-20 w-[200%] h-[200%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent pointer-events-none" />
        </div>
      ),
      href: "#innovation",
      cta: "See our tech",
      className: "md:col-span-1"
    },
    {
      name: "End-to-End Service",
      description: "From strategy to deployment and beyond, we're your complete technology partner.",
      Icon: Users,
      background: (
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <Ripple />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent pointer-events-none" />
        </div>
      ),
      href: "#services",
      cta: "Our services",
      className: "lg:col-span-1"
    }
  ]

  return (
    <section
      id="why-choose-section"
      ref={sectionRef}
      className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-pulse" style={{
        animationDelay: '2s',
        animationDuration: '8s'
      }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary font-medium mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            WHY CHOOSE PRIPO TECHLABS
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Strategic Technology Partner
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-center max-w-3xl mx-auto text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Pripo Techlabs, we don't just build software — we engineer solutions that empower enterprises 
            to thrive in the digital age. Here's what sets us apart from the competition.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <BentoGrid className="max-w-7xl mx-auto">
            {differentiators.map((item, index) => (
              <BentoCard
                key={item.name}
                name={item.name}
                description={item.description}
                Icon={item.Icon}
                background={item.background}
                href={item.href}
                cta={item.cta}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg mb-6">Ready to transform your business with cutting-edge technology?</p>
          <motion.a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
