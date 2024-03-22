import {FC} from 'react';
import {youtube} from "../../constants";

interface IProps {
    videoKey:string
}

const Trailers: FC<IProps> = ({videoKey}) => {

    const src = `${youtube}${videoKey}`;

    return (
        <iframe
            width="70%"
            height="450"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
        ></iframe>
    );
};

export {Trailers};