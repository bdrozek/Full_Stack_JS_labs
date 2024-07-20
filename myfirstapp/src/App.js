function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Benjamin Drozek</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <h2>Today is: {currDate.toLocaleDateString()}</h2>
      
    </div>
  );
}

export default App;