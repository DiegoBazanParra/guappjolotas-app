import "Styles/Global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Routes from "Page/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}
export default App;
