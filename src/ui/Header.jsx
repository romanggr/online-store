import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { BiBasket } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const StyledHeader = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#222831;
    padding:0.5rem 3rem;
`

const Header = () => {
    const navigate = useNavigate()
    return (
        <StyledHeader>
            <Logo />
            <BiBasket
                onClick={() => navigate("/basket")}
                style={{ cursor: "pointer" }}
                size={50} />
        </StyledHeader>
    )
}

export default Header