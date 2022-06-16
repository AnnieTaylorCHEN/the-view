import { useState } from "react";

const Image = ({ title, description, imageUrl }) => {
	const [showImage, setShowImage] = useState(false);

	return (
		<div>
			{showImage && <img src={imageUrl} alt={title} loading="lazy" />}
			<h3>{title}</h3>
			<p>{description}</p>
			<button onClick={()=> setShowImage(true)}>click to load image</button>
		</div>
	);
};

export default Image;
