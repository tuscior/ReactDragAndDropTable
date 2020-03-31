import React from "react";
import Input from "./Input";
import PropTypes from "prop-types";
import user from "../types/User";
import { userEdit, defaultView } from "../actions/index";
import { connect } from "react-redux";

class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username || "",
      firstname: this.props.user.firstname || "",
      surename: this.props.user.surename || "",
      description: this.props.user.description || ""
    };
  }
  handleChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };
  onSave = () => {
    const user = {
      ...this.props.user,
      ...this.state
    };
    this.props.userEdit(user);
    this.props.defaultView();
  };
  render() {
    return (
      <div className="profile">
        <div className="ui item">
          <div className="image">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" />
          </div>
          <form className="content" onSubmit={ev => ev.preventDefault()}>
            <h2 className="header">{this.state.username}</h2>
            <div className="description">
              <Input
                title="Username"
                fieldName="username"
                value={this.state.username}
                handleChange={(ev, name) => this.handleChange(ev, name)}
              />
              <Input
                title="Firstname"
                fieldName="firstname"
                value={this.state.firstname}
                handleChange={(ev, name) => this.handleChange(ev, name)}
              />
              <Input
                title="Surname"
                fieldName="surename"
                value={this.state.surename}
                handleChange={(ev, name) => this.handleChange(ev, name)}
              />
              <Input
                title="Description"
                fieldName="description"
                value={this.state.description}
                handleChange={(ev, name) => this.handleChange(ev, name)}
              />
            </div>
            <button className="ui primary button" onClick={this.onSave}>
              Save
            </button>
          </form>
          <div className="extra content"></div>
        </div>
      </div>
    );
  }
}

EditView.propTypes = {
  user: PropTypes.shape(user)
};
EditView.defaultProps = {
  user: {
    description: "Fill description",
    firstname: "Fill firstname",
    surename: "Fill second name"
  }
};
export default connect(null, { userEdit, defaultView })(EditView);
