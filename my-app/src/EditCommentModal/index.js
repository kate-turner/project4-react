import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditCommentModal extends React.Component {
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

  // onClickToggleModal(){
  //   this.toggle;
  //   this.props.showCommentModal(this.props.commentID)
  // }
  // onClick={this.onClickToggleModal}>

  render() {
    console.log(JSON.stringify(this.props.commentToEdit) + "LOOK AT THESE FUCKING PROPS YO")

    return (
      <div>
        <Button color="danger" onClick={this.toggle}> EDIT COMMENT </Button>

{/*                <Button 
              color="danger"
              onClick={ async (e) => 
                      {
                        e.preventDefault()
                        // console.log(this.props)
                            await this.toggle
                            await this.props.showCommentModal(this.props.commentID)
                      }} >EDIT COMMENT </Button>*/}

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Comment Modal</ModalHeader>
          <ModalBody>

              <form onSubmit={ async (e) => 
                {
                  e.preventDefault()
                  console.log(this.props)
                        this.toggle();
                       // await   this.props.showCommentModal(this.props.commentID)
                       await   this.props.closeAndEditComment(this.props.commentID, this.props.commentToEdit.post)
                }} >

                <label>
                    Edit Date:
                    <input type="text"
                           name="date"
                           onChange={this.props.handleCommentFormChange}
                           placeholder={this.props.commentToEdit.date} />
                </label>
                <label>
                    Edit Comment:
                    <input type="text"
                           name="body"
                           onChange={this.props.handleCommentFormChange}
                           placeholder={this.props.commentToEdit.body} />
                </label>
                <input type="hidden" name="post" value={this.props.post} onChange={this.updateComment} />
                <input type="submit" value="Edit Comment" />
            </form>


          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}> this button just closes the modal</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}



export default EditCommentModal;




