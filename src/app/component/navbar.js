"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem key={0} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link href="/home">Home</Link>
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link href="/about">About</Link>
          </ListItemButton>
        </ListItem>

        <ListItem key={2} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link href="/home">Home</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ py: 2, alignItems: "center" }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          borderRadius: "50px",
          maxWidth: "764px",
          height:"60px"
        }}
        
        style={{background: 'linear-gradient(to right bottom, #7b53ff, #e5daff)'}}
      >
        <CssBaseline />
        <Box>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
                color: "#fff",
              }}
            >
              THANAPON.TH
            </Typography>
            <Box width={270} sx={{display: { xs: "none", sm: "block" }}}/>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button key="home" sx={{ color: "#fff" }}>
                <Link href="/home">Home</Link>
              </Button>
              <Button key="about" sx={{ color: "#fff" }}>
                <Link href="/about">About</Link>
              </Button>
              <Button key="test" sx={{ color: "#fff" }}>
                <Link href="/home">Home</Link>
              </Button>
            </Box>
          </Toolbar>
        </Box>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Grid>
  );
}

export default Navbar;
