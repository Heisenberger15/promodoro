import type { Locale } from "@/i18n-config";
import "server-only";

const dictionaries = {
  en: () => import("@/languages/en.json").then((module) => module.default),
  fa: () => import("@/languages/fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? (await dictionaries.en());

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
