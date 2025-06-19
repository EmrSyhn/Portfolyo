"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Smartphone,
  Code,
  Zap,
  Heart,
  MapPin,
  Calendar,
  Gamepad2,
  Bike,
  Globe,
  Brain,
} from "lucide-react"

export default function Portfolio() {
  const [isSecretMode, setIsSecretMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const skills = [
    "Flutter",
    "Dart",
    "Firebase",
    "Git",
    "SwiftUI",
    "Bloc",
    "Riverpod",
    "GetX",
    "Provider",
    "REST APIs",
    "MVVM",
    "CI/CD",
  ]

  const projects = [
    {
      name: "Turkticaret.Net App",
      description: "E-commerce mobile app with dynamic in-app purchases, published on both Play Store and App Store",
      tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
      status: "Published",
    },
    {
      name: "In-Flight Commerce Platform",
      description: "Offline-capable commerce app for airline passengers with payment integration",
      tech: ["Flutter", "Offline Storage", "Payment APIs"],
      status: "Enterprise",
    },
    {
      name: "Artist Performance Platform",
      description: "Booking and video platform for artists with seamless UI/UX",
      tech: ["Flutter", "Video APIs", "Figma Integration"],
      status: "Freelance",
    },
    {
      name: "MES Web Application",
      description: "Responsive web adaptation of mobile MES system for manufacturing",
      tech: ["Flutter Web", "Responsive Design", "MVVM"],
      status: "Enterprise",
    },
  ]

  const experiences = [
    {
      company: "Romsis Yazılım",
      role: "Flutter Developer",
      period: "Jan 2024 – May 2024",
      location: "Istanbul, Turkey",
    },
    {
      company: "Phoyer (Freelance)",
      role: "Mobile App Developer",
      period: "Feb 2024 – May 2024",
      location: "Istanbul, Turkey",
    },
    {
      company: "Oetech Solutions & Vimi",
      role: "Flutter Developer",
      period: "Nov 2022 – Nov 2023",
      location: "Bursa, Turkey",
    },
    {
      company: "Turkticaret.Net",
      role: "Mobile App Developer",
      period: "Aug 2022 – Oct 2022",
      location: "Bursa, Turkey",
    },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Hi, I'm Emir
              </h1>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="absolute -top-4 -right-4 text-4xl"
              >
                👋
              </motion.div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Flutter Developer 🚀 | Mobile App Enthusiast 📱
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate mobile developer from Turkey with 2.5+ years of Flutter experience, building fast, beautiful,
              and functional apps that users love.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Zap className="mr-2 h-5 w-5" />✨ View My Work
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 text-blue-400 opacity-60"
        >
          <Code size={24} />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 right-10 text-orange-400 opacity-60"
        >
          <Smartphone size={24} />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-2xl blur-xl"></div>
                <img
                  src="/images/emir-photo.jpg"
                  alt="Emir Seyhan - Flutter Developer"
                  className="relative w-64 h-64 object-cover rounded-2xl border-2 border-gray-800 shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a passionate mobile app developer from Turkey with experience building fast, beautiful, and
                    functional Flutter apps. After a short break exploring life from a different angle, I'm back coding
                    full-time and better than ever.
                  </p>
                  <p className="text-gray-400">
                    Currently based in Bursa/Istanbul/Izmir and open to both remote and on-site opportunities. I love
                    turning ideas into reality through clean, efficient code.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-blue-400">Fun Facts About Me</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Brain className="text-blue-400" size={20} />
                      <span>Loves learning new tech</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Bike className="text-orange-400" size={20} />
                      <span>Rides a motorcycle</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Gamepad2 className="text-purple-400" size={20} />
                      <span>Enjoys console gaming</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Globe className="text-green-400" size={20} />
                      <span>Loves exploring new places</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">Some of the amazing apps I've built</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 hover:border-blue-500 hover:text-blue-400"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-orange-500/20 border-blue-500/30 text-white hover:from-blue-500/30 hover:to-orange-500/30 transition-all duration-300">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Want to know more about my experience? Download my full resume.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />📄 Download My Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Easter Egg Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsSecretMode(!isSecretMode)}
              className="border-gray-700 hover:border-purple-500 hover:text-purple-400 mb-8"
            >
              👀 Secret Dev Mode
            </Button>

            {isSecretMode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Ultra Dev Mode Activated!</h3>
                <p className="text-lg text-gray-300">
                  Keep pushing forward, Emir. Greatness is just one commit away 💾🔥
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Heart className="text-red-400" size={20} />
                  <Code className="text-blue-400" size={20} />
                  <Zap className="text-yellow-400" size={20} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg">I don't bite 😄 Let's build something awesome together.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-blue-400">Send me a message</h3>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="bg-gray-800/50 border-gray-700 focus:border-blue-500" />
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                    />
                    <Textarea
                      placeholder="Your message..."
                      rows={4}
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-orange-400">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="text-blue-400" size={20} />
                      <span>emirseyhana.z@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="text-orange-400" size={20} />
                      <span>Bursa / Istanbul / Izmir, Turkey</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-4 bg-gray-900/50 border border-gray-800 rounded-full hover:border-blue-500/50 transition-all duration-300"
                >
                  <Github className="text-gray-400 hover:text-blue-400" size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-4 bg-gray-900/50 border border-gray-800 rounded-full hover:border-blue-500/50 transition-all duration-300"
                >
                  <Linkedin className="text-gray-400 hover:text-blue-400" size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:emirseyhana.z@gmail.com"
                  className="p-4 bg-gray-900/50 border border-gray-800 rounded-full hover:border-orange-500/50 transition-all duration-300"
                >
                  <Mail className="text-gray-400 hover:text-orange-400" size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Made with <Heart className="inline text-red-400" size={16} /> by Emir Seyhan • 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
