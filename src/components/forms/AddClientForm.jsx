import React from 'react';
import { connect } from 'react-redux/es/exports';
import { Form, Field } from 'react-final-form';
import { composeValidators, required, minLengthCreator, maxLengthCreator } from '../../utils/validators';
import { addCustomer } from '../../redux/customers-reducer';
import avatar from '../../assets/img/avatar.webp';

const AddClientForm = (props) => {

  const onSubmit = async values => {
    debugger;
    console.log(values);
    props.addClient(
      values.name,
      values.avatar,
      values.contact,
      values.contactValue,
      values.file
    );
    props.closeModal();
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={renderProps => {

        const {
          handleSubmit,
          submitError,
          submitting,
          consentId,
          values
        } = renderProps;
        
        return (
          <form
            onSubmit={handleSubmit}
            id="booking"
            className="form addClient__form"
            method="POST"
            encType="multipart/form-data"
          >
            <h3 className="form__title">
              ADD CLIENT
            </h3>
            <Field
              name="avatar"
              component="file"
            >
              {({ input }) => (
                <div className="form__input-wrap form__file-input-wrap">
                  <img src={avatar} />
                  <input {...input} type="file" />
                </div>
              )}
            </Field>
            <Field
              name="name"
              validate={composeValidators(required, minLengthCreator(2))}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <input {...input} placeholder="Full Name" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="form__input-wrap">
              <Field
                name="contact"
                component="select"
              >
                {({ input, meta }) => (
                  <>
                    <select {...input}>
                      <option>Choose way of contact you</option>
                      <option value="email">email</option>
                      <option value="phone">phone</option>
                      <option value="whatsapp">whatsapp</option>
                      <option value="messenger">messenger</option>
                    </select>
                  </>
                )}
              </Field>
            </div>
            <Field
              name="contactValue"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap">
                  <input {...input} placeholder="johndow@email.com" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            {
              submitError &&
              <span className="form__error">{submitError}</span>
            }
            <button
              type="submit"
              disabled={submitting}
              className="btn btn--transparent form__submit-btn"
            >
              SUBMIT
            </button>
          </form>
        )
      }}
    />
  );
}

export default connect(null, {addCustomer})(AddClientForm);
