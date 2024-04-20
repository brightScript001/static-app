import "./App.css";
import Navbar from "./navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        {/* Your content goes here */}
        <h1 className="text-3xl mt-8">Welcome to My React App!</h1>
        <p className="text-lg">This is a test page with a simple navbar.</p>
      </div>
      ReactDom.render(
        <h1 className="header">This is JSX</h1>, document.getElementById("root")
      )
    </div>
  );

}

export default App;
