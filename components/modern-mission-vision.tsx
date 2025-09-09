"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Target, Eye, Lightbulb, Heart, Globe, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Variants } from "framer-motion"

export function ModernMissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const missionWords = [
    "To", "empower", "organizations", "with", "technology-driven", "solutions", 
    "that", "simplify", "complexity,", "accelerate", "growth,", "and", "create", "lasting", "value."
  ]

  const visionWords = [
    "To", "be", "recognized", "as", "a", "global", "leader", "in", "software", "solutions", 
    "by", "consistently", "delivering", "innovation,", "excellence,", "and", "measurable", "business", "impact."
  ]

  const coreValues = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Excellence", 
      description: "Uncompromising quality in every solution we deliver"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Impact",
      description: "Creating measurable business value for our clients"
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-background via-background/80 to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/5 blur-[100px]"
          style={{ y: y1, rotate }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="container relative z-10 mx-auto max-w-6xl px-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            OUR PURPOSE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Driving Digital Excellence
          </h2>
          <motion.p 
            className="max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We're on a mission to transform how organizations leverage technology to achieve their goals
          </motion.p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <AnimatedCard
            icon={<Target className="w-8 h-8 text-primary" />}
            iconBg="bg-primary/10"
            title="Our Mission"
            words={missionWords}
            variants={itemVariants}
            decorColor="primary"
          />

          {/* Vision Card */}
          <AnimatedCard
            icon={<Eye className="w-8 h-8 text-blue-500" />}
            iconBg="bg-blue-500/10"
            title="Our Vision"
            words={visionWords}
            variants={itemVariants}
            decorColor="blue-500"
          />
        </div>

        {/* Core Values */}
        <motion.div variants={itemVariants} className="mt-24">
          <motion.div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Pripo Techlabs
            </p>
            <Separator className="w-24 h-1 bg-primary/50 mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <CoreValueCard 
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-24"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 md:p-10 rounded-2xl border max-w-4xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <blockquote className="text-xl md:text-2xl font-light text-foreground/90 italic mb-6 relative z-10">
              "We don't just build software — we engineer solutions that empower enterprises to thrive in the digital age."
            </blockquote>
            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Pripo Techlabs Team</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface AnimatedCardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  words: string[]
  variants: Variants
  decorColor: string
}

function AnimatedCard({ icon, iconBg, title, words, variants, decorColor }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className="relative"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border hover:border-primary/20 transition-all duration-300">
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className={`${iconBg} p-3 rounded-xl`}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </motion.div>
        
        <motion.div className="text-lg text-muted-foreground leading-relaxed">
          {words.map((word, index) => (
            <motion.span
              key={`word-${index}`}
              initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.4 + index * 0.05,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className={`absolute bottom-0 right-0 w-40 h-40 bg-${decorColor}/5 rounded-full blur-3xl`}
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.3,
          }}
          transition={{ duration: 1 }}
        />
      </Card>
    </motion.div>
  )
}

interface CoreValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function CoreValueCard({ icon, title, description, delay }: CoreValueCardProps) {
  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay, ease: "easeOut" }
        }
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="p-6 h-full flex flex-col items-center text-center border hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm">
        <motion.div
          className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-5 rounded-xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
        
        <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h4>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </Card>
    </motion.div>
  )
}
