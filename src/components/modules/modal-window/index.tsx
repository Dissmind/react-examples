import React, {FunctionComponent} from 'react'
import styled from "styled-components";
import {ZIndex} from "../../../styled/global-styled";



export interface IModalWindowProp {
  isOpen: boolean
  onClose: () => void
  children: JSX.Element
}




export const ModalWindow: FunctionComponent<IModalWindowProp> = (props) => {

  const {
    isOpen,
    children,
    onClose
  } = props


  if (!isOpen) {
    return null
  }


  return (
    <>
      <BackgroundStl
        onClick={onClose}
      />

      <ContentContainerStl>
        {children}
      </ContentContainerStl>
    </>
  )
}



/*
* Styled-components:
* */
const BackgroundStl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  z-index: ${ZIndex.ModalWindow.bg};
  cursor: pointer;
`


const SizeMixinObj = {
  small: `
    top: 15vh;
    left: 15%;
    width: 70%;
    height: 70vh;
  `,

  medium: `
    top: 15vh;
    left: 15%;
    width: 70%;
    height: 70vh;
  `,

  big: `
    top: 15vh;
    left: 15%;
    width: 70%;
    height: 70vh;
  `
}

enum ModalWindowSize {
  small,
  medium,
  big
}

const selectSize = (modalWindowSize: ModalWindowSize) => {
  switch (modalWindowSize) {
    case ModalWindowSize.small:
      return SizeMixinObj.small

    case ModalWindowSize.medium:
      return SizeMixinObj.medium

    case ModalWindowSize.big:
      return SizeMixinObj.big

    default:
      return SizeMixinObj.medium
  }
}

const ContentContainerStl = styled.div`
  z-index: ${ZIndex.ModalWindow.content};

  background: white;
  position: absolute;

  ${selectSize(ModalWindowSize.medium)}
  
  padding: 16px 8px;
  
  box-sizing: border-box;
`



