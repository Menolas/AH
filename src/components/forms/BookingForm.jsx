import React from 'react';
import { connect } from 'react-redux/es/exports';
import { Form, Field } from 'react-final-form';
import { composeValidators, required, minLengthCreator, maxLengthCreator } from '../../utils/validators';
import { addCustomer } from '../../redux/customers-reducer';

const BookingForm = (props) => {

  const onSubmit = async values => {
    console.log(values);
    props.addCustomer(
      values.name,
      values.contact,
      values.contactValue,
      values.message,
    );
    if (props.closeBookingModal) {
      props.closeBookingModal();
    }
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
            className="form booking__form form"
            method="POST"
          >
            <h3 className="form__title booking__form-title">
              FILL THE FORM AND WE WILL CONTACT YOU SOON
            </h3>
            <Field
              name="name"
              validate={composeValidators(required, minLengthCreator(2))}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap booking__input-wrap">
                  <input {...input} placeholder="Full Name" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="form__input-wrap booking__input-wrap">
              <Field
                name="contact"
                component="select"
                validate={required}
              >
                {({ input, meta }) => (
                  <>
                    <select {...input}>
                      <option>Choose the way you want me to contact you</option>
                      <option value="email">email</option>
                      <option value="phone">phone</option>
                      <option value="whatsapp">whatsapp</option>
                      <option value="messenger">messenger</option>
                    </select>
                    {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                  </>
                )}
              </Field>
            </div>
            <Field
              name="contactValue"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap booking__input-wrap">
                  <input {...input} placeholder="johndow@email.com" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              component="textarea"
              name="message"
              validate={composeValidators(required, minLengthCreator(10), maxLengthCreator(100))}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap booking__input-wrap">
                  <textarea {...input} placeholder="Your message" />
                  {meta.error && meta.touched && <span className="form__error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              type="checkbox"
              name="consent"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="form__input-wrap form__input-wrap--checkbox">
                  <input {...input} id={props.consentId} />
                  <label htmlFor={props.consentId}>
                    <span className="checkbox"></span>
                    CONSENT WITH PROCESSING OF MY PERSONAL DATA
                  </label>
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
              className="btn btn--transparent form__submit-btn booking__submit-btn"
            >
              BOOK A CONSULTATION
            </button>
          </form>
        )
      }}
    />
  );
}

export default connect(null, {addCustomer})(BookingForm);
