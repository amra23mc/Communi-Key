import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoPage from "./Components/videoPage";
import VideoPageKannada from "./Components/videoPageKannada";
import VideoPageTamil from "./Components/videoPageTamil";
import VideoPageTelugu from "./Components/videoPageTelugu";


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
                        <Route path="/Tamil" element={<VideoPageTamil />}></Route>
                        <Route
                            path="/Telugu"
                            element={<VideoPageTelugu />}
                        ></Route>
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
