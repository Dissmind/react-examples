import React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from "./app"
import {Sandbox} from "./sandbox";



const root = (
    <>
        {/*<App />*/}

        <Sandbox />
    </>
)


ReactDOM.render(root, document.querySelector('#root'))