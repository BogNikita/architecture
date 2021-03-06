import React from 'react';

import { signupFormValidation } from './signup.validation';
import { SIGNUP_FORM_FIELD_NAME, SIGNUP_FIELD_NAME } from './signup.type';
import { convertSignupFormData } from './signup.convert';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';

import { SignupFormContainer } from './frame/signup-form/';
import { signupFormUploadData } from './signup.action';
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_STORE_NAME } from './signup.constants';
import {
  isRequestPending,
  isRequestError,
  isRequestSuccess,
} from '../../main/store/store.service';

export function SignUpContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  const signupFormSendData = (values) => {
    const data = convertSignupFormData(values);

    dispatch(signupFormUploadData(data));
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };
  return (
    <SignupFormContainer
      isPending={isRequestPending(state.signupForm)}
      isError={isRequestError(state.signupForm)}
      isSuccess={isRequestSuccess(state.signupForm)}
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={state.signupForm.errorMessage}
    />
  );
}
