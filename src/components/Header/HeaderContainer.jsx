import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from "./Header";
import { setLoginUserData } from "../../redux/login_reducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setLoginUserData(id, login, email);
        }
      });
  }

  render() {
    return <Header {...this.props}/>;
  }
}
let mapStateToProps = (state) => {
  return {
    isLogined: state.login.isLogined,
    login: state.login.login,
  };
};
export default connect(mapStateToProps, { setLoginUserData })(HeaderContainer);
