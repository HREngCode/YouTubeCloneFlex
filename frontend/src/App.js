// General Imports
import { Routes, Route} from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';


// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {      
  const [searchTerm, setSearchTerm] = useState(''); //variable in usestate to store search term typed in
      return (
        <div className="App">
          <Navbar />
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
          <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><YouTubePage searchTerm={searchTerm}/></PrivateRoute>}/>
          <Route path="/search" element={<PrivateRoute><SearchResultsPage /></PrivateRoute>} />
          <Route path="/video" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
          </Routes>
          <Footer />
        </div>
      );
}

export default App;
