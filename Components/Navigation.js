import React, { Component } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
	MDBContainer,
	MDBHamburgerToggler,
} from 'mdbreact';
import Link from 'next/link';


class NavbarPage extends Component {
	state = {
		collapse1: false,
		collapseID: '',
	};

	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : '' }));
	};

	toggleSingleCollapse = (collapseId) => {
		this.setState({
			...this.state,
			[collapseId]: !this.state[collapseId],
		});
	};

	render() {
		return (
			<MDBNavbar
				color="cyan darken-4"
				style={{
          height: `60px`,
          zIndex: `100`,
				}}
				light
			>
				<MDBContainer className="cyan darken-4">
					<MDBNavbarBrand className="white-text">digital success</MDBNavbarBrand>
					<MDBHamburgerToggler color="white" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
					<MDBCollapse isOpen={this.state.collapse1} navbar>
						<MDBNavbarNav left>
							<MDBNavItem >
								<Link href="#!">
									<a className="nav-link" style={{ color:'white' , fontSize: '1em'}}>Home</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="#!">
									<a className="nav-link" style={{ color:'white', fontSize: '1em'}}>Portfolio</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="#!">
									<a className="nav-link" style={{ color:'white', fontSize: '1em'}}>About Us</a>
								</Link>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;
