import styled, { css } from 'styled-components';

const subColor = '#505050';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -20px;
  font-size: 13px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #98648b;
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    margin-left: 3rem;
  }
`;
