import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Container, Grid, Typography } from "@mui/material";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {creators.length > 0 ? (
          creators.map((creator) => (
            <Grid item xs={12} sm={6} md={4} key={creator.id}>
              <CreatorCard creator={creator} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No creators found.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ShowCreators;
