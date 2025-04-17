import {useEffect, useState} from "react";
import Video from "./videoComponent"

import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

function testPage (){
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

    const videoListRef = ref(storage, "videos/Kannada");

    // TODO: to add multiple folders and render them, all you have to do is have multiple
    //  folder arrays, and each should reference a folder easily
    //  Ex:  ref(storage, 'videos/' + 'i'), i being the folder number
    //  it should be named appropriately (the number)

    const [index, setIndex] = useState(0);

    // TODO: use this name array for the header section
    // const names = [
    //     "Last Minute Math",
    //     "Game Night",
    //     "Questions",
    //     "Shortcut Method",
    //     "Video 5",
    //     "Video 6",
    //     "Video 7",
    // ];

    useEffect(() => {
        listAll(videoListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setVideoList((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return(
        <>
            <div className="videos-test">
                <div className="section">
                    {videoList.map((video) => (
                        <Video source={video} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default testPage;