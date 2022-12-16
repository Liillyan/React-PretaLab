import {BrowserRouter, Routes, Route} from 'react-router-dom'

export function Router() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element= {<h1>Inicio</h1>} />
        <Route path="/sobre" element={<h1>sobre</h1>} />
        <Route path="/portfolio" element={<h1>portfolio</h1>} />
        <Route path="/contato" element={<h1>Contato</h1>}  />
        </Routes>
        </BrowserRouter>
    )
}