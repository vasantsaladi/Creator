import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams, Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";
import { Container, Button, CircularProgress, Typography } from "@mui/material";

const ViewCreator = () => {
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("creators")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Supabase error:", error);
          setLoading(false);
        } else {
          setCreator(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!creator) {
    return <Typography variant="body1">Creator not found.</Typography>;
  }

  return (
    <Container maxWidth="sm">
      <CreatorCard creator={creator} />
      <Button
        component={Link}
        to={`/edit-creator/${creator.id}`}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
      >
        Edit
      </Button>
    </Container>
  );
};

export default ViewCreator;
