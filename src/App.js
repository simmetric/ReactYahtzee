import './App.css';
import { Roll } from './dice/Roll';
import { ScoreBoard } from './score/ScoreBoard';

function App() {
  return (
    <div>
      <main>
        <div>
          <Roll />
        </div>
        <div>
          <ScoreBoard />
        </div>
      </main>
    </div>
  );
}

export default App;
