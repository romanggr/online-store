import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledProduct = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:80%;
    
`
const Image = styled.img`
    width:100%;
    height:17rem;
`
const StyledTitle = styled.h2`
    text-align:center;
`

const ProductsItem = ({ product }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/cart/${product.id}`)
    }

    return (
        <StyledProduct onClick={handleClick}>
            <Image src={product.image} />
            <StyledTitle>{product.title}</StyledTitle>
        </StyledProduct>
    )
}

export default ProductsItem