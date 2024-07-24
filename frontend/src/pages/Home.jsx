import React from "react";

import "./home.css";
import Banner from "../components/banner/Banner";
import Aboutus from "../components/aboutus/Aboutus";
import Counter from "../components/counter/Counter";
import Sectors from "../components/sectors/Sectors";
import Message from "../components/message/Message";
import Testimonial from "../components/testimonial/Testimonial";
import Team from "../components/team/Team";
import Gallery from "../components/gallery/Gallery";

function Home() {
	return (
		<div className="page-wrapper">
			{/* <Header /> */}
			<Banner />
			<div className="page-content metetam">
				{/* <Description className="" /> */}
				<Aboutus />
				<Counter />
				<Sectors />
				<Message />
				<Testimonial />
				<Team />
				<Gallery />
			</div>
		</div>
	);
}

export default Home;
