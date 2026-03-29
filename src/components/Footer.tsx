import { GR } from "@/assets/icons/flags";

export default function Footer() {
  return (
    <div className="flex">
      <button className="flex-1 p-5 bg-gray-200 hover:bg-gray-300 text-left font-medium flex items-center gap-2">
        <div className="w-8 h-8">
          <GR />
        </div>
        Αλλαγή σε Ελληνικά
      </button>

      <button className="flex-1 p-5 bg-gray-200 hover:bg-gray-300 text-right font-medium flex items-center justify-end gap-2">
        Forgot Client ID ?<span className="text-xl">➡</span>
      </button>
    </div>
  );
}
