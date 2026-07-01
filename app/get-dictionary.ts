import type { Locale } from "@/i18n-config";

// We enumerate all dictionaries here for better security and performance
const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
