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
      <Box
        sx={{
          py: 10,
          bgcolor: "#f5f5f5"
        }}
      >
          <Container maxWidth={"md"}>
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
                      borderRadius: "10%",
                      maxWidth: "95%",
                      border: 10,
                      borderColor: "#f5f5f5",
                    }}
                    component="img"
                    alt="Profile image"
                    src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/189718638_4076684399079559_4873442875736120024_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Crjxwjh4iqMQ7kNvwGtijSl&_nc_oc=AdnybLoLtZwjneY46N1BYiJbvaALHx6U7zW2dCvSe-BLF1zzstlKZWB9BW1XZgDl4K4&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=HK92Xl-7dUt9KAdjC5-g7A&oh=00_AfP7K3AUe3V_TwzsytGALl9xNFK1Neuzv7pNtzYKrYB25Q&oe=686F9BF6"
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                  >
                    <PersonalInfo />
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Container>
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
