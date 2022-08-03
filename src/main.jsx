import React from 'react'
import ReactDOM from 'react-dom/client'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayaoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { Padre } from './07-tarea-memo/Padre'
//import { CounterWithHook } from './01-useState/CounterWithHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HookApp } from './HookApp'
import './index.css'

//import "../src/08-useReducer/intro-reducer"

import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";

//TODO agregar el 
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>
)
