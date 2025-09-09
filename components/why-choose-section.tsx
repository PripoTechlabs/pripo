"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, animate, type Variants } from "framer-motion"
import {
  Shield,
  Target,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Award,
  Lightbulb,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
}

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.1
      },
    }),
  }

  const differentiators = [
    {
      title: "Proven Expertise Across Domains",
      description: "Successfully delivering solutions for complex business ecosystems with deep industry knowledge and technical excellence.",
      icon: <Award className="w-6 h-6" />,
      icons: [
        { icon: <Award className="w-4 h-4" />, size: "sm" as const },
        { icon: <CheckCircle className="w-6 h-6" />, size: "md" as const },
        { icon: <Target className="w-8 h-8" />, size: "lg" as const },
      ],
      gradient: "from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Strategic & Client-Centric",
      description: "We align every solution with the client's long-term vision, ensuring sustainable growth and measurable business impact.",
      icon: <Target className="w-6 h-6" />,
      icons: [
        { icon: <Target className="w-4 h-4" />, size: "sm" as const },
        { icon: <Users className="w-6 h-6" />, size: "md" as const },
        { icon: <Lightbulb className="w-8 h-8" />, size: "lg" as const },
      ],
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
    },
    {
      title: "Secure & Scalable Solutions",
      description: "Designed for reliability, compliance, and business continuity with enterprise-grade security and performance.",
      icon: <Shield className="w-6 h-6" />,
      icons: [
        { icon: <Shield className="w-4 h-4" />, size: "sm" as const },
        { icon: <Settings className="w-6 h-6" />, size: "md" as const },
        { icon: <CheckCircle className="w-8 h-8" />, size: "lg" as const },
      ],
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      title: "Agility & Innovation",
      description: "Rapid development cycles powered by emerging technologies, keeping you ahead in the competitive landscape.",
      icon: <Zap className="w-6 h-6" />,
      icons: [
        { icon: <Zap className="w-4 h-4" />, size: "sm" as const },
        { icon: <Lightbulb className="w-6 h-6" />, size: "md" as const },
        { icon: <Settings className="w-8 h-8" />, size: "lg" as const },
      ],
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      title: "End-to-End Engagement",
      description: "From strategy and architecture to deployment and ongoing support, we're your complete technology partner.",
      icon: <Users className="w-6 h-6" />,
      icons: [
        { icon: <Users className="w-4 h-4" />, size: "sm" as const },
        { icon: <Award className="w-6 h-6" />, size: "md" as const },
        { icon: <Target className="w-8 h-8" />, size: "lg" as const },
      ],
      gradient: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/20",
    },
  ]

  return (
    <section
      id="why-choose-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-secondary/10 to-background overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span
            className="text-primary font-medium mb-2 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            WHY CHOOSE PRIPO TECHLABS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-center">
            Your Strategic Technology Partner
          </h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <p className="text-center max-w-3xl mx-auto text-muted-foreground text-lg">
            At Pripo Techlabs, we don't just build software — we engineer solutions that empower enterprises 
            to thrive in the digital age. Here's what sets us apart from the competition.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AnimatedCard
                title={item.title}
                description={item.description}
                icons={item.icons}
                className={cn(
                  "bg-gradient-to-br",
                  item.gradient,
                  "border",
                  item.borderColor
                )}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-medium mb-4">Ready to Experience the Pripo Advantage?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading enterprises who trust Pripo Techlabs to deliver innovative solutions that drive real business results.
          </p>
          <motion.button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg flex items-center gap-3 font-medium transition-colors mx-auto text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Digital Transformation <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface AnimatedCardProps {
  className?: string
  title?: React.ReactNode
  description?: React.ReactNode
  icons?: Array<{
    icon: React.ReactNode
    size?: "sm" | "md" | "lg"
    className?: string
  }>
}

function AnimatedCard({ className, title, description, icons = [] }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      <div
        className={cn(
          "h-[12rem] rounded-xl z-40 mb-4",
          "bg-gradient-to-br from-background/50 to-background/80 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        <AnimatedIcons icons={icons} />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-foreground py-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm font-normal text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <motion.div
        className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-2">
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </motion.div>
    </div>
  )
}

function AnimatedIcons({ icons = [] }: { icons: AnimatedCardProps["icons"] }) {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!icons || icons.length === 0) return;

    const animations = icons.map((_, index) => {
      const element = iconRefs.current[index];
      if (!element) return null;
      
      return animate(
        element,
        { 
          scale,
          transform,
        },
        { 
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
          ease: "easeInOut"
        }
      );
    }).filter(Boolean);

    return () => {
      animations.forEach(anim => anim?.stop());
    };
  }, [icons.length]);

  return (
    <div className="p-6 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-3">
        {icons.map((icon, index) => (
          <div
            key={index}
            ref={el => {
              if (el) iconRefs.current[index] = el;
            }}
            className={cn(
              "relative flex items-center justify-center rounded-full bg-primary/10 p-2 transition-all duration-300 hover:bg-primary/20",
              {
                "h-12 w-12": !icon.size || icon.size === "md",
                "h-10 w-10": icon.size === "sm",
                "h-16 w-16": icon.size === "lg",
                [icon.className || '']: true
              }
            )}
          >
            {icon.icon}
          </div>
        ))}
      </div>
      <AnimatedSparkles />
    </div>
  );
}

const AnimatedSparkles = () => (
  <div className="h-32 w-px absolute top-16 m-auto z-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-pulse">
    <div className="w-8 h-24 top-1/2 -translate-y-1/2 absolute -left-8">
      <Sparkles />
    </div>
  </div>
)

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()

  return (
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-primary"
        />
      ))}
    </div>
  )
}
