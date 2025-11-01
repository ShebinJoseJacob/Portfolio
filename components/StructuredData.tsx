export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Coders Cafe",
    "url": "https://coderscafetech.com",
    "logo": "https://coderscafetech.com/logo.png",
    "description": "Expert rapid prototyping services for IoT, embedded systems, and edge computing. Transform your ideas into working prototypes in weeks.",
    "email": "mail.coderscafe@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://in.linkedin.com/company/coderscafe",
      "https://x.com/coderscafetech",
      "https://www.facebook.com/CodersCafeTech",
      "https://www.instagram.com/CodersCafeTech/",
      "https://github.com/CodersCafeTech",
      "https://www.youtube.com/@CodersCafeTech"
    ],
    "serviceType": [
      "Hardware Prototyping",
      "Firmware Development",
      "IoT Integration",
      "Machine Learning on Edge",
      "PCB Design and Manufacturing",
      "Technical Content Creation"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "foundingDate": "2014",
    "slogan": "Build. Ship. Scale."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Coders Cafe",
    "url": "https://coderscafetech.com",
    "description": "Expert rapid prototyping services for IoT and embedded systems",
    "publisher": {
      "@type": "Organization",
      "name": "Coders Cafe"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://coderscafetech.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Coders Cafe",
    "url": "https://coderscafetech.com",
    "logo": "https://coderscafetech.com/coders-cafe-logo.png",
    "description": "Expert rapid prototyping services for IoT, embedded systems, and edge computing",
    "priceRange": "$$",
    "telephone": "Contact via website",
    "email": "mail.coderscafe@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Worldwide"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rapid Prototyping Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Hardware Prototyping",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IoT Device Prototyping",
                "description": "Custom IoT device development from concept to prototype"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PCB Design & Manufacturing",
                "description": "Professional PCB design and prototype manufacturing"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Software Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Firmware Development",
                "description": "Embedded firmware development for microcontrollers and IoT devices"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Machine Learning on Edge",
                "description": "Deploy ML models on edge devices for real-time processing"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is rapid prototyping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rapid prototyping is the fast fabrication of a physical part, model, or assembly using 3D computer aided design (CAD). At Coders Cafe, we specialize in hardware and firmware prototyping for IoT and embedded systems, helping you transform ideas into working prototypes in weeks."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a prototype?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timeline varies based on project complexity, but we typically deliver working prototypes in 2-8 weeks. Simple IoT devices can be prototyped in 2-4 weeks, while complex embedded systems with custom PCBs may take 6-8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve a wide range of industries including IoT, healthcare, agriculture, industrial automation, consumer electronics, smart home, wearables, and edge computing. Our expertise spans hardware prototyping, firmware development, and ML on edge."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide PCB design services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive PCB design services including schematic capture, PCB layout, design for manufacturing (DFM), and prototype fabrication. We work with both simple single-layer boards and complex multi-layer designs."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with firmware development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialize in firmware development for various microcontrollers and platforms including Arduino, ESP32, STM32, Raspberry Pi, and more. We develop everything from simple sensor integrations to complex IoT systems with cloud connectivity."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
