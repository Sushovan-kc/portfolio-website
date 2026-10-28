import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PortfolioLayout from './layouts/PortfolioLayout'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
