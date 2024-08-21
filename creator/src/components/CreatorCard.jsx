import React from "react";
import { Link } from "react-router-dom";

const CreatorCard = ({ creator }) => {
  return (
    <article className="card" style={styles.card}>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="card-img"
          style={styles.image}
        />
      )}
      <div style={styles.body}>
        <h3 style={styles.title}>{creator.name}</h3>
        <p style={styles.description}>{creator.description}</p>
        <div style={styles.buttonContainer}>
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Go to Channel
          </a>
          <Link to={`/creators/${creator.id}`} className="button contrast">
            View
          </Link>
          <Link to={`/edit-creator/${creator.id}`} className="button">
            Edit
          </Link>
        </div>
      </div>
    </article>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  body: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  title: {
    marginBottom: "10px",
    fontSize: "1.4rem",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
};

export default CreatorCard;
