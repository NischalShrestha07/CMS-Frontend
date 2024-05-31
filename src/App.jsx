
import './App.css'
// above line in NodeJS => require("./App.css") 

function App() {


  const myCssObject = {
    fontFamily: "cursive",
    fontSize: "25px"
  }
  return (
    <>
      {/* use of inner CSS by using css name like below */}
      <h1 style={myCssObject}>Nischal Shrestha</h1>

      {/* use of inline CSS  */}
      <h3 style={{ color: "greenyellow", fontFamily: "cursive", background: "red", padding: "25px", borderRadius: "25px" }}>I am a Student</h3>
      <h5>Age:{11 + 10}</h5>

    </>
  )
}

export default App
// above line in NodeJS => 
// module.exports=App
// exports.App.css