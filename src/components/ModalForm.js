import React,{Button} from "react";
export default class Modal extends React.Component {
  render() {
    return (
        // <Modal > {/*show={this.setState({showModal: true})} onHide={this.setState({showModal: false})}>*/}
        // <Modal.Header closeButton>
        //   <Modal.Title>Modal heading</Modal.Title>
        // </Modal.Header>
        // <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        // <Modal.Footer>
        //   <Button variant="secondary" onClick={this.Testalert}>
        //     Close
        //   </Button>
        //   <Button variant="primary" onClick={this.Testalert}>
        //     Save Changes
        //   </Button>
        // </Modal.Footer>
        // </Modal>
        <Modal>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
    );
    //return <div>Hello Modal</div>;
  }
}