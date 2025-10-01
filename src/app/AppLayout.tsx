import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const AppLayout = () => (
  <Box>
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "center" }}>
        <a href="/">Star Wars SPA</a>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Outlet />
    </Container>
  </Box>
);

export default AppLayout;
