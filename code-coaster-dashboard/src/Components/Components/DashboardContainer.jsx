import './DashboardContainer.css'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import GraphComponent from './GraphComponent';

function DashboardContainer() {
      
    /* deberá haber un fetch que obtenga los usuarios, guardar en algo (?)  */

    return(
        <>
            <div className="dashboard-container">
                <div className="header">
                    <div className="aulify-games-logo-container">
                        <img className="aulify-games-logo" src="src/UI/aulify-games-logo.png" alt="Aulify Games Logo" />
                    </div>
                    <div className="logout-button-container">
                        <button className="logout-button">Cerrar sesión</button>
                    </div>
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
                                    <h4>Usuario 1</h4>
                                    <h4>Usuario 2</h4>
                                    <h4>Usuario 3</h4>
                                    <h4>Usuario 4</h4>
                                    <h4>Usuario 5</h4>
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
                                        <h4>Usuario 1</h4>
                                        <h4>Usuario 2</h4>
                                        <h4>Usuario 3</h4>
                                        <h4>Usuario 4</h4>
                                        <h4>Usuario 5</h4>
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