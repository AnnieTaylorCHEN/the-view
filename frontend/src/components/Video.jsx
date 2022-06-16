import { useState, useRef, useEffect } from 'react';
import useElementOnScreen from '../hooks/useElementOnScreen';

const Video = ({ title, description, videoUrl, videoLength }) => {
	const [showVideo, setShowVideo] = useState(false);
	const videoRef = useRef(null);
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	};
	const isVisibile = useElementOnScreen(options, videoRef);
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		if (isVisibile) {
			if (!playing) {
				videoRef.current.play();
				setPlaying(true);
			}
		} else {
			if (playing) {
				videoRef.current.pause();
				setPlaying(false);
			}
		}
	}, [isVisibile, playing]);

	return (
		<div>
			{showVideo && (
				<video
					ref={videoRef}
					width="100%"
					height="auto"
					autoPlay={playing}
					controls
				>
					<source src={videoUrl} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}

			<h3>{title}</h3>
			<p>{description}</p>
			<p>Length: {videoLength} </p>
			<button onClick={() => setShowVideo(true)}>click to load video</button>
		</div>
	);
};

export default Video;
