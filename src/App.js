import "./App.css"
import {First} from "./component_준완/index";
import {Total} from "./components_준철/index";
import {Elder} from "./component_성락/index";
import { Student } from "./Component_student/Index";

console.debug("src/App.js invoked");

function App() {
  console.groupCollapsed("App() invoked.");console.groupEnd();
  return (
    <div className="App background">
      <First/>
      <Student/>
      <Total/>
      <Elder/>
    </div>
  );
}

export default App;