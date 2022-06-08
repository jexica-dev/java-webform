import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Account from "./Components/Account/Account";
import Main from "./Screen/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/genspark-webform" element={<Main />} exact />
        <Route path="/genspark-webform/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
