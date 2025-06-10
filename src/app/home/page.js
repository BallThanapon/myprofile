"use client";

import { Container, Box, FormControlLabel, Switch } from "@mui/material";
import PersonnalInfoCard from "./personalInfoCard";
import EducationCard from "./EducationCard";
import TechnicalCard from "./TechnicalCard";
import ExperienceCard from "./ExperienceCard";
import Fade from "@mui/material/Fade";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "motion/react";
import AwardsCard from "./AwardsCard";

function HomePage() {
  const [checkedperCard, setCheckedperCard] = useState(true);
  const [checkedperCard2, setCheckedperCard2] = useState(true);
  const [checkededuCard, setCheckededuCard] = useState(true);

  // const handleScroll = () => {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   const position = window.pageYOffset;

  //   if (width > 400) {
  //     if (position >= 220) {
  //       setCheckedperCard2(1);
  //     }

  //     if (position >= 680) {
  //       setCheckededuCard(1);
  //     }
  //   } else {
  //     if (position >= 1070) {
  //       setCheckedperCard2(1);
  //     }

  //     if (position >= 1950) {
  //       setCheckededuCard(1);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   setCheckedperCard(1);
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: "ref",
    offset: ["start end", "end end"],
  });
  return (
    <Container maxWidth="md">
      <div>
        <PersonnalInfoCard />
      </div>
      <div>
        <EducationCard />
      </div>
      <div>
        <TechnicalCard />
      </div>
      <div>
        <ExperienceCard />
      </div>
      <div>
        <AwardsCard />
      </div>
    </Container>
  );
}

export default HomePage;
