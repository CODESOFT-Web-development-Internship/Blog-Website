
import "./App.css";
import Navigation from "./Pages/Nav/Navigation";
import SearchHeader from "./Pages/Home/Header/SearchHeader";
import HomePage from "./Pages/Home/HomePage";
import FooterSection from "./Pages/Footer/Footer";
import NewPost from "./Pages/NewPost/NewPost";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import SinglePost from "./Pages/SinglePost/SinglePost";
import ContactPage from "./Pages/Contact/ContactPage";
import BlogPage from "./Pages/BlogPage/BlogPage";

function App() {

  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SinglePost" element={<SinglePost />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
        </Routes>
        <FooterSection />
      </>
    </Router>
  );
}

export default App;
