import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText, linkResolver, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Navigation from "../Components/Navigation"
import HeroJumboTron from "../Components/HeroJumbotron"
import ServicesSection from "../Components/ServicesSection"
import AssesmentSection from"../Components/HomeAssesmentSection.js"
import { MDBContainer } from 'mdbreact';

const BlogHome = (props) => (
	<div>
		<Navigation></Navigation>
		<HeroJumboTron
			// HeroBlurbH1={RichText.render(props.home.data.hero_text.h1, linkResolver)}
			// HeroBlurbH2={RichText.render(props.home.data.hero_text.h2, linkResolver)}
			// HeroBlurbBody={RichText.render(props.home.data.hero_text.body_content, linkResolver)}
			HeroImage={props.home.data.homepage_hero.url}
		></HeroJumboTron>
		<AssesmentSection />
		<MDBContainer
			style={{
				backgroundImage: `url("https://www.dgtlsuccess.com/wp-content/uploads/2019/06/marketing-bg8-copy-dark-1-e1589080396390.png") ,linear-gradient(130deg,#19343f 0%,#3fbdb1 100%)!important`,
				backgroundSize: `cover`,
				backgroundRepeat: `no-repeat`,
				boxShadow: `0 3px 5px rgba(0, 0, 0, 0.3)`,
				height: `75vh`,
				width: `100vw`,
			}}
			className="mx-auto z-depth-5"
		>
			<ServicesSection />
		</MDBContainer>

		<AssesmentSection className='mt-5'/>

		{/* <img src={props.home.data.hompage_hero.url} alt="avatar image" /> */}
		{/* <h1>{RichText.asText(props.home.data.hero_text)}</h1> */}
		{/* <p>{RichText.asText(props.home.data.description)}</p>  */}
	</div>
);

BlogHome.getInitialProps = async (context) => {
	const home = await client.getSingle('homepage');

	return { home };
};

export default BlogHome;
