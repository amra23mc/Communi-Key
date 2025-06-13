import { useEffect, useState } from "react";

import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

function VideoPageBengali() {
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

    const videoListRef = ref(storage, "videos/Bengali");

    // TODO: to add multiple folders and render them, all you have to do is have multiple
    //  folder arrays, and each should reference a folder easily
    //  Ex:  ref(storage, 'videos/' + 'i'), i being the folder number
    //  it should be named appropriately (the number)

    const [index, setIndex] = useState(0);

    const names = [
        "বর্ণমালা",
        "রঙ",
        "মাস"
    ];

    useEffect(() => {
        listAll(videoListRef).then(async (response) => {
            // Sort files by name
            const sortedItems = response.items.sort((a, b) => a.name.localeCompare(b.name));

            // Fetch URLs in sorted order
            const urls = await Promise.all(
                sortedItems.map((item) => getDownloadURL(item))
            );

            setVideoList(urls);
        });
    }, []);

    // ok ok so basically i want it to change when index changes and stuff
    // rememebr to change index back when its done

    // test commment

    return (
        <>

            <div className="videoPage">
                <nav className="navbar-videos m-2">
                    <div className="">
                        <a href="/videoPage">
                            <button className="btn btn-warning">Back</button>
                        </a>
                    </div>
                </nav>

                <div className="videos-parent">
                    <div className="center">
                        <div className="videos">
                            <div className="components-list">
                                {videoList.map((video) => (
                                    <>
                                        <button
                                            onClick={() => setIndex(videoList.indexOf(video))}
                                            className="video-component"
                                        >
                                            {" "}
                                            {names[videoList.indexOf(video)]}
                                        </button>
                                        {/* <video autoPlay className="video-item">
                    <source src={video} />
                  </video> */}

                                    </>
                                ))}
                            </div>

                            <video
                                src={videoList[index]}
                                autoPlay
                                controls
                                className="video-item"
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VideoPageBengali;
