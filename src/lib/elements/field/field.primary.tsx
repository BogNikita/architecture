import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text/';
import { text } from '../../common/text'
import { FieldPrimaryPropsType } from './field.type';


export function FieldPrimary(props: FieldPrimaryPropsType) {
  const { 
      titleTid, 
      onChange, 
      onBlur, 
      value, 
      name, 
      placeholderTid, 
      error 
    } = props;

    return (
    <Container>
      <Title tid={text(titleTid)} />
      <Input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={text(placeholderTid)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

const Title = styled(TextSecondary)`
  margin-bottom:${spacing(1.5)};
`;

const Input = styled.input`
 background: ${THEME_COLOR.BACKGROUND_INPUT};
 border-radius: 5px;
 padding: 5px 10px
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: ${THEME_SIZE.FONT.SMALL};
`;