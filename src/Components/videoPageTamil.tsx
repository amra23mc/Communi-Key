import { useEffect, useState } from "react";

import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

function VideoPageTamil() {
  const firebaseConfig = {
    apiKey: "AIzaSyCbJ6-Dosj1a2gC627XO9E8nBjLdkVwKXE",
    authDomain: "doctrina-6fb4a.firebaseapp.com",
    projectId: "doctrina-6fb4a",
    storageBucket: "doctrina-6fb4a.appspot.com",
    messagingSenderId: "1012262510166",
    appId: "1:1012262510166:web:fa7482ff8577c8d79ca5f7",
    measurementId: "G-6K9YMDM7KL",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const [videoList, setVideoList] = useState<string[]>([]);

  const videoListRef = ref(storage, "videos/Tamil");

  const [index, setIndex] = useState(0);

  const names = [
    "Last Minute Math",
    "Game Night",
    "Questions",
    "Shortcut Method",
  ];

  useEffect(() => {
    listAll(videoListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setVideoList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // ok ok so basically i want it to change when index changes and stuff
  // rememebr to change index back when its done

  return (
    <>
      <nav className="navbar-videos m-2">
        <div className="center">
          <a href="/videoPage">
            <button className="btn btn-warning">Back</button>
          </a>
        </div>
      </nav>

      <div className="videos-parent">
        <div className="center">
          <div className="video-page">
            <ul className="components-list">
              {videoList.map((video) => (
                <>
                  {/* <video autoPlay className="video-item">
                  <source src={video} />
                </video> */}

                  <button
                    onClick={() => setIndex(videoList.indexOf(video))}
                    className="video-component"
                  >
                    {" "}
                    {names[videoList.indexOf(video)]}
                  </button>
                </>
              ))}
            </ul>

            <video
              src={videoList[index]}
              autoPlay
              muted
              controls
              className="video-item"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
export default VideoPageTamil;
