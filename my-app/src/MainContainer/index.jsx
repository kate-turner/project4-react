import React, { Component } from 'react';
import Posts from './Posts';

import CreatePost from './CreatePost';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';


class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			posts: [],
			editPostId: null,
			postToEdit: {
				date: '',
				title: '',
				body: '',
				img_url: ''
			}
		}
	}



	render(){
		return (
	
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">USER STORIES</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">SOMTHING HERE</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    <div> 
		<Posts posts={this.state.posts} />
    <CreatePost addPost={this.state.posts} />
	  
	  </div>
    );
  }
}


export default MainContainer;
