import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      <NavBarSimple />
      {/* <StatefulGreeting greeting="I'm a stateful Class component!"/> */}
    </div>
  );
}

export default App;