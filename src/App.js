import './App.css';
import CameraView from './components/CameraView';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="CamBox">
        <CameraView></CameraView>
        <CameraView></CameraView>
      </div>
      <div className="CamBox">
        <CameraView></CameraView>
        <CameraView></CameraView>
      </div>

    </div>
  );
}

export default App;