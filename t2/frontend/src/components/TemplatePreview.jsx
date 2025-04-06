import React from 'react';
import { useParams } from 'react-router-dom';
import './TemplatePreview.css';

const TemplatePreview = () => {
  const { id } = useParams();

  return (
    <div className="preview-page">
      <h1 className="preview-heading">Preview: Template {id}</h1>

      <div className="preview-resume-box">
        {id === '1' && (
          <a
            href="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template5.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="preview-btn">Show Design</button>
          </a>
        )}
        {id === '2' && (
          <a
            href="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template2.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="preview-btn">Show Design</button>
          </a>
        )}
        {id === '3' && (
          <a
            href="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template3.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="preview-btn">Show Design</button>
          </a>
        )}
        {id === '4' && (
          <a
            href="https://cultivatedculture.com/wp-content/themes/x5-child/assets/images/templates/template4.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="preview-btn">Show Design</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default TemplatePreview;
