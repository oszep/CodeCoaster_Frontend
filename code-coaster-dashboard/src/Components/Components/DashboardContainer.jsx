import './DashboardContainer.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GraphComponent from './GraphComponent';

function DashboardContainer() {
    
    const navigate = useNavigate();
    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate('/', {replace: true})
    }

    /* deberá haber un fetch que obtenga los usuarios, guardar en algo (?)  */
    /* namas pa probar, hagamos un array de objetos con los datos de los usuarios */
    const bestUsers = [
        {name: 'Dultez'},
        {name: 'Oskrin'},
        {name: 'Desies'},
        {name: 'Brenda'},
        {name: 'Kikiriki'}
    ]

    const viciousUsers = [
        {name: 'Ya'},
        {name: 'no'},
        {name: 'se me'},
        {name: 'ocurren'},
        {name: 'nombres'}
    ]

    /*supongamos que nuestro endpoint tiene una consulta así bien chida que saca las 3 primeras*/
    return(
        <>
            <div className="dashboard-container">
                <div className="header">
                    <div className="aulify-games-logo-container">
                        <img className="aulify-games-logo" src="src/UI/aulify-games-logo.png" alt="Aulify Games Logo" />
                    </div>
                    <div className="logout-button-container">
                        <button className="logout-button" onClick={handleLogOut}>Cerrar sesión</button>
                    </div>
                </div>
                <div className="welcome-text">
                    <h1>Bienvenido,</h1>
                    <h1 className="header-highlight">aqui va el nombre del usuario</h1>
                </div>
                <div className="dashboard-body">
                    <div className="stats-cards">
                        <div className="stats-card">
                            <div className="stats-card-header">
                                <h3 className="header-highlight">Ranking</h3>
                                <h3>de jugadores </h3>
                            </div>
                            <div className="stats-card-body">
                                <div className="places-container">
                                    <h4>#1</h4>
                                    <h4>#2</h4>
                                    <h4>#3</h4>
                                    <h4>#4</h4>
                                    <h4>#5</h4>
                                </div>
                                <div className="users-container">
                                    {/* y aquí una cosa que itere en las primeras 5 posiciones, un map o algo así */}
                                    {bestUsers.map(user => {
                                        return <h4>{user.name}</h4>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="stats-card">
                            <div className="stats-card-header">
                                <h3 className="header-highlight">Ranking</h3>
                                <h3>de horas jugadas </h3>
                            </div>
                            <div className="stats-card-body">
                                <div className="places-container">
                                        <h4>#1</h4>
                                        <h4>#2</h4>
                                        <h4>#3</h4>
                                        <h4>#4</h4>
                                        <h4>#5</h4>
                                    </div>
                                    <div className="users-container">
                                        {viciousUsers.map(user => {
                                            return <h4>{user.name}</h4>
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="stats-card">
                            <div className="stats-card-header">
                                <h3>Horas de juego</h3>
                                <h3 className="header-highlight">semanal</h3>
                            </div>
                            <div className="stats-card-body">
                                <GraphComponent/>
                        </div>

                        </div>
                    </div>
                </div>



                
            </div>
        
        
        
        </>
    )
}

export default DashboardContainer