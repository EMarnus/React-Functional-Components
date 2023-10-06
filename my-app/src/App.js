import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import NavBarSimple from './components/NavBarSimple';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      {/* <NavBarSimple /> */}
      {/* <StatefulGreeting greeting="I'm a stateful Class component!"/> */}
      {/* {<EventsFunctional />} */}
      {/* {<EventsClass />} */}
      {<NavBarForm />}
    </div>
  );
}

export default App;