import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { MDBJumbotron, MDBTypography, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from 'mdbreact';


const JumbotronPage = (props) => {
  let BackgroundImage = props.HeroImage;
	return (
		<MDBRow>
			<MDBCol>
				<MDBJumbotron style={{ padding: 0 }}>
					<MDBCol
						className="justify-content-center text-white text-center py-5"
						style={{
							backgroundImage: `url(${BackgroundImage}),linear-gradient(130deg,#19343f 0%,#3fbdb1 100%)!important`,
							backgroundSize: `cover`,
							backgroundRepeat: `no-repeat`,
							boxShadow: `0 3px 5px rgba(0, 0, 0, 0.3)`,
							height: `65vh`,
							width: `100vw`,
						}}
					>
						<MDBCol sm="6" className="py-5 offset-md-3" style={{ marginTop: `15vh` }}>
							{/* <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">{props.homepage_hero}</MDBCardTitle> */}
							<h3>We Are</h3>
							<MDBTypography tag="h1" variant="h1">
								Digital Success
							</MDBTypography>
							{/* <h1 className="font-weight-bold">Digital Success</h1> */}
							{/* <p className="mx-5 mb-5 text-black">{props.HeroBlurbBody}</p> */}
							<p className="text-black">
								We work with companies large and small to accomplish their goals. We’d love to hear from you, learn
								about your business, and help you achieve digital success!
							</p>
							{/* <MDBBtn outline color="white" className="mb-5">
									<MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
								</MDBBtn> */}
						</MDBCol>
					</MDBCol>
					{/* <MDBCol
						className="mt-n5"
						style={{
							width: `100%`,
							height: `100px`,
							position: `absolute`,
							left: `0px`,
							background: `linear-gradient(to left bottom, rgba(0,0,0,0.8) 49%, rgba(130, 130, 130,0.8) 50%),    linear-gradient(-50deg, #ffffff 16px, #000 0)`,
						}}
					/> */}
				</MDBJumbotron>
			</MDBCol>
		</MDBRow>
	);
};

export default JumbotronPage;
