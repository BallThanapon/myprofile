"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { motion } from "motion/react";
import { useLang } from "../component/LanguageContext";

function ExperienceCard() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: "-50%" }}
      whileInView={{ opacity: 1, x: "0%" }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid size={{ md: 8 }}>
              <Box>
                <motion.div
                  initial={{ opacity: 0, x: "10%" }}
                  whileInView={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h5">Work Experience</Typography>
                </motion.div>
                <Divider />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceInfo />
                </motion.div>
              </Box>
            </Grid>
            <Grid size={{ md: 4 }} sx={{ alignContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    borderRadius: "20px",
                    maxWidth: "100%",
                    borderColor: "#7b53ff",
                  }}
                  component="img"
                  alt="Experience image"
                  src="/image/Expericnce.svg"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

export default ExperienceCard;

function ExperienceInfo() {
  const {t} = useLang({});
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {t.work_experience.map((data, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">
              {data.organization}
            </Typography>
            <Typography variant="body1">
              {data.position}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              {data.period}
            </Typography>
            {data.respons.map((respon,ii) => (
              <Typography variant="body2" sx={{ pl: 1 }} key={ii}>
                • {respon}
              </Typography>
            ))}
          </TimelineContent>
        </TimelineItem>
      ))}


      
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" >
            {t.work_experience[0].organization}
          </Typography>
          <Typography variant="body1">
            Position: {t.work_experience[0].position}
          </Typography>
          <Typography variant="body2" color="text.disabled">
            {t.work_experience[0].period}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[0]}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[1]}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[2]}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[3]}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[4]}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[5]}
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • {t.work_experience[0].respons[6]}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Deaware System Co., Ltd.</Typography>
          <Typography variant="body1">Position: Programmer</Typography>
          <Typography variant="body2" color="text.disabled">
            2020 – 2022
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Developed Personal Protective Equipment Detection systems using
            Deep Learning and Computer Vision.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Daveloped facial recognition and temperature scanning systems
            using C++ and Python.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Daveloped a water level detection system for Provincial Waterworks
            Authority using Deep Learning and CCTV cameras.
          </Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
