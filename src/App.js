import './App.css';
import Section from './components/Section';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <>
        <Section title="Please leave feedback">
          <Feedback />
        </Section>
      </>
    </div>
  );
}

export default App;
