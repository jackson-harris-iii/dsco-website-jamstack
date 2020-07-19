import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from 'mdbreact';

const JumbotronPage = (props) => {
	return (
			<MDBRow>
				<MDBCol>
					<MDBJumbotron style={{ padding: 0 }}>
						<MDBCol
							className="text-white text-center py-5 px-4"
							style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}
						>
							<MDBCol className="py-5">
								<MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
									{props.HeroBlurb}
								</MDBCardTitle>
								<p className="mx-5 mb-5">
									{props.HeroBlurb}
								</p>
								{/* <MDBBtn outline color="white" className="mb-5">
									<MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
								</MDBBtn> */}
							</MDBCol>
						</MDBCol>
					</MDBJumbotron>
				</MDBCol>
			</MDBRow>
	);
};

JumbotronPage.getInitialProps = async (context) => {
	const hero = await client.getSingle('homepage');

	return { hero };
};

export default JumbotronPage;
