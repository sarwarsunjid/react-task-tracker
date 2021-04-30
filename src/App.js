// Every return has a single element
//jsx expression must have a single element
//basic example of jsx expression
const name ="Brad";
const x = false;

function App() {
  return (
    <div className="App">
      <h1>Hello from react</h1>
      <h2>Hello {name}</h2>
      <h2>hello {x ? "Yes" : "No"}</h2>
    </div>
  );
}

export default App;
