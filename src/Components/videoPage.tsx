import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import VideoPageKannada from "./videoPageKannada";
import VideoPageTamil from "./videoPageTamil";
import VideoPageTelugu from "./videoPageTelugu";

function VideoPage() {
    return (
        <>
            <div className="videos-parent">
                <div className="center">
                    <h1 className="selectToCont">Select a language to continue</h1>
                </div>
                <div className="center">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle m-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            data-bs-theme="dark"
                        >
                            Languages
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="videoPage/Kannada">
                                    Kannada
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="videoPage/Tamil">
                                    Tamil
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="videoPage/Telagu">
                                    Telagu
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="videoPage/Kannada" element={<VideoPageKannada />}></Route>
                <Route path="videoPage/Tamil" element={<VideoPageTamil />}></Route>
                <Route path="videoPage/Telugu" element={<VideoPageTelugu />}></Route>
            </Routes>
        </>
    );
}
export default VideoPage;
