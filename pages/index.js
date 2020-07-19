import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Navigation from "../Components/Navigation"
import HeroJumboTron from "../Components/HeroJumbotron"

const BlogHome = (props) => (
	<div>
		<Navigation></Navigation>
		<HeroJumboTron HeroBlurb={RichText.asText(props.home.data.hero_text)}></HeroJumboTron>

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
