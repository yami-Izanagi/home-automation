import "./App.css";

function App() {
  const turnOnHandle = async (event) => {
    try {
      const response = await fetch("http://192.168.43.240/16/on");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const turnOffHandle = async (event) => {
    const response = await fetch("http://192.168.43.240/4/off");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <header className="header">
        <h1>Home Automation</h1>
      </header>
      <div className="button">
        <button onClick={turnOnHandle}>Turn On</button>
        <button onClick={turnOffHandle}>Turn Off</button>
      </div>
    </div>
  );
}

export default App;
