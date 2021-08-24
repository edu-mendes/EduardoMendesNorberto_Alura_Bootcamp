import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextArea({
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
