import "./styles.css";
// DataProvider
import { DataProvider } from "Context/DataProvider";
// Components
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "Page/Routes/Routes";

export default function App() {
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
