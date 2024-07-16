import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import NewVideoModal from './components/NewVideoModal';
import Footer from './components/Footer';
import VideoList from './components/VideoList';
import './App.css';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [videos, setVideos] = useState([]);
  const [editVideo, setEditVideo] = useState(null);

  const handleNewVideoClick = () => {
    setEditVideo(null);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSaveVideo = (newVideo) => {
    if (editVideo !== null) {
      const updatedVideos = videos.map((video, index) =>
        index === editVideo.index ? newVideo : video
      );
      setVideos(updatedVideos);
    } else {
      setVideos([...videos, newVideo]);
    }
  };

  const handleDeleteVideo = (index) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const handleEditVideo = (index) => {
    const videoToEdit = { ...videos[index], index };
    setEditVideo(videoToEdit);
    setModalVisible(true);
  };

  return (
    <div className="App">
      <NavBar onNewVideoClick={handleNewVideoClick} />
      <Header />
      <NewVideoModal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        onSave={handleSaveVideo}
        editVideo={editVideo}
      />
      <VideoList videos={videos} onDelete={handleDeleteVideo} onEdit={handleEditVideo} />
      <Footer />
    </div>
  );
}

export default App;
