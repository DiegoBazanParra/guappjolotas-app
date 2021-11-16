import "Styles/Global.css";
// DataProvider
import { DataProvider } from "Context/DataProvider";
// Components
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
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
