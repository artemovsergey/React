import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Component from './components/Component.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <div>
            <Routes>
                <Route path="/Home" element={<App />} />
                <Route path="/" element={<App />} />
                <Route path="/Component" element={<Component />} />
            </Routes>
        </div>
    </Router>
)
