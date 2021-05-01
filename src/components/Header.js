/**
 * installing an extension from vs code named as  ES7 React/Redux/React-Native/JS snippets
 * 
 * then write rafceon this file and then press a tab you will get this snippets
 */

import React from 'react'

const Header = (props) => {
    return (
        <header>
            {/* <h1>Hello {props.title} </h1> */}
            <h1>{props.title} </h1>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker',
}

export default Header
