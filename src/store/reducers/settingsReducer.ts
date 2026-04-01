import { type Language } from '@/@types/settings';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadSettings, saveSettings } from './settingsStorage';

interface SettingsState {
  language: Language;
}

const initialState: SettingsState = loadSettings();

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;

      saveSettings({ language: state.language });
    },
  },
});

export const { setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;