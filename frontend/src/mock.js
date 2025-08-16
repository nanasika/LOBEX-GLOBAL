// Mock data for LOBEX Global Logistics website
export const mockData = {
  // Company information
  company: {
    name: "LOBEX Global Logistics",
    slogan: "Bridging Sierra Leone to Global Markets",
    founders: ["Rebecca Marian Bhonopa", "Mrs. Loretta Abban Mensah"],
    location: "Freetown, Sierra Leone",
    phone: "+232 79 041 364",
    email: "info@lobexglobal.com",
    whatsapp: "+23279041364"
  },

  // Services data
  services: [
    {
      id: 1,
      title: "Construction Materials",
      description: "Quality building materials sourced directly from China including cement, steel, tiles, and hardware.",
      icon: "Building",
      features: ["Bulk ordering available", "Quality assured", "Competitive China pricing", "Fast delivery"],
      targetMarket: "Contractors & Builders"
    },
    {
      id: 2,
      title: "Electronics & Gadgets",
      description: "Latest technology and electronic devices from phones to computers and accessories.",
      icon: "Smartphone",
      features: ["Latest models", "Warranty included", "Bulk discounts", "Technical support"],
      targetMarket: "Retailers & Distributors"
    },
    {
      id: 3,
      title: "Clothing & Accessories",
      description: "Fashion and apparel for every style and season, from casual wear to business attire.",
      icon: "Shirt",
      features: ["Seasonal collections", "Various sizes", "Quality fabrics", "Fashion-forward"],
      targetMarket: "Fashion Retailers"
    },
    {
      id: 4,
      title: "Machinery & Vehicle Parts",
      description: "Industrial equipment and automotive components for various applications.",
      icon: "Wrench",
      features: ["OEM quality", "Compatible parts", "Industrial grade", "Technical specs"],
      targetMarket: "Mechanics & Workshops"
    },
    {
      id: 5,
      title: "Salon & Beauty Supplies",
      description: "Professional beauty and salon equipment for hair, nails, and skincare businesses.",
      icon: "Scissors",
      features: ["Professional grade", "Complete sets", "Training included", "Maintenance support"],
      targetMarket: "Salon Owners"
    },
    {
      id: 6,
      title: "Interior Decoration",
      description: "Furniture, home decor, lighting, and interior design items to transform any space.",
      icon: "Home",
      features: ["Style variety", "Quality materials", "Bulk discounts", "Design consultation"],
      targetMarket: "Interior Designers"
    }
  ],

  // Market solutions
  marketSolutions: [
    {
      target: "Contractors",
      benefits: ["Direct-from-China pricing", "Bulk order consolidation", "Quality materials", "Technical support"],
      description: "Complete construction material solutions with competitive pricing and reliable delivery."
    },
    {
      target: "Retailers",
      benefits: ["Diverse product range", "Flexible ordering", "Market insights", "Display support"],
      description: "Comprehensive retail solutions from electronics to fashion with business support."
    },
    {
      target: "Online Sellers",
      benefits: ["Drop shipping available", "Product catalogs", "Marketing materials", "Inventory management"],
      description: "E-commerce friendly solutions with logistics support for online businesses."
    },
    {
      target: "Mechanics",
      benefits: ["Genuine parts", "Technical documentation", "Bulk pricing", "Fast delivery"],
      description: "Reliable automotive and machinery parts with technical support and documentation."
    },
    {
      target: "Salon Owners",
      benefits: ["Professional equipment", "Training provided", "Maintenance support", "Latest trends"],
      description: "Complete salon setup solutions with equipment, training, and ongoing support."
    }
  ],

  // How it works process
  process: [
    {
      step: 1,
      title: "Browse & Request Quote",
      description: "Explore our product categories or submit a custom quote request with your specific requirements.",
      icon: "Search"
    },
    {
      step: 2,
      title: "Sourcing & Consolidation",
      description: "Our China team sources your products, conducts quality checks, and consolidates shipments for efficiency.",
      icon: "Package"
    },
    {
      step: 3,
      title: "Shipping & Clearance",
      description: "We handle all shipping logistics and customs clearance procedures to ensure smooth delivery.",
      icon: "Truck"
    },
    {
      step: 4,
      title: "Delivery in Sierra Leone",
      description: "Final delivery to your location in Sierra Leone with full tracking and customer support.",
      icon: "MapPin"
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "John Kamara",
      role: "Construction Contractor",
      company: "Kamara Construction Ltd",
      content: "LOBEX has been our trusted partner for construction materials. Their China connections save us 40% on costs while maintaining quality.",
      rating: 5,
      image: null
    },
    {
      id: 2,
      name: "Fatima Sesay",
      role: "Electronics Retailer",
      company: "Tech Zone Freetown",
      content: "Excellent service and quality products. The team understands our market needs perfectly and delivers on time.",
      rating: 5,
      image: null
    },
    {
      id: 3,
      name: "Mohamed Bangura",
      role: "Auto Parts Dealer",
      company: "Bangura Motors",
      content: "Professional service from quote to delivery. LOBEX makes importing simple and reliable for our business.",
      rating: 5,
      image: null
    },
    {
      id: 4,
      name: "Adama Kargbo",
      role: "Salon Owner",
      company: "Glamour Hair Studio",
      content: "The salon equipment package was perfect for our new location. Training and support made setup seamless.",
      rating: 5,
      image: null
    }
  ],

  // Statistics
  stats: [
    { value: "500+", label: "Happy Customers" },
    { value: "50+", label: "Product Categories" },
    { value: "5+", label: "Years Experience" },
    { value: "99%", label: "Customer Satisfaction" }
  ],

  // Contact form submissions (mock storage)
  contactSubmissions: [],

  // Quote requests (mock storage)
  quoteRequests: []
};