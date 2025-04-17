interface Props{
    source: string
}

const videoComponent = (props: Props) => {
    return(
        <>
            <div className="video">
                <video
                    src={props.source}
                    muted
                    controls
                    className="video_item-test"
                ></video>
                <div className="video-description">
                    <h5>Item Name</h5>
                </div>
            </div>
        </>
    );
}

export default videoComponent;