import React from 'react'
import { Routes as ReactDomRoutes } from 'react-router-dom'
import { Route as RouteDom } from 'react-router-dom'
import App from '../App'
import MainGame from '../game/MainGame'

export const Route = () => {
    return (
        <ReactDomRoutes>
            <RouteDom path="/" element={<App />} />
        </ReactDomRoutes>
    )
}
