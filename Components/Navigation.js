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
				<MDBContainer>
					<MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
						<MDBContainer>
							<MDBNavbarBrand>digital success</MDBNavbarBrand>
							<MDBHamburgerToggler
								color="#d3531a"
								id="hamburger1"
								onClick={() => this.toggleSingleCollapse('collapse1')}
							/>
							<MDBCollapse isOpen={this.state.collapse1} navbar>
								<MDBNavbarNav left>
									<MDBNavItem active>
										<Link href="#!">
                      <a className="nav-link">Home</a></Link>
									</MDBNavItem>
									<MDBNavItem>
										<Link href="#!">
                      <a className="nav-link">Portfolio</a></Link>
									</MDBNavItem>
									<MDBNavItem>
										<Link href="#!"><a className="nav-link">About Us</a></Link>
									</MDBNavItem>
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBContainer>
					</MDBNavbar>
				</MDBContainer>
		);
	}
}

export default NavbarPage;
