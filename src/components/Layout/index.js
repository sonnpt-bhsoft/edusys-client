import React from 'react'
import Header from '../Header'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './style.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout