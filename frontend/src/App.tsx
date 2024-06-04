import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {
  Home,
  About,
  Contact,
  Beginner,
  Tech,
  Business,
  Map,
  Job,
  SoftwareDev,
  UIUXDesign,
  ProductDesign,
  Programs,
  AiData,
  UptickTalentMap,
  UptickTalentBusiness,
  BlogPreview,
  BlogDetails,
} from "./pages";
import ScrollToTop from "./ScrollToTop";
import JobDetails from "./components/JobDetails";
import JobApplicationForm from "./pages/Job/JobApplicationForm";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs/beginner" element={<Beginner />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="programs/tech" element={<Tech />} />
        <Route path="/programs/business" element={<Business />} />
        <Route path="/programs/map" element={<Map />} />
        <Route path="/software-development" element={<SoftwareDev />} />
        <Route path="/uiux-design" element={<UIUXDesign />} />
        <Route path="/product-management" element={<ProductDesign />} />
        <Route path="/uptick-talent-map" element={<UptickTalentMap />} />
        <Route
          path="/uptick-talent-business"
          element={<UptickTalentBusiness />}
        />
        <Route path="/ai-data-program" element={<AiData />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<JobApplicationForm />} />
        <Route path="/blogs" element={<BlogPreview />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;