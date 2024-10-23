import React from "react";

import "./home.css";
import Banner from "../components/banner/Banner";
import Aboutus from "../components/aboutus/Aboutus";
import Counter from "../components/counter/Counter";
import Sectors from "../components/sectors/Sectors";
import Message from "../components/message/Message";
import Testimonial from "../components/testimonial/Testimonial";
import Team from "../components/team/Team";
import Campuses from "../components/Campuse/Campuses";
// import Gallery from "../components/gallery/Gallery";

function Home() {
	return (
		<div className="page-content mb-0">
			{/* <Header /> */}
			<Banner className="m-0 pb-0" />
			<Aboutus className="mt-0 pt-0" />
			<Counter />
			<Sectors />
			<Message />
			<Testimonial />
			<Campuses />
			<Team />
		</div>
	);
}

export default Home;
