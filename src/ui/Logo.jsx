import React from 'react'
import styled from 'styled-components'
import { AiOutlineShopping } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/oneProductSlice'

const StyledLogo = styled.div`
    display:flex;
    align-items:center;
`
const Logo = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        navigate("/")
        dispatch(deleteProduct())
    }
    return (
        <StyledLogo onClick={handleClick}>
            <AiOutlineShopping size={50} />
            <h2>Shopex</h2>
        </StyledLogo>
    )
}

export default Logo