import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AppLayout = () => (
  <Box>
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography component="div">Star Wars SPA</Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Outlet />
    </Container>
  </Box>
);

export default AppLayout;
