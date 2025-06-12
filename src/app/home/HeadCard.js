"use client";

import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

function HeadCard() {
  return (
    <Box sx={{ pt: 15 }}>
      <Grid container textAlign="center">
        <Grid size={{ xs: 12 }}>
          <Grid container justifyContent="center">
            <Grid>
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Typography variant="h2" color="#108577">
                  FullStack
                </Typography>
              </motion.div>
            </Grid>
            <Grid>
              <motion.div
                initial={{ opacity: 0, x: "20%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <Typography variant="h2" color="#108577" sx={{ p: 2 }}>
                  Developer
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={1} justifyContent="center">
            <Grid>
              <motion.div
                initial={{ opacity: 0, x: "-50%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Typography variant="h5" color="#17B8A6">
                  One bug at a time,
                </Typography>
              </motion.div>
            </Grid>
            <Grid>
              <motion.div
                initial={{ opacity: 0, x: "50%" }}
                whileInView={{ opacity: 1, x: "0%" }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Typography variant="h5" color="#17B8A6">
                  one step closer to mastery.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              width: "50%",
              pt: 20,
            }}
            component="img"
            alt="Code thinking image"
            src="/image/headcard.svg"
          ></Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box sx={{ bgcolor: "#17B8A6", py: 10 }}>
            <Container maxWidth="sm">
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <Typography color="white" variant="h5">
                  Hello, I'm Thanapon Thanasakonpong.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Typography color="white" variant="h5">
                  Nice to meet you.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              >
                <Typography color="white" sx={{ mt: 2 }}>
                  A passionate Full Stack Developer with hands-on experience in
                  both software development and IoT systems.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              >
                {" "}
                <Typography color="white" sx={{ mt: 2 }}>
                  I have worked on end-to-end solutions ranging from frontend
                  interfaces to backend APIs, and I’ve also developed IoT
                  applications involving data collection, automation, and smart
                  monitoring.
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              >
                {" "}
                <Typography color="white" sx={{ mt: 2 }}>
                  I am currently seeking new opportunities to grow, collaborate,
                  and contribute to impactful projects where I can apply and
                  expand my skills. I’m excited to take on new challenges and
                  continue evolving as a developer.
                </Typography>
              </motion.div>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeadCard;
