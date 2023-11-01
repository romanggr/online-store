import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const StyledMain = styled.main`
    margin:1rem 5rem;
`

const AppLayout = () => {
    return (
        <div>
            <Header />
            <StyledMain>
                <Outlet />
            </StyledMain>
        </div>
    )
}

export default AppLayout