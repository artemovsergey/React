# Технический журнал React

- test

- https://react.dev/
- https://nextjs.org/

# Create

- npx create-react-app nameapp

# Основа:
- Jsx  Syntax
- Components and Props
- Handling Events
- State Managment


# package.json

```js
{
  "name": "Example.React",
  "description": "Test Project on React",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "author": "asv",

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "devWebpack": "webpack serve --mode=development",
    "buildWebpack": "webpack",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom" : "6.23.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.0",
    "webpack": "5.70.0",
    "webpack-cli": "4.10.0",
    "webpack-dev-server": "4.11.0"
  }
}
```


# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <base href="/" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
      <div id="root">
      </div>
      <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
main.jsx
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
```

# Компонент App. Функциональный стиль

```js
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
            <button  className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
      </div>

    </>
  )
}

export default App
```

# Компонент Link и  NavLink

```
import { Link, NavLink } from 'react-router-dom';
<Link to={`/user/${id}`}> User3</Link>
<NavLink to="/header" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })} >Header</NavLink> 
```

## Параметры маршрута и запроса

```js
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
export default function User() {

    // получаем параметры маршрута
    const userId = useParams().id 
    // получаем параметры строки запроса
    const [searchParams, setSearchParams] = useSearchParams();

    return (
            <div>
                <h1> User с id = {userId} </h1>
                <h1> Параметр запроса name:  {searchParams.get("name")}</h1>
            </div>
    )
}
```

# Navigation

```js
import {useNavigate} from 'react-router-dom'
function Users() {

    const nav = useNavigate();
    const id = 3;
    return (
        <>
            <div>

                <h1> Каталог пользователей новых еще каталог </h1> 

                <button onClick={() => nav(`/user/${id}`)}>
                  Пользователь 1
                </button>

            </div>
        </>
    )
}
export default Users
```

# .editorconfig

```
[*]
charset = utf-8

```

# Props

```js
import React from 'react'
class Component extends React.Component {
    render() {
        return <h1>Privet, {this.props.name} </h1>;
    }
}

export default Component
Component.defaultProps = { name: "Tom", age: 25}
```


# State, EventHandler

```js
import React from 'react'

class StateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { class: "off", label: "Press" };

        this.press = this.press.bind(this);
    }
    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({ class: className });
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
    }
}

export default StateComponent
```

# webpack.config

```js
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8081,
        open: true
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}
```

# vite.config
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

# Next

- nom install next

## Webpuck build

```js
const path = require("path");
   
module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
     historyApiFallback: true,
     static: {
      directory: path.join(__dirname, "/"),
    },
     port: 8081,
     open: true
   },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}
```

