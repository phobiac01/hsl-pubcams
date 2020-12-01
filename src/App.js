import './App.css';
import CameraView from './components/CameraView';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';


const feedRoot = [
  "https://live.heatsynclabs.org/snapshot.php?camera=1",
  "https://live.heatsynclabs.org/snapshot.php?camera=2",
  "https://live.heatsynclabs.org/snapshot.php?camera=3",
  "https://live.heatsynclabs.org/snapshot.php?camera=4",
];

function refreshFeeds() {
  console.log("Refreshed Feeds");

  return feedRoot.map((feed) => {
    return feed + "+" + Math.floor(Math.random() * Math.floor(99999));
  });
}

function App() {
  const [feeds, setFeeds] = useState(feedRoot);
  const [isLive, setIsLive] = useState(true);


  useEffect(() => {
    setInterval(() => {
      setFeeds(refreshFeeds());
    }, 7000);
  }, []);


  return (
    <div className="App">
      <Header></Header>
      <button onClick={() => {setIsLive(!isLive)}}>Toggle Live</button>

      <div className="CamBox">
        <CameraView isLive={isLive} feed={feeds[0]}></CameraView>
        <CameraView isLive={isLive} feed={feeds[1]}></CameraView>
      </div>
      <div className="CamBox">
        {/* <CameraView isLive={isLive} feed={feeds[2]}></CameraView> */}
        <CameraView isLive={isLive} feed={feeds[3]}></CameraView>
      </div>

      <div style={{ margin: 20 + "px" }} />

      <div className="PostText">
        <h2>HeatSync Labs Live Webcams</h2>
        <p>See if there are people in the lab!</p>
        <p>The camera views refresh at least every 10 seconds, though you may not be able to tell if nothing's moving.</p>
        <p>If the cameras are broken, please tweet @meznak or email nate at heatsynclabs dot org.</p>
        <br />
        <p>Nobody here? Check the HeatSyncStatus feed. See when the next event is scheduled at the HeatSync Website.</p>
      </div>
    </div>
  );
}


export default App;