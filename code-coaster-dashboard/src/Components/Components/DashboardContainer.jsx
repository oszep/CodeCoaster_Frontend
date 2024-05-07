import './DashboardContainer.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurveGraphComponent from './CurveGraphComponent';
import PieGraph from './PieChartComponent';
import MonthlyMetricsChart from './MonthlyMetricsChart';

function DashboardContainer() {
    const navigate = useNavigate();
    const [timeUsers, setTimeUsers] = useState([]);
    const [levelUsers, setLevelUsers] = useState([]);

useEffect(() => {
    cargarMetricas();
}, [])

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        navigate('/', {replace: true})
    }

    /* Mediante cargarMetrica se realiza un fetch que obtiene los usuarios ;) */
    const cargarMetricas = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('No token found');
                return;
            }
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };
            const responseTime = await fetch('https://3wf32sqmhl.execute-api.us-east-1.amazonaws.com/metricas/tiempo', { headers });
            if (!responseTime.ok) throw new Error('Failed to fetch time metrics');
            const dataTime = await responseTime.json();
            setTimeUsers(dataTime);
            const responseLevel = await fetch('https://3wf32sqmhl.execute-api.us-east-1.amazonaws.com/metricas/nivel', { headers });
            if (!responseLevel.ok) throw new Error('Failed to fetch level metrics');
            const dataLevel = await responseLevel.json();
            setLevelUsers(dataLevel);
        }
        catch (error) {
            console.error('Error fetching metrics:', error);
        }
    };
    
    return(
        <>
            <div className="dashboard-container">
                <div className="header">
                    <div className="aulify-games-logo-container">
                        <img className="aulify-games-logo-dashboard" src="src/UI/aulify-games-logo.png" alt="Aulify Games Logo" />
                    </div>
                    <div className="logout-button-container">
                        <button className="logout-button" onClick={handleLogOut}>Cerrar sesión</button>
                    </div>
                </div>
                <div className="dashboard-body">
                    <div className="dashboard-body-upper">
                        <div className="stats-cards">
                            <div className="stats-card">
                                <div className="stats-card-header">
                                    <h3 className="header-highlight">Ranking</h3>
                                    <h3>de nivel </h3>
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
                                        {levelUsers.slice(0, 5).map((user, index) => (
                                            <h4 key={index}>{user.usuario}</h4>
                                        ))}
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
                                        {timeUsers.slice(0, 5).map((user, index) => (
                                            <h4 key={index}>{user.usuario}</h4>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-body-lower">
                        <div className="stats-cards">
                            <div className="stats-card">
                                    <div className="stats-card-header">
                                        <h3>Minutos de juego</h3>
                                        <h3 className="header-highlight">semanal</h3>
                                    </div>
                                    <div className="stats-card-body">
                                        <CurveGraphComponent/>
                                    </div>
                            </div>
                            <div className="stats-card">
                                <div className="stats-card-header">
                                    <h3>Usuarios por</h3>
                                    <h3 className="header-highlight"> cuenta</h3>
                                </div>
                                <div className="stats-card-body">
                                    <PieGraph/>
                                </div>
                            </div>
                            <div className="stats-card">
                                <div className="stats-card-header">
                                    <h3>Horas de juego</h3>
                                    <h3 className="header-highlight">mensual</h3>
                                </div>
                                <div className="stats-card-body">
                                    <MonthlyMetricsChart/>
                                </div>
                            </div>
                        </div>
                                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContainer