import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/video_list';
import VideoDetail from './components/VideoDetail/VideoDetail';
import Nav from './components/Nav/Nav';
// css
import styles from './App.module.css';
// Personal Key, it would be hidden for you. Get One!
import API_KEY from './key';

function App() {
  const [videos, setVideos] = useState(null),
    [selectedVideo, setSelectVideo] = useState();

  const handleSearch = term =>
    YTSearch({ key: API_KEY, term }, videos => {
      setVideos(videos);
      setSelectVideo(videos[0]);
    });

  useEffect(() => {
    handleSearch('Guns and roses');
  }, []);

  return (
    <div className={styles.app}>
      <Nav>
        <SearchBar handleSearch={handleSearch} />
      </Nav>
      <VideoDetail videos={selectedVideo}>
        <VideoList
          videos={videos}
          onVideoSelect={selectedVideo => setSelectVideo(selectedVideo)}
        />
      </VideoDetail>
    </div>
  );
}

export default App;
