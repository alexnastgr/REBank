// components
import Footer from "@/components/Footer";
import Keypad from "./components/Keypad";
import { Visa, Mastercard, Maestro, ReBank } from "@/assets/icons/logos";

function App() {
  return (
    <div className="page-content">
      {/* atm body */}
      <div className="atm">
        {/* moitor */}
        <div className="monitor-container">
          {/* screen */}
          <div className="bg-white w-[850px] rounded overflow-hidden">
            {/* header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div className="flex flex-row gap-3 items-center">
                <div className="text-blue-600">
                  <ReBank />
                </div>
                <div className="text-gray-800 font-bold text-3xl">REBank</div>
              </div>

              <div className="text-right text-sm text-gray-600">
                <div>Customer support</div>
                <div className="font-semibold">support@alexanast.gr</div>
              </div>
            </div>
            {/*  screen container */}
            <div className="screen-container">
              {/* left text area */}
              <div>
                <h1 className="text-4xl font-semibold mb-6">Enter Client ID</h1>

                <div className="space-y-2 text-xl text-gray-200">
                  <div className="flex flex-row gap-5">
                    <input
                      type="password"
                      maxLength={1}
                      className="digit-box"
                    />
                    <input
                      type="password"
                      maxLength={1}
                      className="digit-box"
                    />
                    <input
                      type="password"
                      maxLength={1}
                      className="digit-box"
                    />
                    <input
                      type="password"
                      maxLength={1}
                      className="digit-box"
                    />
                    <input
                      type="password"
                      maxLength={1}
                      className="digit-box"
                    />
                  </div>
                </div>

                {/* accepted card logos */}
                <div className="flex gap-3 mt-2 items-center h-10 mt-5">
                  <span className="text-white rounded text-xs">
                    <Mastercard width={40} />
                  </span>
                  <span className="text-white rounded text-xs">
                    <Visa width={40} />
                  </span>

                  <span className="text-blue-700  rounded text-xs">
                    <Maestro width={40} />
                  </span>
                </div>
              </div>

              {/* card slot */}
              <Keypad />
            </div>

            {/* footer buttons */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
