import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams, Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";

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
    return <div>Loading creator details...</div>;
  }

  if (!creator) {
    return <div>Creator not found.</div>;
  }

  return (
    <div className="container">
      <CreatorCard creator={creator} />
      <Link to={`/edit-creator/${creator.id}`} className="button contrast">
        Edit
      </Link>
    </div>
  );
};

export default ViewCreator;
