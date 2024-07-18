import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { styled } from 'styled-components'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Title>Hola Panitas</Title>
        </>
    )
}

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #bf4f74;
`

export default App
