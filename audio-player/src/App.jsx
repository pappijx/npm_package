import { useState } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState(false);
  return (
    <div>
      <button value="open" formMethod="dialog">
        Cancel
      </button>

      <dialog
        id="favDialog"
        style={{ width: "80%" }}
        onClose={() => alert("hello")}
      >
        <form>
          <p>
            <label>
              Favorite animal:
              <select>
                <option value="default">Choose…</option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
          </p>
          <div>
            <button value="cancel" formMethod="dialog">
              Cancel
            </button>
            <button id="confirmBtn" value="default">
              Confirm
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default App;
