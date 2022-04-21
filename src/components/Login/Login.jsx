import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const onSubmit = (formData)=>{
    console.log (formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default Login;
