export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KheeHoo",
    "description": "Empowering businesses with innovative solutions and cutting-edge technology to drive growth and success in the digital age.",
    "url": "https://kheehoo.com",
    "logo": "https://kheehoo.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "info@kheehoo.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street, Suite 100",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/kheehoo",
      "https://twitter.com/kheehoo",
      "https://facebook.com/kheehoo"
    ],
    "foundingDate": "2019",
    "numberOfEmployees": "50+",
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Mobile App Development", 
      "AI Solutions",
      "Cloud Services",
      "Business Intelligence",
      "Cybersecurity"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KheeHoo",
    "url": "https://kheehoo.com",
    "description": "Innovative business solutions and cutting-edge technology services",
    "publisher": {
      "@type": "Organization",
      "name": "KheeHoo"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kheehoo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KheeHoo",
    "description": "Technology company providing innovative business solutions",
    "url": "https://kheehoo.com",
    "telephone": "+1-555-123-4567",
    "email": "info@kheehoo.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street, Suite 100",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  );
}
