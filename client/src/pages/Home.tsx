import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  ArrowRight, Linkedin, Mail, MapPin, Phone, 
  Terminal, ShieldCheck, Database, Layout, Users, FileSpreadsheet, 
  Briefcase, GraduationCap, CheckCircle2, Send, ExternalLink
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";

import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";




// Import local asset
import profileImg from "@assets/IMG_0375_1771762935885.jpeg";

export default function Home() {
  const { toast } = useToast();
  const [isSending, setIsSending] = React.useState(false);
  const [certOpen, setCertOpen] = React.useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSending(true);
    try {
      await emailjs.send(
        "service_9698gwt",
        "template_mlqhzap",
        {
          name: data.name,
          email: data.email,
          message: data.message,
          title: 'Portfolio Contact',
        },
        "fv-1Xpsh6ZaI8WDVk"
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <Badge variant="secondary" className="mb-6 py-1.5 px-4 text-sm rounded-full">
              Available for opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Dawda Bah</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 max-w-2xl text-balance">
              IT Student & Technology Enthusiast bridging the gap between data accuracy and system security.
            </h2>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all hover:-translate-y-1" asChild>
                <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
                  Contact Me <ArrowRight className="ml-2 w-4 h-4" />
                </ScrollLink>
              </Button>

            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-muted-foreground">
              <a href="https://www.linkedin.com/in/dawda-bah-350350264/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:dbah.edu@gmail.com" className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://wa.me/2203229983" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors p-2 hover:bg-[#25D366]/10 rounded-full">
                <SiWhatsapp className="w-6 h-6" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative max-w-md w-full"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-background shadow-2xl relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={profileImg} 
                alt="Dawda Bah Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About Me" 
            subtitle="My journey, education, and what drives my passion for technology." 
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I am a dedicated Information Technology student with a strong foundation in data accuracy, customer service, and systems security. My experience ranges from hands-on field operations to technical academic projects.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                During my time as a Customer Service Representative at the National Water and Electricity Company (NAWEC), I developed strong communication and problem-solving skills, serving as the primary point of contact for customers while maintaining accurate records in internal systems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently pursuing my Bachelor's degree in Information Technology, I hold a Cyber Security Essentials certification and am deeply interested in data analysis, networking, and developing systems that solve real-world problems.
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: FileSpreadsheet, label: "Data Entry", value: "Expert" },
                { icon: ShieldCheck, label: "Cyber Security", value: "Essentials" },
                { icon: Users, label: "Customer Service", value: "Experienced" },
                { icon: Terminal, label: "IT Studies", value: "Completed" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                      <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                        <stat.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{stat.label}</h4>
                        <p className="text-sm text-muted-foreground">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical Skills" subtitle="Technologies and competencies I've developed through experience and education." />
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-x-16 gap-y-10"
          >
            {[
              { name: "Microsoft Office & Data Entry", value: 95, icon: FileSpreadsheet },
              { name: "Problem Solving & Teamwork", value: 90, icon: Users },
              { name: "Cybersecurity Basics", value: 80, icon: ShieldCheck },
              { name: "Networking Fundamentals", value: 75, icon: Layout },
              { name: "Database Fundamentals", value: 70, icon: Database },
              { name: "Web Development Basics", value: 65, icon: Terminal },
            ].map((skill, i) => (
              <motion.div key={i} variants={fadeInUp} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{skill.value}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Experience */}
            <div>
              <SectionHeading title="Work Experience" />
              <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-12">
                <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="relative">
                  <div className="absolute -left-[41px] top-1 h-8 w-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Customer Service Representative</h3>
                  <h4 className="text-primary font-medium mb-1">National Water and Electricity Company (NAWEC)</h4>
                  <span className="inline-block py-1 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold mb-4">Past Role</span>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                      <span>Served as the primary point of contact for customers, resolving billing inquiries, complaints, and service requests in a professional and timely manner.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                      <span>Maintained accurate customer records and updated account information using internal data management systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                      <span>Collaborated with technical teams to escalate and follow up on service disruptions, ensuring swift resolution and customer satisfaction.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Education */}
            <div id="education">
              <SectionHeading title="Education & Certifications" />
              <div className="relative border-l-2 border-primary/20 pl-8 ml-4 space-y-12">
                
                <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="relative">
                  <div className="absolute -left-[41px] top-1 h-8 w-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <GraduationCap className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Bachelor's Degree in Information Technology</h3>
                  <h4 className="text-primary font-medium mb-1">International Open University</h4>
                  <span className="inline-block py-1 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold mb-4">Completed ✓</span>
                  <p className="text-muted-foreground">
                    Focused on system analysis, software development, database management, and network infrastructure. Developed a solid foundation for modern IT challenges.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="relative">
                  <div className="absolute -left-[41px] top-1 h-8 w-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Cybersecurity Essentials</h3>
                  <h4 className="text-primary font-medium mb-1">Cisco Networking Academy</h4>
                  <span className="inline-block py-1 px-3 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold mt-2 mb-4">Completed ✓ — April 25, 2024</span>
                  <p className="text-muted-foreground mb-4">
                    Acquired fundamental knowledge of cybersecurity principles, threat mitigation, secure network design, and data protection strategies.
                  </p>
                  <button
                    onClick={() => setCertOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-all hover:-translate-y-0.5 border border-primary/20"
                  >
                    <ShieldCheck className="w-4 h-4" /> View Certificate
                  </button>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="Academic and personal work showcasing my technical capabilities." align="center" />
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {/* Project 1 - BudgetWise */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full flex flex-col overflow-hidden border border-border/50 hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-primary/30 via-teal-400/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 flex items-end p-4 gap-1.5">
                    {[60, 85, 45, 70, 90, 55, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="relative z-10 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <Database className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">BudgetWise</CardTitle>
                      <CardDescription>Finance Tracking System</CardDescription>
                    </div>
                    <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full">Academic</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm mb-6">
                    A comprehensive application designed to help users track personal finances, monitor expenses, and manage budgets efficiently with a focus on data accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">Database</Badge>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">Web Dev</Badge>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">Data Entry</Badge>
                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">SQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2 - School Management */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full flex flex-col overflow-hidden border border-border/50 hover:border-indigo-500/50 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 via-purple-400/15 to-violet-500/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Decorative UI mockup lines */}
                  <div className="absolute inset-0 p-5 flex flex-col gap-2 opacity-40">
                    <div className="h-3 bg-indigo-400/60 rounded w-3/4" />
                    <div className="h-2 bg-indigo-300/40 rounded w-full" />
                    <div className="h-2 bg-indigo-300/40 rounded w-5/6" />
                    <div className="mt-2 grid grid-cols-3 gap-1.5">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="h-8 bg-indigo-400/30 rounded-md" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <Layout className="w-10 h-10 text-indigo-500" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">School Management</CardTitle>
                      <CardDescription>Academic Administration Portal</CardDescription>
                    </div>
                    <span className="text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 px-2 py-1 rounded-full">Academic</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm mb-6">
                    A web-based portal built to streamline academic administration, student records, and faculty communication, featuring secure login systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="bg-indigo-500/5 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs">Security</Badge>
                    <Badge variant="outline" className="bg-indigo-500/5 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs">Frontend</Badge>
                    <Badge variant="outline" className="bg-indigo-500/5 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs">UI/UX</Badge>
                    <Badge variant="outline" className="bg-indigo-500/5 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs">Auth</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 3 - Coursework */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full flex flex-col overflow-hidden border border-border/50 hover:border-emerald-500/50 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-emerald-500/20 via-teal-400/15 to-green-500/20 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Code lines decoration */}
                  <div className="absolute inset-0 p-5 font-mono text-[10px] text-emerald-600/40 dark:text-emerald-400/30 leading-relaxed overflow-hidden">
                    <div>def solve(arr):</div>
                    <div className="pl-4">n = len(arr)</div>
                    <div className="pl-4">for i in range(n):</div>
                    <div className="pl-8">if arr[i] &gt; 0:</div>
                    <div className="pl-12">return arr[i]</div>
                    <div>class Network:</div>
                    <div className="pl-4">host = "0.0.0.0"</div>
                  </div>
                  <div className="relative z-10 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <Terminal className="w-10 h-10 text-emerald-500" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">Coursework Programming</CardTitle>
                      <CardDescription>Academic Exercises & Scripts</CardDescription>
                    </div>
                    <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full">Academic</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground text-sm mb-6">
                    A collection of scripts and programs focused on algorithmic problem-solving, basic networking concepts, and systems analysis methodologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs">Algorithms</Badge>
                    <Badge variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs">Networking</Badge>
                    <Badge variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs">Python</Badge>
                    <Badge variant="outline" className="bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs">Logic</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="Currently open to new opportunities. Let's build something great together." align="center" />
          
          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
                <h3 className="text-2xl font-bold mb-6 font-display">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <a href="tel:+2203229983" className="text-lg font-semibold hover:text-primary transition-colors">+2203229983</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <a href="mailto:dbah.edu@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">dbah.edu@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-semibold">The Gambia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <Button className="w-full h-12 text-lg rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg shadow-[#25D366]/20" asChild>
                    <a href="https://wa.me/2203229983" target="_blank" rel="noopener noreferrer">
                      <SiWhatsapp className="mr-2 w-5 h-5" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-background rounded-2xl p-8 shadow-xl shadow-primary/5 border border-border"
            >
              <h3 className="text-2xl font-bold mb-6 font-display">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 bg-muted/50 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="h-12 bg-muted/50 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            className="min-h-[150px] resize-none bg-muted/50 rounded-xl" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSending} 
                    className="w-full md:w-auto h-12 px-8 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
                  >
                    {isSending ? "Sending..." : (
                      <>Send Message <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {certOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setCertOpen(false)}
        >
          <div
            className="relative bg-background rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Cybersecurity Essentials — Cisco Networking Academy</span>
              </div>
              <button
                onClick={() => setCertOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="w-full h-[70vh]">
              <iframe
                src="/cybersecurity-certificate.pdf"
                className="w-full h-full"
                title="Cybersecurity Essentials Certificate"
              />
            </div>
            <div className="p-4 border-t flex justify-end">
              <a
                href="/cybersecurity-certificate.pdf"
                download="Dawda-Bah-Cybersecurity-Certificate.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all"
              >
                <Download className="w-4 h-4" /> Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-foreground/95 dark:bg-card py-10 text-center border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight text-background dark:text-foreground font-display mb-4">
            Dawda<span className="text-primary">Bah</span>.
          </h2>
          <p className="text-background/60 dark:text-muted-foreground mb-6">IT Student & Technology Professional</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/dawda-bah-350350264/" target="_blank" rel="noopener noreferrer" className="text-background/60 dark:text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:dbah.edu@gmail.com" className="text-background/60 dark:text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-background/40 dark:text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Dawda Bah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
