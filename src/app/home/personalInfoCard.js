import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import Person2Icon from "@mui/icons-material/Person2";
import CakeIcon from "@mui/icons-material/Cake";
import FaceIcon from "@mui/icons-material/Face";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { motion } from "motion/react";

function PersonnalInfoCard() {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: "-20%" }}
      whileInView={{ opacity: 1, x: "0%" }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Box>
        <Paper elevation={12} sx={{ mb: 4, p: 5 }}>
          <Grid container spacing={1}>
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
                    borderRadius: "100%",
                    maxHeight: "200px",
                    border: 10,
                    borderColor: "#7b53ff",
                  }}
                  component="img"
                  alt="The house from the offer."
                  src="https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc="
                />
              </motion.div>
            </Grid>
            <Grid size={{ md: 8 }}>
              <Box>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, x: "10%" }}
                  whileInView={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h5" align="right">
                    Personal infomation
                  </Typography>
                </motion.div>
                <Divider />
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ duration: 1, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  <PersonalInfo />
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </motion.div>
  );
}

export default PersonnalInfoCard;

function PersonalInfo() {
  return (
    <>
      <Grid container spacing={1.5} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Person2Icon />
            <Typography variant="body1">
              Name : Mr.Thanapon Thanasakonpong
            </Typography>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <CakeIcon />
            <Typography variant="body1">Birth day : 4 November 1997</Typography>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <FaceIcon />
            <Typography variant="body1">Age : 28</Typography>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <CallIcon />
            <Typography variant="body1">Call : +66843568659</Typography>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <EmailIcon />
            <Typography variant="body1">
              Email : Thanapon041140@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <HomeIcon />
            <Typography variant="body1">
              Adress : 99 Moo 3 Nong Ngu Luam, Nakhon Pathom city <br /> Nakhon
              Pathom 73000
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
