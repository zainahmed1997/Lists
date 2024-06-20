import Colors from "./Colors";
const App = () => {
  const colors = [
    { id: 1, name: 'Rosso' },
    { id: 2, name: 'Verde' },
    { id: 3, name: 'Blu' }
  ];

  return (
    <div className="App">
      <Colors colors={colors} />
    </div>
  );
}

export default App;

