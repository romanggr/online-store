import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fetchOneProductAsync, getOneProduct, getOneProductStatus } from "../store/oneProductSlice"
import { useParams } from 'react-router-dom'
import { addToBasket } from '../store/BasketSlice'

const ProductContainer = styled.div`
    width:60%;
    margin:0 auto;
    background-color:#222831;

    display:flex;
    justify-content:space-between;
`

const Image = styled.img`
    width:50%;

`


const OneProductCart = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const oneProductData = useSelector(getOneProduct)
    const oneProduckStatus = useSelector(getOneProductStatus)



    useEffect(() => {
        dispatch(fetchOneProductAsync(id))
    }, [])

    if (oneProduckStatus === "loading") return <div>Spinner</div>
    return (
        <ProductContainer>
            <Image src={oneProductData.image} alt="image" />
            <div>
                <h2>{oneProductData.title}</h2>
                <button onClick={() => dispatch(addToBasket(oneProductData))}>Add to basket</button>
            </div>
        </ProductContainer>
    )
}

export default OneProductCart