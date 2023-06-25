import app from "./App.module.css";
import { Tooltip } from "react-tooltip";
function App() {
  return (
    <>
      <h1 className={app.h1}>React ToolTip </h1>
      <div className={app.tooltip}>
        <button
          className={app.btn}
          data-tooltip-content="Here i have added a react tooltip Functionality"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          // adding a comment here
        >
          CheckTooltip
        </button>
        <Tooltip id="my-tooltip"></Tooltip>
      </div>
    </>
  );
}

export default App;
