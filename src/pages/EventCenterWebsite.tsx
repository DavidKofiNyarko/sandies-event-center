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
  Leaf,
  RocketIcon,
  Lightbulb,
} from "lucide-react";
import { SandiesLogo } from "@/components/SandiesLogo";

const EventCenterWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVirtualTourActive, setIsVirtualTourActive] = useState(false);
  const [virtualTourStep, setVirtualTourStep] = useState(0);
  const [isExploring, setIsExploring] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const events = [
    {
      icon: Heart,
      title: "Weddings",
      description:
        "Step into forever with elegance. Our enchanting spaces set the stage for magical weddings filled with love, beauty, and memories that last a lifetime",
    },
    {
      icon: Sparkles,
      title: "Engagements",
      description:
        "Celebrate the beginning of your journey in style. From intimate moments to grand gestures, we make your engagement sparkle with romance",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Where business meets brilliance. Our professional venues provide the perfect backdrop for success — from board meetings to gala dinners.",
    },
    {
      icon: PartyPopper,
      title: "Private Parties",
      description:
        "Turn any occasion into an unforgettable celebration. Whether it’s a birthday, anniversary, or just because — we create moments worth cherishing.",
    },
    {
      icon: Users,
      title: "Meetings & Conferences",
      description:
        "Fuel productivity and inspiration. Our modern, well-equipped spaces foster meaningful discussions, powerful networking, and innovative ideas.",
    },
    {
      icon: Users,
      title: "Social Gatherings",
      description:
        "Connect, share, and celebrate life. Our versatile venues are designed to bring friends, family, and colleagues together in warmth and style..",
    },
    {
      icon: Leaf,
      title: "Funeral Events",
      description:
        "A serene and dignified setting to honor loved ones. We provide a respectful space where memories are cherished and legacies celebrated.",
    },
    {
      icon: RocketIcon,
      title: "Product Lunch & Trade Shows",
      description:
        "Unveil your vision in grand style. With dynamic spaces tailored for innovation and impact, your launch or showcase will shine brighter than ever.",
    },
    {
      icon: Lightbulb,
      title: "Workshop and Seminars",
      description:
        "Inspire minds and spark ideas. Our learning-friendly environments create the perfect atmosphere for growth, collaboration, and knowledge sharing",
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
        "No pauses, no worries. With state-of-the-art backup power and professional-grade sound and lighting, your event flows seamlessly — from the first moment to the final toast",
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

  const galleryMedia = [
    {
      id: 1,
      type: "image",
      category: "weddings",
      title: "Elegant Wedding Reception",
      url: "https://lh3.googleusercontent.com/pw/AP1GczOlIh4Hn4pRax8hX7InwD9jwblvRViwSlzHH3-E56bIZjC6RRAoFHgH7EcGOTe7P1wD94WROWJLcF7_APg2d61rEGgXGwM4DOoUhGM5GVrMSmwC36OXbHwIm1E_oWJQl8Pf2BslVXQrGgMikILRPmEb=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 2,
      type: "image",
      category: "weddings",
      title: "Bridal Suite Setup",
      url: "https://lh3.googleusercontent.com/pw/AP1GczPrWiKJxXKus7Z41Jea20QDE0aFXJI3TDXPQEjSB9o2x1-qJKVSWbGrkdR5LZ17QVeh89wRpGi0UimRKnPLLOQW721o7Bz_9j379tS5fmxJF8CVtCLms1owPvguEran3nHmdc8fd_TemUU-_chNqpw=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 3,
      type: "video",
      category: "weddings",
      title: "Wedding Ceremony Highlights",
      url: "https://youtu.be/FVhMPKdAR8g",
    },
    {
      id: 4,
      type: "image",
      category: "weddings",
      title: "Dance Floor Magic",
      url: "https://lh3.googleusercontent.com/pw/AP1GczOO97ByPubDlbHGgB9CJ5RLPm7ELu0QWOSV6mg0HQOGI-MKj4kp7xp86srifzcZWfO-oy3OZGwO-6nYqLl9Rvq0ASFuJzaMWshJ7eApDpxVkk9e9DfuKH9UZovlfy0aqVRFVfGrR4O4P1YR7Fgfki8=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 5,
      type: "image",
      category: "corporate",
      title: "Executive Conference Setup",
      url: "https://lh3.googleusercontent.com/pw/AP1GczOZxr7KDeIL1G1DzingxJTCB2ThkNO8HrbWHPRKR5sc1XOkEMITxVIBiHs1jTjHpYcUTdatNTpVPQWEJ5TmmBsa099UzgdaqZOsAHeqCQXqVdqURAf9qNj5Kb9zVtWkLUZDBYoxBxNkXa22kEb3-1W3=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 6,
      type: "image",
      category: "weddings",
      title: "Networking Cocktail Hour",
      url: "https://lh3.googleusercontent.com/pw/AP1GczNyx5sxZc69NMsbD_WtGy65CnioUbmyu1kGW8WpW0EtdUoB2gAkMPOhwBebroiCCG3yRrZrre-WnAC7plByV6f9nloI61BLsi7vmlCUBXaUjGn1ElOq2CQgxT4MOJRiUutOhLtPHwxUmT7BjEBIO2uJ=w871-h653-s-no-gm?authuser=0",
    },
    {
      id: 7,
      type: "image",
      category: "parties",
      title: "Birthday Celebration Setup",
      url: "https://lh3.googleusercontent.com/pw/AP1GczPUdoOTs5GYCNSTRMQ1gV3i_KtUexUFsWT1ThLON480I4gPbH1vdcTAqocxPK6hLXszIkjhNWFbO1lzfHGG2bH76HeNkrgieFrbFKP4LR0aondSJKWMZU5MJAbizmFeWP7pY_zdJpc9B7WiRzsTS3DH=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 8,
      type: "image",
      category: "parties",
      title: "Intimate Anniversary Dinner",
      url: "https://lh3.googleusercontent.com/pw/AP1GczOaaW2UwTT1WDPVXOghbi4aNCc7nqaGxqnvzHQrKVbV3AljQIin9GTt64vkQaXQNfWclXlEw29ZBjndcBVFa9eBiuHhRJVp90x4hRvyusionInppczwpTDQSW2GgmAJEGqkv565066umTQWGZsFNZ39=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 9,
      type: "image",
      category: "weddings",
      title: "Memorable Anniversary Party",
      url: "https://lh3.googleusercontent.com/pw/AP1GczP69ZzBN49kM3zmHTf_tnN7AZxBafYM57f5VtVV87tFaWkO48ufqqq19TIkGBXYMyO79u8GOWlJJtaLfLQZ7c-Pku1xy6CSrtk35A7RXpJsaK4bLdV6sWU-U1ClpfJp0HbEMyI663aebGHbVrXuP0Ie=w743-h991-s-no-gm?authuser=0",
    },
    {
      id: 10,
      type: "video",
      category: "parties",
      title: "Memorable Anniversary Party",
      url: "https://youtube.com/shorts/F_5L7ynaSVM?feature=share",
    },
    {
      id: 11,
      type: "image",
      category: "venue",
      title: "Main Hall Overview",
      url: "https://lh3.googleusercontent.com/pw/AP1GczNMWE3SIn0K1BCnVyLCSawWPL9lG9e5mwStTnzHXrrxaiwRSLoCvwdYkdrzWp6TM9bHELo2Zu5wiW0SfIdfQ5YQk6I8HkXFE_M1HJq-k3eYfHN5PvlB-UxrPsWGZmA1uQbHwssniF2STo8a2I2tXZnh=w731-h975-s-no-gm?authuser=0",
    },
    {
      id: 12,
      type: "image",
      category: "venue",
      title: "Upper Floor Dining Area",
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 13,
      type: "image",
      category: "venue",
      title: "Bridal Preparation Room",
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 14,
      type: "video",
      category: "venue",
      title: "Virtual Venue Tour",
      url: "https://youtube.com/shorts/yM-crfxZYME?feature=share",
    },
    {
      id: 15,
      type: "video",
      category: "venue",
      title: "Wedding Reception Highlights",
      url: "https://youtube.com/shorts/zT82oUc7sXw?feature=share",
    },
    {
      id: 16,
      type: "video",
      category: "venue",
      title: "Wedding",
      url: "https://youtube.com/shorts/h5beRudjowA?feature=share",
    },
    {
      id: 17,
      type: "video",
      category: "venue",
      title: "Grand Ball Room, Ground  ",
      url: "https://youtube.com/shorts/rzHc6zqnxBk?feature=share",
    },
    {
      id: 18,
      type: "video",
      category: "venue",
      title: "Top Floor",
      url: "https://youtube.com/shorts/TivKBFWHl2c?feature=share",
    },
  ];

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
    {
      title: "Catering Kitchen",
      description:
        "State-of-the-art commercial kitchen where our expert chefs prepare exquisite cuisine for your event.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNMWE3SIn0K1BCnVyLCSawWPL9lG9e5mwStTnzHXrrxaiwRSLoCvwdYkdrzWp6TM9bHELo2Zu5wiW0SfIdfQ5YQk6I8HkXFE_M1HJq-k3eYfHN5PvlB-UxrPsWGZmA1uQbHwssniF2STo8a2I2tXZnh=w731-h975-s-no-gm?authuser=0",
      hotspots: [
        {
          x: 40,
          y: 50,
          label: "Prep Stations",
          info: "Multiple work areas for efficient service",
        },
        {
          x: 70,
          y: 30,
          label: "Storage",
          info: "Temperature controlled storage areas",
        },
      ],
    },
    {
      title: "Outdoor Garden Area",
      description:
        "Beautiful outdoor space perfect for ceremonies, cocktails, or intimate gatherings surrounded by nature.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPUdoOTs5GYCNSTRMQ1gV3i_KtUexUFsWT1ThLON480I4gPbH1vdcTAqocxPK6hLXszIkjhNWFbO1lzfHGG2bH76HeNkrgieFrbFKP4LR0aondSJKWMZU5MJAbizmFeWP7pY_zdJpc9B7WiRzsTS3DH=w731-h975-s-no-gm?authuser=0",
      hotspots: [
        {
          x: 50,
          y: 40,
          label: "Pergola",
          info: "Covered area for outdoor events",
        },
        {
          x: 25,
          y: 70,
          label: "Lounge Seating",
          info: "Comfortable outdoor furniture",
        },
      ],
    },
    {
      title: "VIP Lounge",
      description:
        "Exclusive relaxation area for VIP guests with premium amenities and privacy.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOaaW2UwTT1WDPVXOghbi4aNCc7nqaGxqnvzHQrKVbV3AljQIin9GTt64vkQaXQNfWclXlEw29ZBjndcBVFa9eBiuHhRJVp90x4hRvyusionInppczwpTDQSW2GgmAJEGqkv565066umTQWGZsFNZ39=w731-h975-s-no-gm?authuser=0",
      hotspots: [
        {
          x: 30,
          y: 50,
          label: "Refreshment Bar",
          info: "Complimentary beverages and snacks",
        },
        {
          x: 70,
          y: 60,
          label: "Private Restroom",
          info: "Dedicated facilities for VIP guests",
        },
      ],
    },
    {
      title: "Grand Staircase",
      description:
        "Elegant architectural feature connecting both levels of our venue, perfect for grand entrances.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOlIh4Hn4pRax8hX7InwD9jwblvRViwSlzHH3-E56bIZjC6RRAoFHgH7EcGOTe7P1wD94WROWJLcF7_APg2d61rEGgXGwM4DOoUhGM5GVrMSmwC36OXbHwIm1E_oWJQl8Pf2BslVXQrGgMikILRPmEb=w731-h975-s-no-gm?authuser=0",
      hotspots: [
        {
          x: 50,
          y: 30,
          label: "Ornate Railings",
          info: "Handcrafted ironwork details",
        },
        {
          x: 50,
          y: 70,
          label: "Landing Area",
          info: "Perfect photo opportunity spot",
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
          <div className="flex justify-between items-center h-14">
            <a href="/">
              <div className="flex items-center">
                <SandiesLogo
                  size="md"
                  className="w-32 sm:w-[220px] sm:mt-9 lg:w-[229px] lg:mt-10 md:mt-9 md:w-[220px]"
                />
              </div>
            </a>

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
                onClick={() => setIsFormModalOpen(true)}
                className="bg-gradient-gold text-primary-foreground px-6 py-2 rounded-full hover:shadow-glow transform hover:scale-105 transition-all font-semibold"
              >
                Book Now
              </button>
            </div>

            <button
              className="md:hidden z-50"
              onClick={() => setIsMenuOpen((prev) => !prev)} // Use functional update for reliability
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-14 bg-background border-t border-border z-40">
            <div className="px-4 py-3 space-y-2">
              <a
                href="#home"
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
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
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
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
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
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
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
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
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg"
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
                onClick={() => {
                  setIsFormModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left bg-gradient-gold text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-glow"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="pt-5 min-h-screen bg-gradient-elegant flex items-center"
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
          <div className="relative bg-gradient-to-r from-black via-neutral-700 to-black text-center py-16 px-6 rounded-2xl shadow-2xl border border-yellow-600 mt-7">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 via-transparent to-yellow-600/10 animate-pulse rounded-2xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-8">
                Your special moments deserve nothing less than extraordinary —{" "}
                <span className="text-yellow-500">
                  let’s make it unforgettable.
                </span>
              </p>

              <button
                onClick={() => setIsFormModalOpen(true)}
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-yellow-500/40"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-15 bg-background">
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
                <div className="text-6xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-2">
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
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-secondary-foreground text-black font-bold text-2xl">
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

      <section id="facilities" className="py-20 bg-background ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-10 rounded-3xl bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              World-Class Facilities
            </h2>
            <p className=" max-w-3xl text-2xl shadow-glow font-bold mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredMedia().map((media) => (
              <div
                key={media.id}
                className="group relative aspect-square bg-muted rounded-2xl overflow-hidden cursor-pointer hover:shadow-glow transition-all duration-300"
                onClick={() => setSelectedMedia(media)}
              >
                {media.type === "video" ? (
                  (() => {
                    const videoUrl = media.url;
                    if (
                      videoUrl &&
                      (videoUrl.includes("youtube.com") ||
                        videoUrl.includes("youtu.be"))
                    ) {
                      let videoId = null;
                      if (videoUrl.includes("/watch?v=")) {
                        videoId = videoUrl.split("/watch?v=")[1].split("&")[0];
                      } else if (videoUrl.includes("/shorts/")) {
                        videoId = videoUrl.split("/shorts/")[1].split("?")[0];
                      } else if (videoUrl.includes("youtu.be/")) {
                        videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
                      }
                      if (videoId) {
                        return (
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={media.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        );
                      }
                    }
                    if (
                      videoUrl &&
                      /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(videoUrl)
                    ) {
                      return (
                        <video
                          src={videoUrl}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      );
                    }
                    return (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <Play className="h-12 w-12 text-primary" />
                      </div>
                    );
                  })()
                ) : (
                  <img
                    src={media.url}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
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

      {/* Footer */}
      <section
        id="contact"
        className="py-8 bg-gradient-to-r from-black via-neutral-700 to-black text-center px-6 rounded-2xl shadow-2xl border border-yellow-600 text-secondary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold mb-2 sm:text-3xl">
              Ready to Plan Your Event?
            </h2>
            <p className="text-base text-secondary-foreground/80 sm:text-lg">
              Let's make your dream event a reality
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_1fr_auto]">
            <div className="lg:col-span-1 lg:row-span-1">
              <h3 className="text-lg font-bold mb-4 text-left sm:text-xl">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-justify text-sm sm:text-base">
                      Location
                    </p>
                    <p className="text-secondary-foreground/80 text-sm sm:text-base">
                      Kutunse satellite, behind DVLA
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-justify">
                      Phone
                    </p>
                    <p className="text-secondary-foreground/80 text-sm sm:text-base">
                      +233-206273120 / +233-240468404
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-justify">
                      Email
                    </p>
                    <p className="text-secondary-foreground/80 text-sm sm:text-base">
                      sandiesastoria@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-justify">
                      Hours
                    </p>
                    <p className="text-secondary-foreground/80 text-sm sm:text-base">
                      Mon-Sun: 9AM - 5PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-80 sm:h-96 md:h-[20rem] lg:h-[18rem] lg:w-[45rem] lg:col-span-2 lg:row-span-2">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79145.5044359981!2d-0.2918029!3d5.7590444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf0bd2959b78e9%3A0xad22e55042d3ac60!2sSandie%E2%80%99s%20Astoria%20Banquet!5e1!3m2!1sen!2sgh!4v1755651431730!5m2!1sen!2sgh"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="lg:col-span-3 lg:row-span-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <a href="/">
                  <SandiesLogo
                    size="md"
                    className="text-primary w-32 sm:w-40 lg:w-[229px]"
                  />
                </a>
                <p className="text-secondary-foreground/80 text-sm sm:text-base">
                  Creating unforgettable moments since 2020
                </p>
              </div>
              <div className="border-t  border-secondary-foreground/20 pt-0 text-center">
                <p className="text-secondary-foreground/60 text-sm sm:text-base">
                  &copy; 2025 Sandies Event Center. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}

      {isVirtualTourActive && (
        <div className="fixed inset-0 bg-secondary/90 z-50 flex items-center  justify-center p-4">
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

                <div className="mt-6">
                  <div className="flex space-x-2 mb-4">
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
                  <div className="flex overflow-x-auto gap-2 py-2 scrollbar-hide">
                    {virtualTourStops.map((stop, index) => (
                      <button
                        key={index}
                        onClick={() => setVirtualTourStep(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === virtualTourStep
                            ? "border-primary scale-105"
                            : "border-transparent hover:border-muted-foreground"
                        }`}
                      >
                        <img
                          src={stop.image}
                          alt={stop.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  (() => {
                    const videoUrl =
                      selectedMedia.videoUrl || selectedMedia.url;
                    const isYouTube =
                      videoUrl &&
                      (videoUrl.includes("youtube.com") ||
                        videoUrl.includes("youtu.be"));
                    const isDirectVideo =
                      videoUrl &&
                      /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i.test(videoUrl);
                    if (isYouTube) {
                      let videoId = null;
                      if (videoUrl.includes("/watch?v=")) {
                        videoId = videoUrl.split("/watch?v=")[1].split("&")[0];
                      } else if (videoUrl.includes("/shorts/")) {
                        videoId = videoUrl.split("/shorts/")[1].split("?")[0];
                      } else if (videoUrl.includes("youtu.be/")) {
                        videoId = videoUrl.split("ytu.be/")[1].split("?")[0];
                      }
                      if (videoId) {
                        return (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={selectedMedia.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                          ></iframe>
                        );
                      }
                      return (
                        <div className="text-white p-8">
                          Unable to embed this YouTube video.
                        </div>
                      );
                    } else if (isDirectVideo) {
                      return (
                        <video
                          src={videoUrl}
                          controls
                          autoPlay
                          className="w-full h-full rounded-lg"
                        >
                          Your browser does not support the video tag.
                        </video>
                      );
                    } else {
                      return (
                        <div className="text-white p-8 text-center">
                          <p>Cannot preview this video type.</p>
                          <a
                            href={videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-primary"
                          >
                            Open Video in New Tab
                          </a>
                        </div>
                      );
                    }
                  })()
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

      {isFormModalOpen && (
        <div className="fixed inset-0 bg-secondary/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-card/10 backdrop-blur-md rounded-3xl p-8">
            <button
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-4 right-4 text-secondary-foreground hover:text-secondary-foreground/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-secondary-foreground">
              Book Your Event Now
            </h3>
            <div className="space-y-6">
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
                type="button"
                className="w-full bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transform hover:scale-105 transition-all"
                onClick={() => setIsFormModalOpen(false)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCenterWebsite;
