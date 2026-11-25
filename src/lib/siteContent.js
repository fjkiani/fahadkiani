/**
 * Unified site content: Hygraph when configured, else local constants.
 * Keeps UI components free of CMS wiring.
 */

import { hygraphRequest, isHygraphConfigured } from "./hygraph";
import {
  exploreWorlds as localExploreWorlds,
  experiences as localExperiences,
  services as localServices,
  testimonials as localTestimonials,
} from "../constants";
import { projects as localProjects } from "../components/Projects/HealthHive/constants";

const SITE_QUERY = `
  query SiteContent {
    siteSetting(where: { singletonKey: "main" }) {
      heroHeadline
      heroSupporting
    }
    exploreItems(orderBy: order_ASC) {
      itemId
      title
      imgUrl
      path
    }
    projects(orderBy: order_ASC) {
      name
      description
      imageUrl
      sourceCodeLink
      caseStudyLink
      isNew
      tags
    }
    experiences(orderBy: order_ASC) {
      title
      companyName
      date
      iconBg
      points
    }
  }
`;

const DEFAULT_HERO = {
  headline: "Jedi Labs helps {word} your business 5x",
  supporting: "Web, data, automation, and machine learning solutions.",
  words: ["Grow", "Scale", "Save", "Expand", "Enhance"],
};

function mapProjects(rows) {
  if (!rows?.length) return null;
  return rows.map((p) => ({
    name: p.name,
    description: p.description,
    image: p.imageUrl,
    source_code_link: p.sourceCodeLink,
    case_study_link: p.caseStudyLink,
    isNew: Boolean(p.isNew),
    tags: (p.tags || []).map((name) => ({
      name,
      color: "blue-text-gradient",
    })),
  }));
}

function mapExplore(rows) {
  if (!rows?.length) return null;
  return rows.map((w) => ({
    id: w.itemId,
    title: w.title,
    imgUrl: w.imgUrl,
    path: w.path,
  }));
}

function mapExperiences(rows) {
  if (!rows?.length) return null;
  return rows.map((e) => ({
    title: e.title,
    company_name: e.companyName,
    date: e.date,
    iconBg: e.iconBg || "#383E56",
    points: e.points || [],
    icon: null,
  }));
}

/**
 * Load homepage / portfolio content.
 * Always resolves; never throws for missing CMS config.
 */
export async function getSiteContent() {
  const fallback = {
    source: "local",
    hero: DEFAULT_HERO,
    exploreWorlds: localExploreWorlds,
    projects: localProjects,
    experiences: localExperiences,
    services: localServices,
    testimonials: localTestimonials,
  };

  if (!isHygraphConfigured) return fallback;

  const data = await hygraphRequest(SITE_QUERY);
  if (!data) return fallback;

  const setting = data.siteSetting;

  return {
    source: "hygraph",
    hero: {
      headline: setting?.heroHeadline || DEFAULT_HERO.headline,
      supporting: setting?.heroSupporting || DEFAULT_HERO.supporting,
      words: DEFAULT_HERO.words,
    },
    exploreWorlds: mapExplore(data.exploreItems) || localExploreWorlds,
    projects: mapProjects(data.projects) || localProjects,
    experiences: mapExperiences(data.experiences) || localExperiences,
    services: localServices,
    testimonials: localTestimonials,
  };
}

export { isHygraphConfigured };
