// hooks
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setLanguage } from "@/store/reducers/settingsReducer";
import { GR } from "@/assets/icons/flags";

export default function Footer() {

  const language = useAppSelector(state => state.settings.language);

    const dispatch = useAppDispatch();

    const toggleLang = () => {
      dispatch(setLanguage(language == 'elGR' ? 'enUS' : 'elGR'))
    }

  return (
    <div className="flex">
      <button onClick={toggleLang} className="flex-1 p-5 bg-gray-200 hover:bg-gray-300 text-left font-medium flex items-center gap-2">
        <div className="w-8 h-8">
          <GR />
        </div>
        {language == 'elGR' ? 'Change to English' : 'Αλλαγή σε Ελληνικά'}
      </button>

      <button className="flex-1 p-5 bg-gray-200 hover:bg-gray-300 text-right font-medium flex items-center justify-end gap-2">
        Forgot Client ID ?<span className="text-xl">➡</span>
      </button>
    </div>
  );
}
