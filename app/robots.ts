import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/"]
    },
    sitemap: "https://yourdomain.com/sitemap.xml" // Update this with your actual domain when in production
  };
} 