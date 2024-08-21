import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

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
    <div style={styles.gridContainer}>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))
      ) : (
        <p>No creators found.</p>
      )}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Two cards per row
    gap: "20px", // Space between cards
  },
};

export default ShowCreators;
