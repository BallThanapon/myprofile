"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { motion } from "motion/react";
import { useLang } from "../component/LanguageContext";

function EducationCard() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: "-20%" }}
      whileInView={{ opacity: 1, x: "0%" }}
      transition={{ duration: 1, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid size={{ md: 8 }}>
              <Box>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, x: "10%" }}
                  whileInView={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h5">Education</Typography>
                </motion.div>
                <Divider />
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <EducationInfo />
                </motion.div>
              </Box>
            </Grid>
            <Grid size={{ md: 4 }} sx={{ alignContent: "center" }}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    borderRadius: "20px",
                    maxWidth: "100%",
                    borderColor: "#7b53ff",
                  }}
                  component="img"
                  alt="The house from the offer."
                  src="/image/Education.svg"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

export default EducationCard;

function EducationInfo() {
  const { t } = useLang({});
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {t.education.map((data, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.disabled">
              {data.period}
            </Typography>
            <Typography variant="body2" sx={{ pl: 1 }}>
              {data.degree}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
