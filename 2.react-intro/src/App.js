import "./App.css";

const linkArr = ["Services", "Projects", "About"];

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">LOGOBAKERY</div>
        <ul className="navlinks">
          {linkArr.map((e) => {
            return (
              <li className="links">
                <Navlink name={e} />
              </li>
            );
          })}
        </ul>
        <button className="navbtn">Contact</button>
      </nav>
      <div className="container">
        
          <h1> Mobile Operating System</h1>
          <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Window Phone</li>
          </ul>
          <h1>Mobile Manufracturers</h1>
          <ul>
            <li type="square">Samsung</li>
            <li type="square">HTC</li>
            <li type="disc">Micromax</li>
            <li type="circle">Apple</li>
          </ul>
        
      </div>
    </div>
  );
}

function Navlink(prop) {
  return <p>{prop.name}</p>;
}
export default App;
