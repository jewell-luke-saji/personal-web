import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText, Download, Eye } from "lucide-react";

export function ResumePreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-primary/50 text-primary hover:bg-primary/10"
        >
          <FileText className="mr-2 h-4 w-4" /> RESUME
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] bg-background/95 backdrop-blur-xl border-primary/20 p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-bold font-heading">Jewell Luke Saji - Resume</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1">
                Cyber Security Specialist
              </DialogDescription>
            </div>
            <Button 
              size="sm" 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 w-full bg-white/5 p-4 overflow-hidden">
          <iframe 
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
            className="w-full h-full rounded-md border border-white/10"
            title="Resume Preview"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
