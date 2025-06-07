import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoPage from "./Components/videoPage";
import VideoPageKannada from "./Components/videoPageKannada";
import VideoPageTamil from "./Components/videoPageTamil";
import VideoPageTelugu from "./Components/videoPageTelugu";
import VideoPageHindi from "./Components/videoPageHindi.tsx";
import VideoPageEnglish from "./Components/videoPageEnglish.tsx";
import TestPage from "./Components/testPage.tsx";
import Pronunciation from "./Components/pronunciation.tsx";
import VideoPagePunjabi from "./Components/videoPagePunjabi.tsx";
import VideoPageBengali from "./Components/videoPageBengali.tsx";


function App() {
    return (
        <>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<VideoPage></VideoPage>} />
                        <Route
                            path="/Kannada"
                            element={<VideoPageKannada />}
                        ></Route>
                        <Route
                            path="/Pronunciation"
                            element={<Pronunciation />}
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
