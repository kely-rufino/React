import './App.css';
import {Example} from "./Components/Example";
import {Text} from "./Components/Text";
import {DocLink} from "./Components/DocLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example/>
        <Text/>
        <DocLink/>
      </header>
    </div>
  );
}

export default App;
