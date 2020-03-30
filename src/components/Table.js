import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import user from "../types/User";
import { connect } from "react-redux";
import { reorderUsers } from "../actions";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const TableHeaders = () => (
  <div className="grid ui five column">
    <h5 className="column">Index</h5>
    <h5 className="column">Username</h5>
    <h5 className="column">Name</h5>
    <h5 className="column">Surename</h5>
    <h5 className="column">Actions</h5>
  </div>
);

const TableData = ({
  users,
  profileViewClick,
  editViewClick,
  deleteViewClick
}) => (
  <React.Fragment>
    {users.map((user, index) => (
      <TableRow
        user={user}
        index={index}
        key={index}
        profileViewClick={() => profileViewClick(user)}
        editViewClick={() => editViewClick(user)}
        deleteViewClick={() => deleteViewClick(user)}
      />
    ))}
  </React.Fragment>
);

const TableRow = ({
  user,
  index,
  profileViewClick,
  editViewClick,
  deleteViewClick
}) => {
  return (
    <Draggable draggableId={user._id} key={user._id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="grid ui five column">
            <div className="column">{index + 1}</div>
            <div className="column">{user.username}</div>
            <div className="column">{user.firstname}</div>
            <div className="column">{user.surename}</div>
            <div className="column icons">
              <i className="icon edit" onClick={editViewClick}></i>
              <i className="icon user circle" onClick={profileViewClick}></i>
              <i className="icon trash" onClick={deleteViewClick}></i>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

class Table extends React.Component {
  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const users = reorder(
      this.props.users,
      result.source.index,
      result.destination.index
    );

    this.props.reorderUsers(users);
  };
  render() {
    return (
      <div>
        <TableHeaders />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="list">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TableData users={this.props.users} {...this.props} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

TableRow.propTypes = {
  user: PropTypes.shape(user),
  index: PropTypes.number.isRequired,
  profileViewClick: PropTypes.func.isRequired,
  editViewClick: PropTypes.func.isRequired,
  deleteViewClick: PropTypes.func.isRequired
};

TableRow.defaultProps = {
  user: {
    description: "Fill description",
    firstname: "Fill firstname",
    surename: "Fill second name"
  }
};

TableData.propTypes = {
  profileViewClick: PropTypes.func.isRequired,
  editViewClick: PropTypes.func.isRequired,
  deleteViewClick: PropTypes.func.isRequired
};

Table.propTypes = {
  profileViewClick: PropTypes.func.isRequired,
  editViewClick: PropTypes.func.isRequired,
  deleteViewClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users.data
  };
};

export default connect(mapStateToProps, { reorderUsers })(Table);
