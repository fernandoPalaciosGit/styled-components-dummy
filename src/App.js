import {PrimaryButton, SecondaryButton, DisabledButton} from "./components/Buttons";
import React, {useState} from "react";
import {ThemeDesign} from "./hooks/ThemeDesign";
import {SignUpModal} from "./components/Modal";
import {ToggleFade} from "./hooks/animations/ToggleFade";
import {Sad, Happy} from "./components/Emojis";
import ToggleFadeTransition from "./hooks/animations/ToggleFadeTransition";

function App() {
  const [showText, fadeInText] = useState(false);
  const [showIcon, fadeInIcon] = useState(true);
  const [showModal, fadeInModal] = useState(true);

  return (
    <div className="main">
      <ThemeDesign>
        <div>
          <span>Default: </span>
          <PrimaryButton>primary</PrimaryButton>
          <PrimaryButton modifiers={['success']}>primary success</PrimaryButton>
          <PrimaryButton modifiers={['alert']}>primary alert</PrimaryButton>
          <SecondaryButton>secondary</SecondaryButton>
          <SecondaryButton modifiers={['success']}>secondary success</SecondaryButton>
          <SecondaryButton modifiers={['alert']}>secondary alert</SecondaryButton>
          <DisabledButton>disabled</DisabledButton>
        </div>
        <div>
          <span>Small: </span>
          <PrimaryButton modifiers={['small']}>primary</PrimaryButton>
          <PrimaryButton modifiers={['small', 'success']}>primary success</PrimaryButton>
          <PrimaryButton modifiers={['small', 'alert']}>primary alert</PrimaryButton>
          <SecondaryButton modifiers={['small']}>secondary</SecondaryButton>
          <SecondaryButton modifiers={['small', 'success']}>secondary success</SecondaryButton>
          <SecondaryButton modifiers={['small', 'alert']}>secondary alert</SecondaryButton>
          <DisabledButton modifiers={['small']}>disabled</DisabledButton>
        </div>
        <div>
          <span>Large: </span>
          <PrimaryButton modifiers={['large']}>primary</PrimaryButton>
          <PrimaryButton modifiers={['large', 'success']}>primary success</PrimaryButton>
          <PrimaryButton modifiers={['large', 'alert']}>primary alert</PrimaryButton>
          <SecondaryButton modifiers={['large']}>secondary</SecondaryButton>
          <SecondaryButton modifiers={['large', 'success']}>secondary success</SecondaryButton>
          <SecondaryButton modifiers={['large', 'alert']}>secondary alert</SecondaryButton>
          <DisabledButton modifiers={['large']}>disabled</DisabledButton>
        </div>


        <div>
          <PrimaryButton onClick={() => fadeInModal(!showModal)}>Fade In/Out Modal</PrimaryButton>
          <ToggleFade show={showModal}><SignUpModal toggle={() => fadeInModal(!showModal)}/></ToggleFade>
        </div>

        <div>
          <PrimaryButton onClick={() => fadeInText(!showText)}>Fade In/Out Text</PrimaryButton>
          <ToggleFade show={showText}><h3>Animate me!!</h3></ToggleFade>
        </div>

        <div>
          <PrimaryButton onClick={() => fadeInIcon(!showIcon)}>Toggle Icon states</PrimaryButton>
          <ToggleFadeTransition statusA={<Happy/>} statusB={<Sad/>} show={showIcon}/>
        </div>
      </ThemeDesign>
    </div>
  );
}

export default App;
