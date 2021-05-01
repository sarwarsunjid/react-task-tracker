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



const Header = ({title}) => {
    return (
        <header>
            {/* <h1>Hello {props.title} </h1> */}
            <h1>{title} </h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
