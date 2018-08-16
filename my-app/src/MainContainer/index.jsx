import React, { Component } from 'react';
import Posts from './Posts';
<<<<<<< HEAD
<<<<<<< HEAD
import CreatePost from './CreatePost';
=======
=======

import CreatePost from './CreatePost';

>>>>>>> 9f7b3e019603c675d78d265da1c9241db4853341
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
<<<<<<< HEAD
>>>>>>> 02b5758de9d99841fde38ac98faafd5074280442
=======

>>>>>>> 9f7b3e019603c675d78d265da1c9241db4853341

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
<<<<<<< HEAD
			<div>
<<<<<<< HEAD
				<Posts posts={this.state.posts} />
				<CreatePost addPost={this.state.posts} />
			</div>
		)
	}
=======
=======
	
>>>>>>> 9f7b3e019603c675d78d265da1c9241db4853341
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
<<<<<<< HEAD
>>>>>>> 02b5758de9d99841fde38ac98faafd5074280442
=======
>>>>>>> 9f7b3e019603c675d78d265da1c9241db4853341
}


export default MainContainer;
