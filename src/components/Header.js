/**
 * installing an extension from vs code named as  ES7 React/Redux/React-Native/JS snippets
 * 
 * then write rafceon this file and then press a tab you will get this snippets
 */

//import React from 'react'

/***
 * for using PropTypes we write impt then press, 
 * then we can see the below line  
 */
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className = 'header'>
            {/* <h1>Hello {props.title} </h1> */}

            {/* another approach for styling below */}
            {/* <h1 style={headingStyle}>{title} </h1> */}

            {/* Inline Styling below */}
            {/* <h1 style={{ color: 'red', backgroundColor: 'black', }}>{title} </h1> */}

            {/* compile index.css files for styling component */}
            <h1>{title}</h1>
            <Button />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Css in jsx

// const headingStyle = {
//      color: 'red',
//      backgroundColor: 'black',
// }

export default Header
