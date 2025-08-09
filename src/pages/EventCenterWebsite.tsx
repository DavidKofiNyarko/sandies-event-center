import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Sparkles,
  Heart,
  Briefcase,
  PartyPopper,
  Play,
  Video,
  ChevronLeft,
  Camera,
  Navigation,
  Eye,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SandiesLogo } from "@/components/SandiesLogo";
import { url } from "inspector";

const EventCenterWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVirtualTourActive, setIsVirtualTourActive] = useState(false);
  const [virtualTourStep, setVirtualTourStep] = useState(0);
  const [isExploring, setIsExploring] = useState(false);

  const events = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Create magical moments that last forever",
    },
    {
      icon: Sparkles,
      title: "Engagements",
      description: "Celebrate your commitment in style",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional venues for business success",
    },
    {
      icon: PartyPopper,
      title: "Private Parties",
      description: "Unforgettable celebrations for every occasion",
    },
    {
      icon: Users,
      title: "Meetings & Conferences",
      description: "Productive spaces for meaningful connections",
    },
    {
      icon: Users,
      title: "Social Gatherings",
      description:
        "Beautifully designed spaces that foster meaningful connections and unforgettable moments with friends, family, and colleagues.",
    },
  ];

  const facilities = [
    {
      title: "Upper Level Paradise",
      description:
        "Intimate elegance redefined - our top floor boasts an exclusive 100+ capacity setting with panoramic views, perfect for sophisticated gatherings where every detail whispers luxury.",
    },
    {
      title: "Grand Ballroom Magnificence",
      description:
        "Experience grandeur like never before - our ground floor accommodates 400+ guests in opulent comfort, featuring soaring ceilings and architectural brilliance that transforms any event into a royal affair.",
    },
    {
      title: "Changing Room",
      description:
        "Your comfort and privacy come first – our spacious, well-equipped changing rooms provide a clean, secure, and relaxing space to refresh and prepare for life’s special moments.",
    },
    {
      title: "Deep Freezers",
      description:
        "Our commercial-grade deep freezer ensures all your event refreshments, ingredients, and delicacies remain perfectly chilled and fresh, guaranteeing top-quality service for you and your guests.",
    },
    {
      title: "Climate Perfection",
      description:
        "Advanced climate control systems maintain the perfect atmosphere year-round, ensuring your guests' comfort regardless of the season.",
    },
    {
      title: "Uninterrupted Excellence",
      description:
        "State-of-the-art backup power systems guarantee your event flows seamlessly from start to finish, with professional-grade sound and lighting that never falters.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      event: "Wedding Reception",
      rating: 5,
      text: "Sandies Event Center made our wedding day absolutely perfect. The staff was incredible and the venue was breathtaking!",
    },
    {
      name: "TechCorp Solutions",
      event: "Annual Conference",
      rating: 5,
      text: "Outstanding venue for our 200-person conference. Professional service and excellent facilities.",
    },
    {
      name: "Emma Rodriguez",
      event: "Birthday Celebration",
      rating: 5,
      text: "Amazing experience! The team went above and beyond to make my party special.",
    },
  ];

  // Gallery media data
  const galleryMedia = [
    {
      id: 1,
      type: "image",
      category: "weddings",
      title: "Elegant Wedding Reception",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      type: "image",
      category: "weddings",
      title: "Bridal Suite Setup",
      url: "https://lh3.googleusercontent.com/pw/AP1GczMTViPyDxgt7w63j4z3kkD8uYDlk3QxK4mgW-nhe_4pSYEdexZMlfPTkGxTsAoJpaDhR0pXzyrZ1siZURa3DRoEoqmEXQP4_0O9yuwMMJwAIWS6aywq7HTtkmbWgk01m0HRcQ_Thk8mfymoho9-KWA=w702-h936-s-no-gm?authuser=0",
    },
    {
      id: 3,
      type: "video",
      category: "weddings",
      title: "Wedding Ceremony Highlights",
      url: "https://www.youtube.com/shorts/kCO5ekx3rAw?feature=share/maxresdefault.jpg",
    },
    {
      id: 4,
      type: "image",
      category: "weddings",
      title: "Dance Floor Magic",
      url: "https://lh3.googleusercontent.com/pw/AP1GczNvUGIcAlJZq8yBfiUGf0OxWqRv-ULj7oPYXBYOvUFlf3yp2WPN6h6slMESBb5Vue8LhNmlD0b0rfDqOOGXoYDyRsfgCsQ3IeTRP_k8N0zptHT8-GLxPyAFikq_NKe9FAXr2wy3iYvjg7j4lZ-VDH8=w558-h744-s-no-gm?authuser=0",
    },
    {
      id: 5,
      type: "image",
      category: "corporate",
      title: "Executive Conference Setup",
      url: "https://lh3.googleusercontent.com/pw/AP1GczORuMjArzm2ADssbQs6kwQHeUfgcvstlobNn-6crbNKXGY0uFfXVxJ01OBfMZmLR9h2KDXcd5neMKckES-UdrC6PnfJnQ6w0kOiVN6B6fcZ9jBP7vrWQpmZDPTHzdbAW2mHLyILuq7GxvNu4g4QLYc=w558-h744-s-no-gm?authuser=0",
    },
    {
      id: 6,
      type: "image",
      category: "corporate",
      title: "Networking Cocktail Hour",
      url: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 7,
      type: "video",
      category: "corporate",
      title: "Product Launch Event",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 8,
      type: "image",
      category: "parties",
      title: "Birthday Celebration Setup",
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 9,
      type: "image",
      category: "parties",
      title: "Intimate Anniversary Dinner",
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 10,
      type: "image",
      category: "parties",
      title: "Memorable Anniversary Party",
      url: "https://lh3.googleusercontent.com/pw/AP1GczPfFE3Zg9-xg-9Mw767mOn8zS5RjWqIcYAJGAqJj4XYNbwnffBFBeAnwZI_1_bElrOU8BbqX_vtOW_Zd2yQ2CHCw7qx_gP_0S5J5_7h65AN8Dh4SGnDfScCtGWUCBx63Ck8RtGO0s77NsvVlVwOzCc=w527-h936-s-no-gm?authuser=0",
    },
    {
      id: 11,
      type: "video",
      category: "parties",
      title: "Party Entertainment",
      url: "https://photos.google.com/share/AF1QipPG7FueCLqbUK2MexTH1WICQ0fhVYNxDMOmPXcFXZNjH0fWQhp923qD95gQlROhnw/photo/AF1QipOrSlOW_GcYmeVAqcyn6JCqffkhk7sIW8yQjA8g?key=Yk5sTHRyQmVBaXpDVklGR3BPUnpqWVNEQ2ZKM2xR",
    },
    {
      id: 12,
      type: "image",
      category: "venue",
      title: "Main Hall Overview",
      url: "https://images.unsplash.com/photo-1549451371-64aa98a6f153?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 13,
      type: "image",
      category: "venue",
      title: "Upper Floor Dining Area",
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 14,
      type: "image",
      category: "venue",
      title: "Bridal Preparation Room",
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 15,
      type: "video",
      category: "venue",
      title: "Virtual Venue Tour",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 16,
      type: "image",
      category: "venue",
      title: "Wedding Reception Highlights",
      url: "https://drive.google.com/file/d/11uuHovoiqxSYLbFT07r06ngiEiqgimwT/view?usp=sharing",
    },
  ];

  // Virtual Tour Data
  const virtualTourStops = [
    {
      title: "Grand Entrance",
      description:
        "Welcome to Sandies Event Center. Notice the elegant marble floors and crystal chandelier that greets every guest.",
      image:
        "https://images.unsplash.com/photo-1549451371-64aa98a6f153?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      hotspots: [
        {
          x: 30,
          y: 60,
          label: "Reception Desk",
          info: "24/7 concierge service",
        },
        {
          x: 70,
          y: 40,
          label: "Crystal Chandelier",
          info: "Imported from Italy",
        },
      ],
    },
    {
      title: "Main Ballroom",
      description:
        "Our spacious ballroom can accommodate 100-400 guests with flexible seating arrangements.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      hotspots: [
        {
          x: 50,
          y: 20,
          label: "Stage Area",
          info: "Professional lighting & sound",
        },
        {
          x: 25,
          y: 70,
          label: "Dance Floor",
          info: "Premium hardwood flooring",
        },
        {
          x: 75,
          y: 60,
          label: "Bar Station",
          info: "Full-service bar available",
        },
      ],
    },
    {
      title: "Upper Level Dining",
      description:
        "Intimate dining space perfect for smaller gatherings of 100+ guests with panoramic views.",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      hotspots: [
        {
          x: 40,
          y: 50,
          label: "Premium Seating",
          info: "Comfortable dining for 100+",
        },
        { x: 80, y: 30, label: "City View", info: "Panoramic windows" },
      ],
    },
    {
      title: "Bridal Suite",
      description:
        "Luxurious preparation room with all amenities for your special day.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      hotspots: [
        {
          x: 60,
          y: 40,
          label: "Vanity Station",
          info: "Professional makeup area",
        },
        {
          x: 20,
          y: 60,
          label: "Changing Area",
          info: "Private dressing space",
        },
      ],
    },
  ];

  const handleExploreVenue = () => {
    setIsExploring(true);
    setTimeout(() => setIsExploring(false), 3000);
  };

  const nextTourStop = () => {
    setVirtualTourStep((prev) => (prev + 1) % virtualTourStops.length);
  };

  const prevTourStop = () => {
    setVirtualTourStep(
      (prev) => (prev - 1 + virtualTourStops.length) % virtualTourStops.length
    );
  };

  const exploreFeatures = [
    {
      title: "360° Virtual Reality",
      description: "Immerse yourself in our venue",
      icon: Eye,
      action: () => setIsVirtualTourActive(true),
    },
    {
      title: "Interactive Floor Plans",
      description: "Explore layouts & capacity",
      icon: Navigation,
      action: () => {
        document
          .getElementById("facilities")
          .scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      title: "Live Gallery Walkthrough",
      description: "See real events in action",
      icon: Camera,
      action: () => {
        document
          .getElementById("gallery")
          .scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setActiveGalleryTab("weddings"), 500);
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getFilteredMedia = () => {
    if (activeGalleryTab === "all") return galleryMedia;
    return galleryMedia.filter((item) => item.category === activeGalleryTab);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md shadow-elegant z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center mt-4">
              <SandiesLogo size="md" className="w-[229px]" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
              <a
                href="#events"
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("events")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Events
              </a>
              <a
                href="#facilities"
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("facilities")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Facilities
              </a>
              <a
                href="#gallery"
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-gold text-primary-foreground px-6 py-2 rounded-full hover:shadow-glow transform hover:scale-105 transition-all font-semibold"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("home")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="#events"
                className="block px-3 py-2 text-foreground cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("events")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Events
              </a>
              <a
                href="#facilities"
                className="block px-3 py-2 text-foreground cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("facilities")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Facilities
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-foreground cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="w-full text-left bg-gradient-gold text-primary-foreground px-3 py-2 rounded-lg mt-2 font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen bg-gradient-elegant flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Where Dreams
                <span className="bg-gradient-gold bg-clip-text text-transparent block">
                  Come to Life
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience the perfect blend of elegance and functionality at
                Sandies Event Center. Our premium venue transforms your special
                moments into unforgettable memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative group">
                  <button
                    onClick={handleExploreVenue}
                    className="relative overflow-hidden bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:shadow-glow transform hover:scale-105 transition-all"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isExploring
                          ? "opacity-0 translate-y-full"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      Explore Our Venue
                    </span>
                    <span
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        isExploring
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-full"
                      }`}
                    >
                      <Sparkles className="h-5 w-5 animate-spin mr-2" />
                      Exploring...
                    </span>
                  </button>

                  {/* Explore Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-80 bg-card rounded-2xl shadow-elegant border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-card-foreground mb-4">
                        Choose Your Experience
                      </h3>
                      <div className="space-y-3">
                        {exploreFeatures.map((feature, index) => (
                          <button
                            key={index}
                            onClick={feature.action}
                            className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-muted transition-colors group/item text-left"
                          >
                            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform">
                              <feature.icon className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <div>
                              <p className="font-semibold text-card-foreground">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-primary ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsVirtualTourActive(true)}
                  className="relative group border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Eye className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Virtual Tour
                  </span>
                  <div className="absolute inset-0 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-sand rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Event Center Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elegant">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  500+ Happy Events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we create the
              perfect atmosphere for your special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <event.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Flexible Spaces for Every Event Size
            </h2>
            <p className="text-xl text-muted-foreground">
              Two beautifully designed floors to accommodate your perfect event
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-2xl">
                    1F
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-4">
                  Upper Level
                </h3>
                <div className="text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <p className="text-muted-foreground text-lg mb-6">Guests</p>
                <p className="text-muted-foreground">
                  Perfect for intimate weddings, corporate meetings, and
                  exclusive celebrations. Features panoramic views and elegant
                  décor.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-secondary-foreground font-bold text-2xl">
                    GF
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-4">
                  Ground Level
                </h3>
                <div className="text-6xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-2">
                  250+
                </div>
                <p className="text-muted-foreground text-lg mb-6">Guests</p>
                <p className="text-muted-foreground">
                  Ideal for grand celebrations, large corporate events, and
                  community gatherings. Spacious layout with premium amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detail carefully crafted to ensure your event runs
              seamlessly from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-elegant hover:shadow-glow transition-all border border-border"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our stunning venue and witness the magic of countless
              celebrations
            </p>
          </div>

          {/* Gallery Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "all", label: "All Media", icon: Camera },
              { key: "weddings", label: "Weddings", icon: Heart },
              { key: "corporate", label: "Corporate", icon: Briefcase },
              { key: "parties", label: "Parties", icon: PartyPopper },
              { key: "venue", label: "Venue", icon: Sparkles },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveGalleryTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeGalleryTab === tab.key
                    ? "bg-gradient-gold text-primary-foreground shadow-glow"
                    : "bg-card text-card-foreground hover:bg-muted shadow-elegant"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredMedia().map((media) => (
              <div
                key={media.id}
                className="group relative aspect-square bg-muted rounded-2xl overflow-hidden cursor-pointer hover:shadow-glow transition-all duration-300"
                onClick={() => setSelectedMedia(media)}
              >
                <img
                  src={media.type === "video" ? media.url : media.url}
                  alt={media.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {media.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-card/90 rounded-full flex items-center justify-center shadow-elegant">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-secondary-foreground font-semibold text-sm">
                      {media.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-primary fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-2xl text-card-foreground mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-card-foreground text-lg">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-primary">
                    {testimonials[activeTestimonial].event}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-secondary text-secondary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Let's make your dream event a reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-secondary-foreground/80">
                      123 Event Plaza, City Center
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-secondary-foreground/80">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-secondary-foreground/80">
                      info@sandiseventcenter.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-secondary-foreground/80">
                      Mon-Sun: 9AM - 11PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-card/20 border border-card/30 rounded-lg text-secondary-foreground placeholder-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-card/20 border border-card/30 rounded-lg text-secondary-foreground placeholder-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Event Type"
                  className="w-full px-4 py-3 bg-card/20 border border-card/30 rounded-lg text-secondary-foreground placeholder-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-4 py-3 bg-card/20 border border-card/30 rounded-lg text-secondary-foreground placeholder-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transform hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <div className="mb-2 bg-slate-800 ">
                <SandiesLogo size="md" className="text-primary " />
              </div>
            </div>
            <p className="text-background/80 mb-8">
              Creating unforgettable moments since 2020
            </p>
            <div className="border-t border-background/20 pt-8">
              <p className="text-background/60">
                &copy; 2024 Sandies Event Center. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      {isVirtualTourActive && (
        <div className="fixed inset-0 bg-secondary/90 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setIsVirtualTourActive(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video">
                <img
                  src={virtualTourStops[virtualTourStep].image}
                  alt={virtualTourStops[virtualTourStep].title}
                  className="w-full h-full object-cover"
                />

                {/* Hotspots */}
                {virtualTourStops[virtualTourStep].hotspots.map(
                  (hotspot, index) => (
                    <div
                      key={index}
                      className="absolute w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform group"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    >
                      <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-secondary/90 text-secondary-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                          <p className="font-semibold">{hotspot.label}</p>
                          <p className="text-xs text-secondary-foreground/70">
                            {hotspot.info}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}

                {/* Navigation buttons */}
                <button
                  onClick={prevTourStop}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextTourStop}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {virtualTourStops[virtualTourStep].title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {virtualTourStep + 1} of {virtualTourStops.length}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">
                  {virtualTourStops[virtualTourStep].description}
                </p>

                {/* Progress indicator */}
                <div className="flex space-x-2 mt-6">
                  {virtualTourStops.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setVirtualTourStep(index)}
                      className={`flex-1 h-2 rounded-full transition-colors ${
                        index === virtualTourStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-secondary/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-secondary-foreground hover:text-secondary-foreground/70 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="bg-card rounded-2xl overflow-hidden">
              <div className="aspect-video">
                {selectedMedia.type === "video" ? (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <div className="text-center text-secondary-foreground">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Video: {selectedMedia.title}</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-muted-foreground capitalize">
                  {selectedMedia.category} Event
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCenterWebsite;
