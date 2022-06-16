import { useState, useEffect } from 'react';
import Image from './Image';
import './Images.css';

const Images = () => {
	const [images, setImages] = useState([]);

	const fetchImages = () => {
		fetch('http://localhost:5000/api/images')
			.then((res) => res.json())
			.then((result) => setImages(result))
			.catch((e) => console.error(e));
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<>
			<h2>Images</h2>
			<section className="images-grid">
				{images.map((image) => (
					<Image
						key={image.id}
						title={image.title}
						description={image.description}
						imageUrl={image.origin}
					/>
				))}
			</section>
		</>
	);
};

export default Images;
