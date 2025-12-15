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
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Securing the Digital Frontier | Aspiring <span className="text-foreground font-medium">Cyber Security Analyst</span>
            </p>
            
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
                  I am a dedicated Cyber Security enthusiast with a passion for uncovering vulnerabilities and securing digital infrastructures. Currently finishing my degree in Computer Science with a specialization in Information Security.
                </p>
                <p>
                  My journey began with a curiosity about how systems break, which evolved into a mission to learn how to fix and protect them. I actively participate in CTF competitions and spend my free time analyzing new malware trends.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-foreground font-semibold mb-3">Education</h3>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="text-lg text-white">B.S. Computer Science</h4>
                    <p className="text-sm">Tech University • 2021 - Present</p>
                    <p className="text-xs mt-1 text-primary">Focus: Network Security & Cryptography</p>
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
              <h3 className="text-xl font-bold mb-2">Network Packet Sniffer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A Python-based tool built with Scapy to capture and analyze network traffic in real-time. Identifies HTTP headers and flags suspicious packets.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Python</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Scapy</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Wireshark</span>
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
              <h3 className="text-xl font-bold mb-2">Port Scanner V2</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Multi-threaded port scanner that identifies open ports and banner grabs service versions. Optimized for speed and low footprint.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Python</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Socket</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Threading</span>
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
              <h3 className="text-xl font-bold mb-2">Encrypted Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                End-to-end encrypted messaging application using AES-256. Ensures privacy and data integrity between clients.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">Node.js</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">React</span>
                <span className="text-xs px-2 py-1 rounded bg-secondary text-primary border border-primary/20">CryptoJS</span>
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
            {/* Timeline Item */}
            <div className="relative md:flex gap-8 group">
              <div className="hidden md:block w-32 text-right pt-1 text-muted-foreground font-mono text-sm">
                Jun 2024 - Present
              </div>
              
              <div className="absolute left-[-37px] md:left-auto md:right-1/2 md:mr-[-6px] mt-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:bg-primary transition-colors shadow-[0_0_10px_var(--color-primary)]" />
              
              <div className="md:w-1/2 md:ml-auto">
                <div className="md:hidden text-primary font-mono text-sm mb-1">Jun 2024 - Present</div>
                <h3 className="text-xl font-bold text-white">Security Intern</h3>
                <h4 className="text-primary mb-3">CyberDefense Corp</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Assisted the SOC team in monitoring SIEM alerts and triaging potential incidents. Conducted weekly vulnerability scans using Nessus and prepared reports for the IT team.
                </p>
                <ul className="text-sm text-muted-foreground/80 list-disc list-inside space-y-1">
                  <li>Analyzed 500+ security logs daily</li>
                  <li>Automated log parsing scripts in Python</li>
                  <li>Participated in Red Team simulation exercises</li>
                </ul>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative md:flex gap-8 group">
              <div className="hidden md:block w-32 text-right pt-1 text-muted-foreground font-mono text-sm">
                Jan 2023 - May 2024
              </div>
              
              <div className="absolute left-[-37px] md:left-auto md:right-1/2 md:mr-[-6px] mt-1.5 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground z-10 group-hover:border-primary transition-colors" />
              
              <div className="md:w-1/2 md:ml-auto">
                <div className="md:hidden text-muted-foreground font-mono text-sm mb-1">Jan 2023 - May 2024</div>
                <h3 className="text-xl font-bold text-white">IT Support Volunteer</h3>
                <h4 className="text-primary mb-3">Local University Lab</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Managed lab computers, ensuring latest security patches were installed. Helped students troubleshoot network connectivity issues and malware infections.
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
                      <div className="font-medium text-white">CompTIA Security+</div>
                      <div className="text-xs text-muted-foreground">In Progress</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-green-500" />
                    <div>
                      <div className="font-medium text-white">Google Cybersecurity Certificate</div>
                      <div className="text-xs text-muted-foreground">Completed 2023</div>
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
          <p>© 2024 Jewell Luke Saji. All systems secure.</p>
        </div>
      </footer>
    </div>
  );
}
