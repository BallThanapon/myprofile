"use client";

import { Container } from "@mui/material";
import PersonnalInfoCard from "./personalInfoCard";
import EducationCard from "./EducationCard";
import TechnicalCard from "./TechnicalCard";
import ExperienceCard from "./ExperienceCard";
import AwardsCard from "./AwardsCard";
import HeadCard from "./HeadCard";

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default HomePage;
