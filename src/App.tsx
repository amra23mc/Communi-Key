import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/homePage";
import VideoPage from "./Components/videoPage";
import VideoPageKannada from "./Components/videoPageKannada";
import VideoPageTamil from "./Components/videoPageTamil";
import VideoPageTelugu from "./Components/videoPageTelugu";
import VideoPageHindi from "./Components/videoPageHindi.tsx";
import VideoPageEnglish from "./Components/videoPageEnglish.tsx";
import TestPage from "./Components/testPage.tsx";
import VideoPagePunjabi from "./Components/videoPagePunjabi.tsx";
import VideoPageBengali from "./Components/videoPageBengali.tsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlay } from '@fortawesome/free-solid-svg-icons'


function App() {
    return (
        <>
            <div>
                <nav className="navbar fixed-bottom border-primary navbar-dark  align-content-center justify-content-center ">
                    <div>
                        <a className="navbar-brand mx-5" href="/">
                            <FontAwesomeIcon className={"fa-2x"} style={{color: "#FF6161"}} icon={faHouse}/>
                        </a>
                    </div>

                    <div>
                        <a className="navbar-brand mx-5" href="/videoPage">
                            <FontAwesomeIcon className={"fa-2x"} style={{color: "#FF6161"}} icon={faCirclePlay}/>
                        </a>
                    </div>

                </nav>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage></HomePage>} />
                        <Route path = "/videoPage" element={<VideoPage />} />
                        <Route
                            path="/Kannada"
                            element={<VideoPageKannada />}
                        ></Route>
                        <Route
                            path="/English"
                            element={<VideoPageEnglish />}
                        ></Route>
                        <Route
                            path="/Hindi"
                            element={<VideoPageHindi />}
                        ></Route>
                        <Route
                            path="/Punjabi"
                            element={<VideoPagePunjabi />}
                        ></Route>
                        <Route
                            path="/Bengali"
                            element={<VideoPageBengali />}
                        ></Route>
                        <Route
                            path="/Test"
                            element={<TestPage />}
                        ></Route>
                        <Route path="videoPage/Tamil" element={<VideoPageTamil />}></Route>
                        <Route
                            path="videoPage/Telugu"
                            element={<VideoPageTelugu />}
                        ></Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
