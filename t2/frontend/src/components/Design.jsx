import React from 'react';
import './Design.css';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 1,
    title: 'Modern Elegance',
    description: 'Sleek layout with bold typography and strong visual hierarchy.',
    image: 'https://via.placeholder.com/300x400?text=Modern+Elegance',
  },
  {
    id: 2,
    title: 'Minimal Classic',
    description: 'Simple, clean, and effective for all corporate and tech roles.',
    image: 'https://via.placeholder.com/300x400?text=Minimal+Classic',
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    description: 'Visually rich and dynamic for creatives and designers.',
    image: 'https://via.placeholder.com/300x400?text=Creative+Portfolio',
  },
  {
    id: 4,
    title: 'Professional Blue',
    description: 'Subtle and structured with a splash of business-friendly color.',
    image: 'https://via.placeholder.com/300x400?text=Professional+Blue',
  },
];

const Design = () => {
  const navigate = useNavigate();

  const handleTemplateClick = (id) => {
    navigate(`/template/${id}`);
  };

  return (
    <div className="design-page">
      <h1 className="page-title">Select a Resume Design</h1>
      <p className="page-subtitle">Choose a template that matches your personality and profession.</p>

      <div className="template-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <img src={template.image} alt={template.title} className="template-image" />
            <h2 className="template-title">{template.title}</h2>
            <p className="template-description">{template.description}</p>
            <button
              className="template-button"
              onClick={() => handleTemplateClick(template.id)}
            >
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Design;
