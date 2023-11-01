import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, getError, getProducts, getStatus } from '../store/ProductsSlice';
import styled from 'styled-components';
import ProductsItem from '../ui/ProductsItem';
import { useEffect } from 'react';

const StyledProducts = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr; 
    place-items:center;
    gap:2rem;
`

const Products = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsAsync())

    }, [])

    const products = useSelector(getProducts)



    return (
        <StyledProducts>
            {products.map(product => <ProductsItem product={product} key={product.id} />)}
        </StyledProducts>
    );
};

export default Products