import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.tsx";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import AnimLoader from "./components/AnimLoader.js";
import Location from "./Pages/Contactus.jsx";
import Landmarks from "./Pages/Landmarks.jsx";
import Photos from "./Pages/Gallery.jsx";
import Footer from "./Pages/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollRestore from "./components/ScrollRestore.js";
import PageNotFound from "./Pages/PageNotFound.jsx";

function App() {
	return (
		<BrowserRouter>
			<ScrollRestore />
			<div className="flex flex-col min-h-[90vh]">
				<AnimLoader />
				<ToastContainer closeOnClick={false} position="top-center" />
				<Navbar />
				<Routes>
					<Route path="*" element={<PageNotFound />} />
					<Route path="" element={<Home />} />
					<Route path="/contactus" element={<Location />} />
					<Route path="/photos" element={<Photos />} />
					<Route path="/landmark" element={<Landmarks />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
