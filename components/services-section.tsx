"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Cpu, Database, Smartphone, Zap } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored applications designed to meet specific organizational needs, built for scalability, reliability, and performance.",
      icon: <Code className="h-6 w-6 text-primary" />
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive ERP & CRM platforms that streamline operations, enhance collaboration, and enable data-driven decision-making.",
      icon: <Database className="h-6 w-6 text-primary" />
    },
    {
      title: "Web & Mobile Development",
      description: "End-to-end design and development of secure, intuitive, and user-friendly applications across all devices.",
      icon: <Smartphone className="h-6 w-6 text-primary" />
    },
    {
      title: "Cloud Solutions",
      description: "Cloud adoption strategies, migration, and managed services that enhance agility and reduce infrastructure costs.",
      icon: <Cloud className="h-6 w-6 text-primary" />
    },
    {
      title: "Technology Consulting",
      description: "Expert advisory to align technology investments with business goals and ensure maximum return on investment.",
      icon: <Cpu className="h-6 w-6 text-primary" />
    },
    {
      title: "UI/UX Design",
      description: "Human-centric designs that deliver seamless digital experiences, ensuring high adoption and engagement.",
      icon: <Zap className="h-6 w-6 text-primary" />
    }
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const hoverEffect = {
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }

  return (
    <section ref={ref} className="py-12 md:py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Comprehensive technology solutions designed to transform your business
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
