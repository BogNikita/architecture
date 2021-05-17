import React from 'react';
import { Formik } from 'formik';
import { SignUpComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type';

export function SignupFormContainer(props) {
  const {
    isPending,
    isSuccess,
    isError,
    errorMessage,
    pageLoading,
    initialValue,
    validation,
    onSubmitForm,
  } = props;

  const LOGIN_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = props.fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];
  
  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(props) => (
          <SignUpComponent
            fieldLogin={LOGIN_NAME}
            fieldPassword={PASSWORD_NAME}
            {...props}
            isPending={isPending}
            isSuccess={isSuccess}
            isError={isError}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </div>
  );
}
