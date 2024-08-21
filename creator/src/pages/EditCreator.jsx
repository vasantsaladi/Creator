import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams, useNavigate } from "react-router-dom";

const EditCreator = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error(error);
      } else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL);
      }
    };
    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("creators")
      .update({ name, url, description, imageURL })
      .eq("id", id);
    if (error) {
      console.error(error);
    } else {
      navigate("/");
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);
    if (error) {
      console.error(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container" style={styles.container}>
      <h1>Edit Creator</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          URL:
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
        <div style={styles.buttonGroup}>
          <button type="submit" className="contrast">
            Save
          </button>
          <button type="button" onClick={handleDelete} className="secondary">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

export default EditCreator;
