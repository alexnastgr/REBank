export interface KeyBtnProps {
  label: number | string;
  type: "operator" | "number";
}

export const colors: Record<string, string> = {
  enter: "from-green-300 to-green-500",
  correct: "from-yellow-300 to-yellow-500",
  cancel: "from-red-300 to-red-500",
  delete: "from-orange-300 to-orange-500",
};

