import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
                            {/*<li>*/}
                            {/*    <a className="dropdown-item" href="videoPage/Test">*/}
                            {/*        Test*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li>
                                <a className="dropdown-item" href="/Kannada">
                                    ಕನ್ನಡ
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/Punjabi">
                                    ਪੰਜਾਬੀ
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/Bengali">
                                    বাংলা
                                </a>
                            </li>
                            {/*<li>*/}
                            {/*    <a className="dropdown-item" href="/English">*/}
                            {/*        English*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li>
                                <a className="dropdown-item" href="/Hindi">
                                    हिंदी
                                </a>
                            </li>
                            {/*<li>*/}
                            {/*    <a className="dropdown-item" href="videoPage/Tamil">*/}
                            {/*        Tamil*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a className="dropdown-item" href="videoPage/Telugu">*/}
                            {/*        Telugu*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VideoPage;