import styled from 'styled-components'
import {fontSize} from "../variables/typography";
import {Ilustrations} from "../assets";
import {PrimaryButton} from "./Buttons";
import CloseIcon from "./CloseIcon";
import React from "react";

const Wrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 15px 16 px rgba(0, 0, 0.2);
  background-color: ${({theme}) => theme.formElement.background};
  color: ${({theme}) => theme.formElement.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const Header = styled.h3`
  font-size: ${fontSize.header3};
`;

const Information = styled.p`
  font-size: ${fontSize.paragraph1};
  max-width: 70%;
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  right: 40px;
  top: 40px;
  padding: 0; 
`;

export const SignUpModal = ({toggle}) => {
  return (
    <Wrapper>
      <CloseModalButton aria-label="close modal" onClick={toggle}>
        <CloseIcon/>
      </CloseModalButton>
      <img src={Ilustrations.SignUp} alt="background sign up image" aria-hidden="true"/>
      <Header>Sign up</Header>
      <Information>Sign up today to get access!</Information>
      <PrimaryButton>Sign up</PrimaryButton>
    </Wrapper>
  );
};
