import React from "react";
import VideoListItem from "../components/VideoListItem";

const VideoList = () => {
	const movies = [
		"Chevalier",
		"Harry Potter",
		"Le roi Lion",
		"La ligne verte",
		"Moulin Rouge",
	];

	return (
		<div>
			<ul>
                {
                movies.map((movie) => {
					return <VideoListItem key={movie} movie={movie} />;
				})
                }
			</ul>
		</div>
	);
};

export default VideoList;
