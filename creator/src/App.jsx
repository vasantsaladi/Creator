import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Creatorverse
          </Typography>
          <Button component={Link} to="/add-creator" color="inherit">
            Add Creator
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/creators/:id" element={<ViewCreator />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/edit-creator/:id" element={<EditCreator />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
