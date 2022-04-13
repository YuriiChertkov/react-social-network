import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


export const withLoginRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render (){
            if (!this.props.isLogined) return <Redirect to ={"/login"}/>
  return <Component {...this.props}/>
        }
    }

    let  ConnectedLoginRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedLoginRedirectComponent;
}

let mapStateToPropsForRedirect = (state) => {
    return {
      isLogined: state.login.isLogined,
    };
  };

