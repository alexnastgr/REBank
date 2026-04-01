
import { type Language, DEFAULT_LANGUAGE, STORAGE_KEY } from '@/@types/settings';

export const loadSettings = (): { language: Language } => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return { language: DEFAULT_LANGUAGE };

    const parsed = JSON.parse(data);

    if (parsed.language === 'elGR' || parsed.language === 'enUS') {
      return { language: parsed.language };
    }

    return { language: DEFAULT_LANGUAGE };
  } catch {
    return { language: DEFAULT_LANGUAGE };
  }
};

export const saveSettings = (settings: { language: Language }) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
  }
};