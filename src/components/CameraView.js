
function CameraView(props) {
    return (
        <div className="CamView">
            <a href={props.feed}>
                <img src={props.feed} />
            </a>
        </div>
    );
}

export default CameraView;