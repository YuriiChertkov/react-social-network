import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app_reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized){
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/news" component={News} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" component={Music} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    initialized:state.app.initialized,
  };
}

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
