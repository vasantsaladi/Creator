import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import "@picocss/pico"; // Ensure Pico.css is included

function App() {
  return (
    <Router>
      <header className="container-fluid">
        <div className="container grid">
          <h1 style={{ marginRight: "center" }}>Creatorverse</h1>

          <Link to="/add-creator" style={{ marginLeft: "auto" }}>
            <button
              className="secondary"
              style={{
                backgroundColor: "#f8f9fa", // Light background
                color: "#333", // Darker text color
                border: "1px solid #ddd", // Light border
              }}
            >
              Add Creator
            </button>
          </Link>
        </div>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/creators/:id" element={<ViewCreator />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/edit-creator/:id" element={<EditCreator />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
