import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FcNext, FcPrevious } from "react-icons/fc";
import { MdClose } from "react-icons/md";

const Gallery = () => {
	const images = [
		"../photos/2nd-board.jpg",
		"../photos/front.jpg",
		"../photos/front2.jpg",
		"../photos/dinning-area.jpg",
		"../photos/temple.jpg",
		"../photos/middle-back.jpg",
		"../photos/mid-area.jpg",
		"../photos/front-area.jpg",
		"../photos/mid-cross.jpg",
		"../photos/mid-bight.jpg",
		"../photos/bg-room.jpg",
		"../photos/room1.jpg",
		"../photos/mainhouse.jpg",
	];

	const [data, setData] = useState({ img: "", i: 0 });
	const viewImage = (img, i) => {
		setData({ img, i });
	};

	const imgAction = (action) => {
		let i = data.i;
		if (action === "next-img") {
			setData({
				img: images[i + 1].path,
				i: i + 1,
			});
		}
		if (action === "previous-img") {
			setData({
				img: images[i - 1].path,
				i: i - 1,
			});
		}
		if (!action) {
			setData({ img: "", i: 0 });
		}
	};
	return (
		<>
			{data.img && (
				<div className="top-0 w-full h-screen bg-black fixed flex justify-center items-center overflow-hidden z-[70] text-white select-none">
					<button
						className={`text-3xl md:me-4 hover:opacity-75 ${
							!data.i ? "hidden" : "block"
						}`}
						onClick={() => imgAction("previous-img")}
						disabled={!data.i}
					>
						<FcPrevious />
					</button>
					<img
						src={data.img}
						alt=""
						className="w-auto max-w-[85%] max-h-[90vh]"
					/>
					<button
						className={`text-3xl md:ms-4 hover:opacity-75 ${
							data.i + 1 === images.length ? "hidden" : "block"
						}`}
						onClick={() => imgAction("next-img")}
						disabled={data.i + 1 === images.length}
					>
						<FcNext />
					</button>
					<div className="image-count | absolute z-10 bottom-4 right-3 rounded-full p-1 tracking-wider">
						{data.i + 1 + "/" + images.length}
					</div>
					<button
						className="absolute top-3 right-3 text-3xl"
						onClick={() => imgAction()}
					>
						<MdClose />
					</button>
				</div>
			)}
			<div>
				<div className="p-5">
					<h1 className="font-bold text-center text-2xl">Gallery</h1>
				</div>

				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry gutter="15px">
						{images.map((image, i) => (
							<img
								key={i}
								src={image}
								className="rounded-md px-3 pb-2"
								style={{ width: "100%", display: "block", cursor: "pointer" }}
								alt=""
								onClick={() => viewImage(image, i)}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</>
	);
};
export default Gallery;
