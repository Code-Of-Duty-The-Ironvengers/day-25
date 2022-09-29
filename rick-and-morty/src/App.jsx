import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// To understand recursion go line 110
import { useEffect } from "react";
import axios from "axios";

// class HomePage extends Component {
//   state = {
//     count: 0,
//   };

//   componentDidMount() {
//     console.log("ADDED TO THE DOM");
//   }

//   componentWillUnmount() {
//     console.log("LEAVING THE DOM");
//   }

//   componentDidUpdate() {
//     console.log("COMPONENT UPDATED");
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </div>
//         <h1>Vite + React</h1>
//         <div className="card">
//           <button
//             onClick={() =>
//               this.setState({
//                 count: this.state.count + 1,
//               })
//             }
//           >
//             count is {this.state.count}
//           </button>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//       </div>
//     );
//   }
// }

function HomePage() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [rickAndMortyCharacters, setRickAndMortyCharacters] = useState([]);

  useEffect(() => {
    // setCount(count + 1);

    axios.get("https://rickandmortyapi.com/api/character").then((esspain) => {
      setRickAndMortyCharacters(esspain.data.results);
    });
  }, []);

  useEffect(() => {
    console.log("VERY IMPORTANT TO KNOW THAT COUNT HAS CHANGED: ", count);
  }, [count]);
  // useEffect(() => {
  //   console.log("ADDED TO THE DOM");

  //   // return () => {
  //   //   console.log("LEAVING THE DOM");
  //   // };
  // });

  // useEffect(() => {
  //   return () => {
  //     console.log("LEAVING THE DOM");
  //   };
  // });

  return (
    <div className="App">
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      <pre>{JSON.stringify(rickAndMortyCharacters, null, 2)}</pre>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
// To understand recursion go to line 5
