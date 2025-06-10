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
import Image from "next/image";
import { useScroll, motion, useTransform, useInView } from "motion/react";

function ExperienceCard() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0,x:"-50%" }}
      whileInView={{ opacity: 1, x:"0%" }}
      transition={{"duration":1, "delay": 0.5}}
      viewport={{ once: true }}
    >
      <Box>
        <Paper elevation={12} sx={{ mb: 4, mx: 0, p: 5 }}>
          <Grid container spacing={1}>
            <Grid size={{ md: 8 }}>
              <Box>
                <Typography variant="h5">Work Experience</Typography>
                <Divider />
                <ExperienceInfo />
              </Box>
            </Grid>
            <Grid size={{ md: 4 }} sx={{ alignContent: "center" }}>
              <Box
                sx={{
                  borderRadius: "20px",
                  maxWidth: "100%",
                  borderColor: "#7b53ff",
                }}
                component="img"
                alt="Experience image"
                src="/image/Experaine.jpg"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </motion.div>
  );
}

export default ExperienceCard;

function ExperienceInfo() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Nakhon pathom rajabhat university
          </Typography>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid>
              <Typography variant="body1" component="span">
                Position: Computer Technical Officer (Computer Center)
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body2" color="text.disabled">
                2022 – 2025
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Developed camera status monitoring system using React.js and
            Python.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Designed APIs for better data access and integration.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Created vehicle license plate recognition system using .NET and
            camera SDKs.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Built meeting document management systems using HTML, CSS,
            JavaScript, PHP.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Developed convocation registration and queue card systems.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Managed CCTV systems and Access Control devices throughout
            university buildings.
          </Typography>
          <Typography variant="body2" sx={{ pl: 1 }}>
            • Maintained IoT systems, including weather monitoring and
            electricity usage.
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
      </TimelineItem>
    </Timeline>
  );
}
