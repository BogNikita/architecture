import React from 'react';
import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';

import styled from 'styled-components';
import { Button } from '../../../../lib/elements/buttons/buttonSignup';
import { THEME_COLOR } from '../../../../lib/theme';

export function SignUpComponent(props) {
  const {
    fieldLogin,
    fieldPassword,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
  } = props;

  const isFieldError = (name) => errors[name] && touched[name] && errors[name];

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldError(fieldLogin)}
          />
          <FieldPrimary
            type="password"
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
          />
        </FieldLayout>
        <StyledButton type="submit" disabled={isSubmitDisabled()}>
          Создать аккаунт
        </StyledButton>
        {isPending && 'Loading...'}
        {isError && errorMessage}
      </Container>
    </form>
  );
}
const Container = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const StyledButton = styled(Button)`
  background: ${THEME_COLOR.BACKGROUND_BUTTON};
`;
