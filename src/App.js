import "Styles/Global.css";
import { DataProvider } from "Context/DataProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Routes from "Page/Routes/Routes";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    </DataProvider>
  );
}
export default App;
