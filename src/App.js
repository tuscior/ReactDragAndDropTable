import React from "react";
import Table from "./components/Table";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { ProfileView } from "./components/ProfileViews";
import EditView from "./components/EditView";

import MessagePrompt from "./components/MessagePrompt";
import * as actions from "./actions";
import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  onDeleteConfirm = () => {
    this.props.removeUser(this.props.views.currentUser);
    this.props.defaultView();
  };
  render() {
    return (
      <div className="ui very padded segment container">
        {
          <>
            <Header />
            <Table
              profileViewClick={user => this.props.profileView(user)}
              editViewClick={user => this.props.editView(user)}
              deleteViewClick={user => this.props.deleteView(user)}
            />
          </>
        }
        {this.props.users.loading && <Loader />}
        {this.props.views.editView && (
          <Modal
            onClose={() => this.props.defaultView()}
            show={this.props.views.showModal}
          >
            <EditView user={this.props.views.currentUser} />
          </Modal>
        )}
        {this.props.views.profileView && (
          <Modal
            onClose={() => this.props.defaultView()}
            show={this.props.views.showModal}
          >
            <ProfileView user={this.props.views.currentUser} />
          </Modal>
        )}

        {this.props.views.deleteView && (
          <MessagePrompt
            args={this.state.currentUser}
            confirm={() => this.onDeleteConfirm()}
            negate={() => this.props.defaultView()}
            onClose={() => this.props.defaultView()}
            show={this.props.views.showModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { ...actions })(App);
