import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBTypography } from 'mdbreact';

const CardExample = () => {
	return (
		<MDBRow className='justify-content-center my-5'>
			<MDBCol sm="6">
				<img
					src="https://www.dgtlsuccess.com/wp-content/uploads/2020/05/laptop-analytics-2.png"
					className="rounded mx-auto d-block img-fluid"
					alt="aligment"
				/>
			</MDBCol>

			<MDBCol className='my-auto justify-content-center' sm="4" style={{display: 'grid'}}>
				<MDBTypography tag="h2" className="text-center font-weight-bold">
					Get Your Free Digital Success Assessment!
				</MDBTypography>
				<MDBTypography tag="h4" className="text-center">
					We’ll do a free consultation with you to learn about your business. Together we can determine how we can help
					your business achieve digital success.
				</MDBTypography>
				<a className="align-center mx-auto" href={"http://calendly.com/jharris3"} target="_blank">
					<MDBBtn
					className="align-center mx-auto"
					style={{maxWidth: '250px'}}
					>
						Schedule A Call
					</MDBBtn>
				</a>
			</MDBCol>
		</MDBRow>
	);
};

export default CardExample;
