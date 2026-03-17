"use client";

import PersonnalInfoCard from "./personalInfoCard";
import EducationCard from "./EducationCard";
import TechnicalCard from "./TechnicalCard";
import ExperienceCard from "./ExperienceCard";
import AwardsCard from "./AwardsCard";
import HeadCard from "./HeadCard";
import WorkCard from "./Workcard";
import { useLang } from "../component/LanguageContext";
import Fab from "@mui/material/Fab";
import { Typography } from "@mui/material";
import { useEffect } from "react";
function HomePage() {
  const { t, toggleLang } = useLang({}) || {};

  useEffect(() => {
    console.log(t);
    
  }, [])
  
  return (
    <>
      <div>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={toggleLang}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            backgroundImage: `url(${t.logo_flag})`,
            backgroundSize: "cover",
          }}
        >
          <Typography sx={{ fontSize: 12 }}>{t.switchBtn}</Typography>
        </Fab>
      </div>
      <div>
        <HeadCard />
      </div>
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
      <div>
        <WorkCard />
      </div>
    </>
  );
}

export default HomePage;
