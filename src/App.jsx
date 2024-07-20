import { styled } from 'styled-components'
import './App.css'
import { Route } from './Routes/Route'
import { NavLink } from 'react-router-dom'

function App() {
    return (
        <>
            <Title>Hola </Title>
            <Route />
            <NavLink to="game">hola</NavLink>
            <h1>hola</h1>
        </>
    )
}

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
`

export default App
