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
import { motion } from "motion/react";

function TechnicalCard() {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "10%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 10, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid size={{ md: 4 }} sx={{ alignContent: "center", pr: 2 }}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: "-10%" }}
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
                  alt="Technical logo."
                  src="/image/Technical.svg"
                />
              </motion.div>
            </Grid>
            <Grid size={{ md: 8 }}>
              <Box>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: "10%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h5" align="right">
                    Technical Skill
                  </Typography>
                </motion.div>
                <Divider />
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <TechnicalInfo />
                </motion.div>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 4 }} />
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <IconBox />
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
}

export default TechnicalCard;

function TechnicalInfo() {
  return (
    <>
      <Grid container spacing={1.5} sx={{ mt: 2 }}>
        <Typography variant="body2">
          • Developed and maintained frontend applications using HTML, CSS,
          JavaScript, React.js and ASP.NET
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

function IconBox() {
  return (
    <Box>
      <Grid container sx={{ m: 2 }} justifyContent="center" textAlign="center">
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="React logo"
            src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="Asp.NET logo"
            src="https://softwareasli.com/wp-content/uploads/2019/08/ASP.NET_.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://images.seeklogo.com/logo-png/34/1/flutter-logo-png_seeklogo-349577.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "65px" }}
            component="img"
            alt="The house from the offer."
            src="https://www.php.net/images/logos/new-php-logo.svg"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://www.globalcloudteam.com/wp-content/uploads/2023/08/javascript.webp"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ m: 2 }} justifyContent="center" textAlign="center">
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px", alignItems: "center" }}
            component="img"
            alt="The house from the offer."
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://nodered.org/about/resources/media/node-red-icon-2.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="The house from the offer."
            src="https://images.seeklogo.com/logo-png/37/2/pytorch-logo-png_seeklogo-372199.png"
          />
        </Grid>
        <Grid item size={{ xs: 6, md: 2 }}>
          <Box
            sx={{ height: "80px" }}
            component="img"
            alt="Tensorflow logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/2560px-TensorFlow_logo.svg.png"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
