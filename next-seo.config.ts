import { DefaultSeoProps } from "next-seo";
export const config: DefaultSeoProps = {
  defaultTitle:
    "Clattery House: Unveiling the Symphony of Technological Lifestyle",
  openGraph: {
    title:   "Clattery House: Unveiling the Symphony of Technological Lifestyle",
    description:
      "Welcome to Clattery House, a digital retreat where technology, lifestyle, and travel intersect to shape a harmonious symphony of modern living. Our blog is a window into the ever-evolving world of innovation, personal growth, and exploration.",
    type: "website",
    locale: "en_IE",
    url: "https://clatteryhouse.com/",
    siteName: "Clattery House",
    images: [
      {
        url: "/website_image.png",
        width: 800,
        height: 600,
        alt: "Clattery House",
      },
    ],
  },
  twitter: {
    handle: "@clatter_house",
    site: "@clattery_house",
    cardType: "A blogging website",
  },
};

