import React from 'react';
import { connect } from 'react-redux/es/exports';
import { Form, Field } from 'react-final-form';
import { required } from '../../utils/validators';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router';
//import { FORM_ERROR } from 'final-form';

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//const validate = (e) => { };

const LoginForm = (props) => {

  if (props.isAuth) {
    return <Navigate to="/admin/customers" />
  }

  const onSubmit = async values => {
    //await sleep(300)
    
    //return { [FORM_ERROR]: 'Login Failed' }
    props.login(values.username, values.password);
  }
  
  return (
    <Form
      onSubmit={onSubmit}
      render={renderProps => {

        const {
          handleSubmit,
          submitError,
          submitting,
          form,
          pristine,
          values
        } = renderProps;

        return (
          <form
            onSubmit={handleSubmit}
            id="login"
            className="form"
            method="POST"
          >
            <h3 className="form__title">
              Login
            </h3>
            <Field
              name="username"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <label>Login</label>
                  <input {...input} type="text" placeholder="Admin" />
                  {
                    (meta.error || meta.submitError) && meta.touched && (
                      <span className="form__error">
                        {meta.error || meta.submitError}
                      </span>)
                  }
                </div>
              )}
            </Field>
            <Field
              name="password"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <label>Password</label>
                  <input {...input} type="password" placeholder="xxxxxxxx" />
                  {
                    meta.error && meta.touched &&
                    <span className="form__error">{meta.error}</span>
                  }
                </div>
              )}
            </Field>
            {
              submitError &&
              <span className="form__error">{submitError}</span>
            }
            <button
              className="btn btn--transparent form__submit-btn"
              type="submit"
              disabled={submitting}
            >
              Log In
            </button>
            <button
              className="btn btn--dark-bg form__submit-btn"
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </form>
        )
      }}
    />
  )
};

const mapStateToProps = (state) => (
  {
    isAuth: state.auth.isAuth
  }
)

export default connect(mapStateToProps, {login})(LoginForm);
