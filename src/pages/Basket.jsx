import React from 'react'
import { useSelector } from 'react-redux'
import { getBasketItems } from '../store/BasketSlice'


const Basket = () => {
    const basketData = useSelector(getBasketItems)
    return (
        <div>
            {basketData.map(basketItem => <div key={basketItem.id}>{basketItem.title}</div>)}
        </div>
    )
}

export default Basket