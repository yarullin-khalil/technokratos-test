import Users from "./Users";
import { connect } from 'react-redux';
import { getUsers } from "./redux/usersReducer";

const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (users) => {
        dispatch (getUsers(users))
      }
    }
 }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;
