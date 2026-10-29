export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Probably Stolen Wiki",
  shortName: "Probably Stolen",
  logoText: "P",
  tagline: "Trading, Appraisal, Crafting & Shop Guides",
  description: "Fan-made wiki for Probably Stolen Cyberpunk Shopkeeper Sim, covering trading, item appraisal, crafting, inventory, smuggling, and faction choices.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://probably-stolen-cyberpunk-shopkeeper-sim.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://probably-stolen-cyberpunk-shopkeeper-sim.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4348910/Probably_Stolen_Cyberpunk_Shopkeeper_Sim/",
  heroVideoId: "_T87bZW8zsc",
  social: {
    youtube: "https://www.youtube.com/@tinyBuildGAMES",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
