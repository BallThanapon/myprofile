"use client";

import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import { motion } from "motion/react";
import { useLang } from "../component/LanguageContext";


function HeadCard() {
  const { t} = useLang({});

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
                  {/* Hello, I'm Thanapon Thanasakonpong. */}
                  {t.hello}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <Typography color="white" variant="h5">
                  {t.Nice}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
              >
                <Typography color="white" sx={{ mt: 2 }}>
                  {t.head1}
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
                  {t.head2}
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
                  {t.head3}
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
