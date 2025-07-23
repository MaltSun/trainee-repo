import "./App.css";
import Header from "./components/Header/Header";
import VideoRecomendation from "./components/VideoRecomendation/VideoRecomendation";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDescription from "./components/VideoDescription/VideoDescription";
function App() {
  return (
    <div>
      <Header />
      <div className="mainPart">
        <div>
          <VideoPlayer />
          <VideoDescription />
          <hr id="bottomLine" />
        </div>

        <div className="asidePart">
          <div className="asidePartHead">
            <span> Next</span>

            <div>
              <span>autoplay</span>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <VideoRecomendation />
        </div>
      </div>
    </div>
  );
}

export default App;
