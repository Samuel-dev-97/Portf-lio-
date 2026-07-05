import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Projects from '../pages/Projects'
import Certificates from '../pages/Certificates'
import Contact from '../pages/Contact'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/certificados" element={<Certificates />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  )
}
