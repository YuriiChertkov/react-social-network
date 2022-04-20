import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm />
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default Login;
