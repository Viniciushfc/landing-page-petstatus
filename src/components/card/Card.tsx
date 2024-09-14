// src/components/Card.tsx
import React from 'react';
import './Card.css'; // Certifique-se de criar este arquivo para estilizar o card

interface CardProps {
  title: string;
  description: string;
  image?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, actions }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
