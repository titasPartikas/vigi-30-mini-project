import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import MyShoppingListPage from "./pages/MyShoppingListPage/MyShoppingListPage";

function App() {
  const subHeaderLinks = [
    { to: "/", label: "Prekės" },
    { to: "/mano-prekes", label: "Mano prekės" },
  ];
  return (
    <div className="App">
      <Header />
      <SubHeader items={subHeaderLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mano-prekes" element={<MyShoppingListPage />} />
      </Routes>
    </div>
  );
}

export default App;
