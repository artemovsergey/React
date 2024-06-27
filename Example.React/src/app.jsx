import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigate} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Component from './components/Component.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Users from './components/Users.jsx'
import User from './components/User.jsx'
import NewComponent from './components/NewComponent.jsx'
import A from './components/a.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <div>
            
            <Routes>
                <Route path="/Home" element={<Home />} >
                    <Route index element={<h3>Каталог продуктов новых</h3>} />
                    <Route path="phones" element={<Header />} />
                    <Route path="tablets" element={<Header />} />
                </Route>
                <Route path="/" element={<App />} />
                <Route path="/Component" element={<Component />} />
                <Route path="/Header" element={<Header />} />
                
                <Route path="/Users" element={<Users />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/NewComponent" element={<NewComponent />} />
                <Route path="/a" element={<A />} />
                <Route path="/old" element={<Navigate to="/users" />} />


            </Routes>
        </div>
    </Router>
)
