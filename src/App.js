import './App.css';
import { VictoryPie } from 'victory-pie';

const grades = [{x: "Right", y: 7}, {x: "Wrong", y: 3}]

function App() {
  return (
    <div className="App">
      <h1>Victory Pie Chart</h1>
      <div className="Pie">
      <VictoryPie 
        data ={grades}
        colorScale={["#00ccff", "#CC00FF"]}
        radius={100}
      />
      </div>
    </div>
  );
}

export default App;
