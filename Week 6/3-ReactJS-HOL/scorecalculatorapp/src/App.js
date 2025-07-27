import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name = "Ramesh"
        School= "CMS MATRICULATION HIGHER SECONDARY SCHOOL"
        total= {470}
        goal= {500}
      />
    </div>
  );
}

export default App;
