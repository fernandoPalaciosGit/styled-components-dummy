import styled from 'styled-components';
import {applyStyleModifiers} from 'styled-components-modifiers';
import {fontSize} from './../variables'

const BUTTON_SIZE = {
  small: () => `
    padding: 8px;
    font-size: ${fontSize.footer1};
  `,
  large: () => `
    padding: 16px 14px;
    font-size: ${fontSize.paragraph2};
  `,
  success: () => `
   background: ${({theme}) => theme.status.successColor};
   &:hover, &:focus {
    background-color: ${({theme}) => theme.status.successColorActive};
    outline: 3px solid ${({theme}) => theme.status.successColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${({theme}) => theme.status.successColorActive};
  }
  `,
  alert: () => `
   background: ${({theme}) => theme.status.errorColor};
   &:hover, &:focus {
    background-color: ${({theme}) => theme.status.errorColorActive};
    outline: 3px solid ${({theme}) => theme.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
  }

  &:active {
    background-color: ${({theme}) => theme.status.errorColorActive};
  }
  `
};

// styled.button -> <button/>
const Button = styled.button`
  padding: 12px 24px;
  margin: 5px;
  font-size: ${fontSize.paragraph1};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  color: ${({theme}) => theme.textColor};
  transition: background-color 0.2s linear, color 0.2s linear; ¡
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({theme}) => theme.primaryColor};
  border: 2px solid ${({theme}) => theme.primaryHoverColor};
  
  :hover {
    background-color: ${({theme}) => theme.primaryHoverColor};
  }
  
  ${applyStyleModifiers(BUTTON_SIZE)}
`;

export const SecondaryButton = styled(Button)`
  background-color: ${({theme}) => theme.secondaryColor};
  border: none;
  
  :hover {
    background-color: ${({theme}) => theme.secondaryHoverColor};
  }
  
  ${applyStyleModifiers(BUTTON_SIZE)}
`;

export const DisabledButton = styled(Button)`
  background-color: ${({theme}) => theme.tertiaryColor};
  border: none;
  border-radius: 0;
  color: ${({theme}) => theme.textColorContrast};
  
  :hover {
    background-color: ${({theme}) => theme.tertiaryHoverColor};
    color: ${({theme}) => theme.textColor};
  }
  
  ${applyStyleModifiers(BUTTON_SIZE)}
`;
