const MyComponent = ({ onSomeEvent }) => (
  <button onClick={() => onSomeEvent(3)}>Pulame</button>;
)
export default MyComponent;



const App = () => {

  const changePadre = param => alert(param);

  return <div>
    <MyComponent onSomeEvent={changePadre} />
  </div>;
}

export default App;