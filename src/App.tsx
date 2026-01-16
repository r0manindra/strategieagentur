import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Agentur from './pages/Agentur'
import Expertisen from './pages/Expertisen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="agentur" element={<Agentur />} />
        <Route path="expertisen" element={<Expertisen />} />
      </Route>
    </Routes>
  )
}

export default App
