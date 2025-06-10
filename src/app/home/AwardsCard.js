"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRef, useEffect } from "react";
import {
  motion,
} from "motion/react";

function AwardsCard() {
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
            <Grid size={{ md: 4 }} sx={{ alignContent: "center", pr: 2 }}>
              <Box
                sx={{
                  borderRadius: "20px",
                  maxWidth: "100%",
                  borderColor: "#7b53ff",
                }}
                component="img"
                alt="Technical logo."
                src="/image/Technical.jpg"
              />
            </Grid>
            <Grid size={{ md: 8 }}>
              <Box>
                <Typography variant="h5" align="right">
                  Awards
                </Typography>
                <Divider />
                <AwardsInfo />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </motion.div>
  );
}

export default AwardsCard;

function AwardsInfo() {
  return (
    <>
      <Grid container spacing={1.5} sx={{ mt: 2 }}>
        <Typography variant="body2">
          • Developed and maintained frontend applications using HTML, CSS,
          JavaScript, React.js, Vue.js, and ASP.NET
        </Typography>
        <Typography variant="body2">
          • Developed backend systems and APIs using PHP, Python, C#, and
          Node.js
        </Typography>
        <Typography variant="body2">
          • Developed various IoT systems using C++, Python, and Node-RED
        </Typography>
        <Typography variant="body2">
          • Familiar with various data communication methods, including API
          (REST), MQTT, WebSocket, TCP, and UDP protocols
        </Typography>
        <Typography variant="body2">
          • Database Management: SQL (MySQL, PostgreSQL), MongoDB, LDAP
        </Typography>
        <Typography variant="body2">
          • Machine Learning & Deep Learning: TensorFlow, PyTorch, Scikit-learn,
          data preprocessing, model training & evaluation
        </Typography>
        <Typography variant="body2">
          • Mobile App Development: React Native, Dart (Flutter), cross-platform
          development, UI/UX design, state management (e.g., Redux, Provider)
        </Typography>
      </Grid>
    </>
  );
}
