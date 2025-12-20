import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumePreview } from "@/components/ui/resume-preview";
import { GlossyCard } from "@/components/ui/glossy-card";
import { SkillBar } from "@/components/ui/skill-bar";
import { motion } from "framer-motion";
import { Shield, Lock, Terminal, Globe, Mail, Github, Linkedin, ExternalLink, ChevronDown, FileText } from "lucide-react";
import heroBg from "@assets/generated_images/dark_glossy_abstract_cybersecurity_background.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    form.reset();
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="text-xl font-bold font-heading tracking-wider flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-foreground">CYBER<span className="text-primary">SEC</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-primary transition-colors uppercase tracking-widest text-xs"
            >
              {item}
            </button>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="md:hidden"
          size="icon"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-foreground"></span>
            <span className="block w-5 h-0.5 bg-foreground"></span>
            <span className="block w-5 h-0.5 bg-foreground"></span>
          </div>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Cyber Security Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md">
              <span className="text-primary font-mono text-xs tracking-widest uppercase">System Online</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              JEWELL <span className="text-primary text-glow">LUKE SAJI</span>
            </h1>
            {/*<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Securing the Digital Frontier | Aspiring <span className="text-foreground font-medium">Cyber Security Analyst</span>
            </p> */}
            
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide"
                onClick={() => scrollToSection('projects')}
              >
                VIEW PROJECTS
              </Button>
              <ResumePreview />
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/10 text-foreground hover:bg-white/5"
                onClick={() => scrollToSection('contact')}
              >
                CONTACT ME
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              ABOUT ME
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Certified cybersecurity professional with hands-on expertise in Vulnerability Assessment and Penetration Testing (VAPT). I specialize in host-based auditing, web application security testing, and offensive security methodologies & Threat modeling.
                </p>
                <p>
                  With a Top 1% ranking on TryHackMe , Hacker rank in HackTheBox and extensive experience in VAPT, I leverage technical skills to identify and remediate security vulnerabilities. I am passionate about research and understanding various security issues.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-foreground font-semibold mb-3">Education</h3>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="text-lg text-white">B.Sc Digital and Cyber Forensics</h4>
                    <p className="text-sm">Rathinam College of Arts and Science • 2026</p>
                    <p className="text-xs mt-1 text-primary">Focus: VAPT & Web-app security</p>
                  </div>
                </div>
              </div>
              
              <GlossyCard className="flex flex-col gap-4 bg-secondary/30 border-primary/10">
                <h3 className="text-xl font-bold text-white mb-2">Key Competencies</h3>
                <ul className="space-y-3">
                  {[
                    "Network Traffic Analysis",
                    "Vulnerability Assessment",
                    "Penetration Testing Basics",
                    "Secure Coding Practices",
                    "Incident Response",
                    "Linux System Administration"
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--color-primary)]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlossyCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 justify-end">
            PROJECTS
            <span className="w-12 h-1 bg-primary rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <GlossyCard delay={0.1}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recon Automation Tool</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Python-based automation tool for pentest reconnaissance. Automates host scanning, directory enumeration, and subdomain discovery to reduce manual testing time by 60%.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Python</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Automation</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Recon</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </GlossyCard>

            {/* Project 2 */}
            <GlossyCard delay={0.2}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chess File Encryption</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Custom encryption system using chess move sequences to generate keys. Implements SHA-256/HKDF to harden sequences against guessing attacks.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Cryptography</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Python</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">SHA-256</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </GlossyCard>

            {/* Project 3 */}
            <GlossyCard delay={0.3}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">VAPT & CTF Portfolio</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Top 1% ranking on TryHackMe with 250+ completed challenges. Specialized in web application exploits, network penetration, and OWASP Top 10 vulnerabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">TryHackMe</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">HackTheBox</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">OWASP</span>
              </div>
              <a href="https://tryhackme.com/p/jewell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                View Profile <ExternalLink className="w-3 h-3" />
              </a>
            </GlossyCard>

            {/* Project 4 */}
            <GlossyCard delay={0.4}>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web App CVE Scanning Automation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Automated vulnerability scanning workflow using n8n. Integrates multiple security tools via APIs to scan web applications for known CVEs, aggregate results, and generate comprehensive security reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">n8n</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Automation</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">CVE</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </GlossyCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-1 bg-primary rounded-full"></span>
            EXPERIENCE
          </h2>

          <div className="max-w-3xl mx-auto relative border-l border-primary/20 ml-4 md:ml-0 space-y-12 pl-8 md:pl-0">
            <div className="relative md:flex gap-8 group">
              <div className="hidden md:block w-32 text-right pt-1 text-muted-foreground font-mono text-sm">
                1 Month
              </div>
              
              <div className="absolute left-[-37px] md:left-auto md:right-1/2 md:mr-[-6px] mt-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:bg-primary transition-colors shadow-[0_0_10px_var(--color-primary)]" />
              
              <div className="md:w-1/2 md:ml-auto">
                <div className="md:hidden text-muted-foreground font-mono text-sm mb-1">1 Month</div>
                <h3 className="text-xl font-bold text-white">Cybersecurity Intern</h3>
                <h4 className="text-primary mb-3">Ozone CyberSecurity</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Gained hands-on experience in network security assessment and OWASP Top 10 vulnerability testing. Participated in vulnerability assessment projects under senior professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 justify-center">
            TECHNICAL ARSENAL
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <GlossyCard>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" /> Technical Skills
              </h3>
              <ul className="space-y-3">
                {[
                  "Python Scripting",
                  "Network Security", 
                  "Linux (Kali/Ubuntu)",
                  "Web App Security"
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--color-primary)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </GlossyCard>

            <div className="space-y-6">
              <GlossyCard>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Nessus', 'Git', 'Docker', 'Snort'].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-md bg-background/50 border border-white/10 text-sm hover:border-primary/50 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </GlossyCard>

              <GlossyCard>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <div className="font-medium text-white">eLearnSecurity Junior Penetration Tester (eJPT)</div>
                      <div className="text-xs text-muted-foreground">INE</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <div className="font-medium text-white">Ethical Hacking Associate</div>
                      <div className="text-xs text-muted-foreground">RedTeam Hackers Academy</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <div className="font-medium text-white">Junior Penetration Tester</div>
                      <div className="text-xs text-muted-foreground">TryHackMe</div>
                    </div>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <div className="font-medium text-white">Practical WebApp Security & Testing</div>
                      <div className="text-xs text-muted-foreground">The Taggart Institute</div>
                    </div>
                  </li>
                </ul>
              </GlossyCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">GET IN TOUCH</h2>
            <p className="text-center text-muted-foreground mb-12">
              Interested in collaboration or hiring? Send me a secure transmission.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-mono text-white">jewellsaji@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/jewell-luke-saji/" target="_blank" rel="noopener noreferrer" className="font-mono text-white hover:text-primary transition-colors">linkedin.com/in/jewell-luke-saji</a>
                  </div>
                </div>
              </div>

              <GlossyCard className="bg-secondary/20">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jewell Luke Saji" {...field} className="bg-background/50 border-white/10 focus:border-primary/50" />
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
                            <Input placeholder="jewellsaji@gmail.com" {...field} className="bg-background/50 border-white/10 focus:border-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Message content..." 
                              className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                      SEND MESSAGE
                    </Button>
                  </form>
                </Form>
              </GlossyCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-background text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© 2025 Jewell Luke Saji. All systems secure.</p>
        </div>
      </footer>
    </div>
  );
}
