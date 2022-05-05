/*
* Sandbox - test component for development.
* */
import React, {useState} from 'react'
import {ModalWindow} from "./components/modules/modal-window";


export const Sandbox = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onToggleModalWindow = () => setIsOpen(prev => !prev)

  const onCloseModalWindow = () => setIsOpen(false)

  return (
      <div>
        <ModalWindow
          isOpen={isOpen}
          onClose={onCloseModalWindow}
        >
          <>
            Lorem ipsum dolor sit amet.
          </>
        </ModalWindow>

        <button
          onClick={onToggleModalWindow}
        >
          {
            (isOpen)
              ? 'Hide'
              : 'Show'
          }
        </button>
      </div>
  )
}