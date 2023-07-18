import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Pages/Nav/Navigation";
import SearchHeader from "./Pages/Home/Header/SearchHeader";
import HomePage from "./Pages/Home/HomePage";
import FooterSection from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      <FooterSection/>
    </>
  );
}

export default App;
