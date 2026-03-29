import { useSound } from "@/hooks/useSound";
import { type KeyBtnProps, colors } from "@/@types/keypad";

export default function KeyButton({ label, type }: KeyBtnProps) {
  const { play } = useSound("/sounds/beep.mp3", {
    volume: 0.6,
  });

  const style = type === "number" ? "numberBtn" : "operateBtn";

  const key = String(label).toLowerCase();

  const bg = colors[key] || "from-gray-200 to-gray-400";

  return (
    <div className={[style, bg].join(" ")} onMouseDown={play}>
      {label}
    </div>
  );
}
