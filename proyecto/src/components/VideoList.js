
import React from 'react';
import './VideoList.css';

const categories = ["Front End", "Back End", "Innovación", "Gestión"];

function VideoList({ videos, onDelete, onEdit }) {
  const handleEdit = (index, updatedVideo) => {
    onEdit(index, updatedVideo); // Llamar a la función onEdit pasando el índice y el video actualizado
  };

  return (
    <div className="video-list">
      {categories.map(category => (
        <div key={category} className={`category-section ${category}`}>
          <h2>{category}</h2>
          <ul className="video-list-items">
            {videos.filter(video => video.category === category).map((video, index) => (
              <li key={index} className={`video-item ${category}`}>
                <h3>{video.title}</h3>
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  <img src={URL.createObjectURL(video.image)} alt={video.title} />
                </a>
                <p>{video.description}</p>
                <div className="button-container">
                  <button className="edit-button" onClick={() => handleEdit(index, video)}>Editar</button>
                  <button className="delete-button" onClick={() => onDelete(index)}>Borrar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
