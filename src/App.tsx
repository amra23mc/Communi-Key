import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoPage from "./Components/videoPage";
import VideoPageKannada from "./Components/videoPageKannada";
import VideoPageTamil from "./Components/videoPageTamil";
import VideoPageTelugu from "./Components/videoPageTelugu";
import TestPage from "./Components/testPage.tsx";


function App() {
    return (
        <>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<VideoPage></VideoPage>} />
                        <Route
                            path="videoPage/Kannada"
                            element={<VideoPageKannada />}
                        ></Route>
                        <Route
                            path="videoPage/Test"
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
