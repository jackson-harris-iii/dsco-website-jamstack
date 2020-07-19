import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText, linkResolver, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Navigation from "../Components/Navigation"
import HeroJumboTron from "../Components/HeroJumbotron"

const BlogHome = (props) => (
	<div>
		<Navigation></Navigation>
		<HeroJumboTron
			// HeroBlurbH1={RichText.render(props.home.data.hero_text.h1, linkResolver)}
			// HeroBlurbH2={RichText.render(props.home.data.hero_text.h2, linkResolver)}
			// HeroBlurbBody={RichText.render(props.home.data.hero_text.body_content, linkResolver)}
			HeroImage={props.home.data.homepage_hero.url}
		></HeroJumboTron>

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
