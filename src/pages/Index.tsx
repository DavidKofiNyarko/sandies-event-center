import { SandiesLogo } from "@/components/SandiesLogo";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-elegant relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-sand opacity-30 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-gold opacity-20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-sunset opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo Showcase */}
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="space-y-6">
            <SandiesLogo size="xl" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Where every celebration becomes an unforgettable experience. 
              From intimate gatherings to grand celebrations, we create magical moments in our elegant event spaces.
            </p>
          </div>

          {/* Logo Variations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-border/50">
              <SandiesLogo size="md" />
              <p className="mt-4 text-sm text-muted-foreground">Image Logo</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-border/50">
              <SandiesLogo size="sm" />
              <p className="mt-4 text-sm text-muted-foreground">Small Size</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-border/50">
              <SandiesLogo size="lg" />
              <p className="mt-4 text-sm text-muted-foreground">Large Size</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sand transition-all duration-300 hover:shadow-glow"
            >
              Book Your Event
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
