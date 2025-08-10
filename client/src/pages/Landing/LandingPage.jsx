import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Guide from "./Guide";
import Voices from "./Voices";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginModal from "../../components/LogicModal";

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const openModalFor = (userRole) => {
    setRole(userRole);
    setModalOpen(true);
  };

  const handleContinue = () => {
    setModalOpen(false);
    if (role === "buyer") navigate("/buyer");
    else if (role === "seller") navigate("/seller");
  };

  return (
    <div className="font-sans text-[#1F1F1F] bg-[#F9F6F2] scroll-smooth">
      <Header />
      <Hero openModalFor={openModalFor} />
      <About />
      <Guide />
      <Voices />
      <Newsletter />
      <Contact />
      <Footer />
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        role={role}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default LandingPage;
