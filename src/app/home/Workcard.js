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
import { motion, scale } from "motion/react";
import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function WorkCard() {
  const ref = useRef(null);

  return (
    <>
      <Box sx={{ height: "20px", bgcolor: "#17B8A6" }} />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Box sx={{ py: 10, bgcolor: "#f5f5f5" }}>
          <Container maxWidth="lg">
            <Box>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Typography variant="h5">My Work</Typography>
              </motion.div>
              <Divider />
              <Box sx={{ mt: 4 }}>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <WorkInfo />
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </>
  );
}

export default WorkCard;

function WorkInfo() {
  return (
    <div>
      <CCTVCard />
    </div>
  );
}

function CCTVCard() {
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12 }} justifyItems="center">
          <motion.div
            initial={{ opacity: 0, x: "-40%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <Typography sx={{ typography: { xs: "h6", sm: "h5", md: "h3" } }}>
              Camera status monitoring system
            </Typography>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="sm">
            <motion.div
              initial={{ opacity: 0, x: "20%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true }}
            >
              <Typography textAlign="center">
                The system was developed to enhance convenience in monitoring,
                inspecting, and reporting the operational status of CCTV cameras
                within Nakhon Pathom Rajabhat University.
              </Typography>
            </motion.div>
          </Container>
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px 0px 20px 0px",
                mt: 10,
              }}
              component="img"
              alt="Code thinking image"
              src="/image/work/cctv/cctvDashboard.jpg"
            ></Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="sm">
            <Typography textAlign="center">
              The system includes a dashboard that displays an overview of the
              total number of active and inactive cameras, a daily summary
              chart, and a building-wise chart showing the number of active and
              inactive cameras.
            </Typography>
          </Container>
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px 0px 20px 0px",
                mt: 10,
              }}
              component="img"
              alt="Code thinking image"
              src="/image/work/cctv/status.jpg"
            ></Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="sm">
            <Typography textAlign="center">
              The system displays data separated by building, showing each
              camera’s IP address, name, location, and current status. It also
              allows real-time live view from each camera.
            </Typography>
          </Container>
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px 0px 20px 0px",
                mt: 10,
              }}
              component="img"
              alt="Code thinking image"
              src="/image/work/cctv/nvr.jpg"
            ></Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="sm">
            <Typography textAlign="center">
              The system displays the status information of each Network Video
              Recorder (NVR), including its name, CPU usage, and storage usage.
            </Typography>
          </Container>
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px 0px 20px 0px",
                mt: 10,
              }}
              component="img"
              alt="Code thinking image"
              src="/image/work/cctv/nvrdetail.jpg"
            ></Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="sm">
            <Typography textAlign="center">
              The system provides detailed information for each NVR, including
              the number of cameras recorded on that NVR, the number of active
              and inactive cameras, storage information, and historical data on
              CPU and RAM usage.
            </Typography>
          </Container>
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px 0px 20px 0px",
                mt: 10,
              }}
              component="img"
              alt="Code thinking image"
              src="/image/work/cctv/map.png"
            ></Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Container maxWidth="sm">
            <Typography textAlign="center">
              The system displays the locations of CCTV cameras on a map.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
