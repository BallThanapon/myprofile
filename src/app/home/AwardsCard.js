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
import { motion } from "motion/react";

function AwardsCard() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: "-50%" }}
      whileInView={{ opacity: 1, x: "0%" }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 10, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid size={{ md: 4 }} sx={{ alignContent: "center", pr: 2 }}>
              <motion.div
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
                  alt="Technical logo."
                  src="/image/Awards.svg"
                />
              </motion.div>
            </Grid>
            <Grid size={{ md: 8 }}>
              <Box>
                <motion.div
                  initial={{ opacity: 0, y: "10%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h5" align="right">
                    Awards
                  </Typography>
                </motion.div>

                <Divider />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <AwardsInfo />
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>
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
          • Certificate of Completion: AI Development Workshop & Challenge Event
          (Sony Group Corporation)
        </Typography>
        <Typography variant="body2">
          • Gold Medal: Undergraduate Research Presentation (9 Universities
          Network)
          <br />
          Topic: Development and Efficiency Testing of a Vehicle License Plate
          Recognition System Using Image Processing and AI Techniques
        </Typography>
      </Grid>
    </>
  );
}
