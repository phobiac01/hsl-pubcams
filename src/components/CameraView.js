import { useEffect, useState } from "react";

function CameraView(props) {
    const [opacity, setOpacity] = useState(0);
    const [fill, setFill] = useState("red");

    useEffect(() => {
        setTimeout(() => {
            if (props.isLive) {
                setFill("red");
                setOpacity((opacity === 0.65) ? 0 : 0.65);

            } else {
                setFill("dimgrey");
                setOpacity(1);
            }

        }, 1000);
    });

    return (
        <div className="CamView">
            <a href={props.feed}>
                <svg height="20" width={(props.isLive) ? "60" : "115"}>
                    <text x="0" y="17" fill="white" className="livtxt">{(props.isLive) ? "Live" : "Stale Feed"}</text>
                    <circle cx={(props.isLive) ? "50" : "105"} cy="10" r="10" strokeWidth="3" fill={fill} fillOpacity={opacity} />
                </svg>

                <img src={props.feed} />
            </a>
        </div>
    );
}

export default CameraView;