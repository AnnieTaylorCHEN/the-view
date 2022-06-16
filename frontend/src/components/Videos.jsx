import { useState, useEffect } from 'react';
import Video from './Video';
import './Videos.css';

const Videos = () => {
	const [videos, setVideos] = useState([]);

	const fetchVideos = () => {
		fetch('http://localhost:5000/api/videos')
			.then((res) => res.json())
			.then((result) => setVideos(result))
			.catch((e) => console.error(e));
	};

	useEffect(() => {
		fetchVideos();
	}, []);


	return (
		<>
			
			<h2>Videos</h2>
			<section className="videos-grid">
				{videos.map((video) => (
					<Video
						key={video.id}
						title={video.title}
						description={video.description}
						videoUrl={video.origin}
						videoLength={video.length}
					/>
				))}
			</section>
		</>
	);
};

export default Videos;
