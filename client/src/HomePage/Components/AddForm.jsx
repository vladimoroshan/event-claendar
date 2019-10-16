import React, { Component } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class AddForm extends Component {
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
    const { open } = this.props;

    return (
      <Dialog style={{ fontSize: '63px' }}
        open={open}
        onClose={() => this.submit("cancel")}
        aria-labelledby="form-dialog-title"
        placeholder="title"
      >
        <DialogTitle id="form-dialog-title">Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            label="Title"
            margin="normal"
            fullWidth
            value={this.state.input}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.submit("save")} variant="outlined" color="primary">
            Save
          </Button>
          <Button onClick={() => this.submit("cancel")} variant="outlined" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

// const mapStateToProps = ({ form }) => ({
//   form
// });

// export default connect(mapStateToProps, actions)(withStyles(styles)(AddForm));
export { AddForm }