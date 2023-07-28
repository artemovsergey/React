# Технический журнал React

## Подключение библиотеки, вызов через функцию

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <div id="root2"></div>


    <script type="text/babel" src="index.jsx"></script>


    <script type="text/babel">
    
      function MyApp() {
        return <h1>Hello, world!</h1>;
      }

      const container = document.getElementById('root2');
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);

    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.

      Read this page for starting a new React project with JSX:
      https://react.dev/learn/start-a-new-react-project

      Read this page for adding React with JSX to an existing project:
      https://react.dev/learn/add-react-to-an-existing-project
    -->
  </body>
</html>
```

## Настройка простого сервера Node.js

```js
const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
       
    let filePath = "index.html";
    if(request.url !== "/"){
        // получаем путь после слеша
        filePath = request.url.substring(1);
    }
    fs.readFile(filePath, function(error, data){
               
        if(error){
                   
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
     
}).listen(3000, function(){
    console.log("Server started at 3000");
});
```

## Запуск сервера Node

```cmd
node app.js
```




