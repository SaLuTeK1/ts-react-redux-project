import {FC} from 'react';
import YouTube, {YouTubeProps} from 'react-youtube';


interface IProps {
    videoKey: string
}


const Trailers: FC<IProps> = ({videoKey}) => {

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '450',
        width: '70%',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <YouTube videoId={videoKey} opts={opts} onReady={onPlayerReady} />
    );
};

export {Trailers};