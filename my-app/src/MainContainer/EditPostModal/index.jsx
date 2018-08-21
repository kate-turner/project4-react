import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  

  render() {
    console.log(this.props)
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> Edit Post </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Post Modal</ModalHeader>
          <ModalBody>
             <form onSubmit={ async (e) =>
              {   e.preventDefault()
                  this.toggle();
                  await this.props.closeAndEdit(this.props.postToEdit.id)
              }} >
             	<label>
             		Edit Date: 
             		<input type="text"
             				name="date"
             				onChange={this.props.handleFormChange}
             				placeholder={this.props.postToEdit.date} />
             	</label>
             	<label>
             		Edit Title:
             		<input type="text"
             			   name="title"
             			   onChange={this.props.handleFormChange}
             			   placeholder={this.props.postToEdit.title} />
             	</label>
             	<label>
             		Edit Body:
             		<input type="text"
             			   name="body"
             			   onChange={this.props.handleFormChange}
             			   placeholder={this.props.postToEdit.body} />
             	</label>
              <label>
                Edit Image:
                <input type="text"
                      name="img_url"
                      onChange={this.props.handleFormChange}
                      placeholder={this.props.postToEdit.img_url} />
              </label>
            <label>
              <input className="submit-button" type='Submit' />
              </label>
            
            </form>

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditPostModal;