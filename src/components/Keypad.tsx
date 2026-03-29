import KeyButton from "./buttons/KeyButton";
export default function Keypad() {
  return (
    <div className="bg-gray-300 p-3 rounded-xl shadow-lg flex gap-6">
      {/* number keypad */}
      <div className="grid grid-cols-3 gap-3">
        {/* Row 1 */}
        <KeyButton type="number" label={1} />
        <KeyButton type="number" label={2} />
        <KeyButton type="number" label={3} />
        {/* Row 2 */}
        <KeyButton type="number" label={4} />
        <KeyButton type="number" label={5} />
        <KeyButton type="number" label={6} />
        {/* Row 3 */}
        <KeyButton type="number" label={7} />
        <KeyButton type="number" label={8} />
        <KeyButton type="number" label={9} />
        {/* Row 4 */}
        <KeyButton type="number" label={""} />
        <KeyButton type="number" label={0} />
        <KeyButton type="number" label={"."} />
      </div>

      {/* operators */}
      <div className="flex flex-col gap-3">
        <KeyButton type="operator" label={"cancel"} />
        <KeyButton type="operator" label={"enter"} />
        <KeyButton type="operator" label={"correct"} />
        <KeyButton type="operator" label={"delete"} />
      </div>
    </div>
  );
}
