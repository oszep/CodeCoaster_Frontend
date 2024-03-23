import LoginContainer from './Components/Components/LoginContainer'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
