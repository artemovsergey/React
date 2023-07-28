function MyApp() {
    return <h1>Hello, world!</h1>;
  }

  const container = document.getElementById('root');
  const root2 = ReactDOM.createRoot(container);
  root2.render(<MyApp />);