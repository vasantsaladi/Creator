import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const AddCreator = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("creators")
      .insert([{ name, url, description, imageURL }]);
    if (error) {
      console.error(error);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.title}>Add a Creator</h1>
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
        <button type="submit" className="contrast" style={styles.button}>
          Add Creator
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    width: "100%",
  },
};

export default AddCreator;
