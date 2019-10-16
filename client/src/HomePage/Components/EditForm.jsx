import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  submit = (type) => {    
    this.props.handleClose(type, this.state.input);
    this.setState({
      input: ''
    });
  }

  render() {
    let input = this.state.input || this.props.value;

    return (
      <Dialog
        open={this.props.open}
        onClose={() => this.submit("cancel")}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Event</DialogTitle>
        <DialogContent>
          <TextField
                  autoFocus
                  id="title"
                  label="Title"
                  margin="normal"
                  fullWidth
                  value={input}
                  onChange={this.handleChange}
              /> 
        </DialogContent>
        <DialogActions>          
          <Button onClick={() => this.submit("update")} variant="outlined" color="primary">
            Save
          </Button>
          <Button onClick={() => this.submit("delete")} variant="outlined" color="secondary">
            Delete
          </Button>
          <Button onClick={() => this.submit("cancel")} variant="outlined" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

EditForm.propTypes = {
  open: PropTypes.bool.isRequired,
  value: PropTypes.string,
  handleClose: PropTypes.func.isRequired
};

export { EditForm }