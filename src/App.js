import "Styles/Global.css";
import { HashRouter } from "react-router-dom";
import Header from "Components/Header";
import Routes from "Routes/Routes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes />
      </HashRouter>
    </div>
  );
}
export default App;
