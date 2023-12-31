import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentAPIHooks from './components/ContentAPIHooks';
// import Content from './components/Content';
// import StatefulGreeting from './components/StatefulGreeting';
// import NavBarSimple from './components/NavBarSimple';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';


function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      <ContentAPIHooks />
      {/* <Content /> */}
      {/* <NavBarSimple /> */}
      {/* <StatefulGreeting greeting="I'm a stateful Class component!"/> */}
      {/* {<EventsFunctional />} */}
      {/* {<EventsClass />} */}

    </div>
  );
}

export default App;