
import React, { useState, useEffect } from 'react';
import './NewVideoModal.css';

function NewVideoModal({ isVisible, onClose, onSave, editVideo }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editVideo) {
      setTitle(editVideo.title);
      setCategory(editVideo.category);
      // setImage(editVideo.image); // No se recomienda manejar imágenes directamente en el estado
      setVideoUrl(editVideo.videoUrl);
      setDescription(editVideo.description);
    } else {
      setTitle('');
      setCategory('');
      setImage(null);
      setVideoUrl('');
      setDescription('');
    }
  }, [editVideo]);

  const handleSave = () => {
    onSave({ title, category, image, videoUrl, description });
    onClose();
  };

  return (
    <div className={`modal ${isVisible ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{editVideo ? 'Editar Video' : 'Crear Nuevo Video'}</h2>
        <p>Complete el formulario para {editVideo ? 'editar' : 'crear'} un video.</p>
        <div className="form-group">
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Seleccionar categoría</option>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Innovación">Innovación</option>
            <option value="Gestión">Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="form-group">
          <label>URL del Video:</label>
          <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="button-container">
          <button className="save-button" onClick={handleSave}>{editVideo ? 'Guardar Cambios' : 'Guardar'}</button>
          <button className="cancel-button" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default NewVideoModal;
