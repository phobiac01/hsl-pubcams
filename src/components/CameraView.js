import { useEffect, useState } from "react";

function CameraView(props) {
    const [opacity, setOpacity] = useState(0);
    const [fill, setFill] = useState("red");

    useEffect(() => {
        setTimeout(() => {
            if(props.isLive) {
                setFill("red");
                setOpacity((opacity === 0.5) ? 0 : 0.5);

            } else {
                setFill("darkgrey");
            }
            
        }, 1000);
    });

    return (
        <div className="CamView">
            <svg height="20" width="20">
                <circle cx="10" cy="10" r="10" strokeWidth="3" fill={fill} fillOpacity={opacity} />
            </svg>
            <a href={props.feed}>
                <img src={props.feed} />
            </a>
        </div>
    );
}

export default CameraView;