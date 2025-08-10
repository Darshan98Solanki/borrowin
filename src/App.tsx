import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BorrowInLandingPage from './pages/Home'
import SignUp from './pages/SignUp'
import PersonalLoan from './pages/PersonalLoan'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<BorrowInLandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
