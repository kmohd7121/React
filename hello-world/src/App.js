import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appstyles.css';
import style from './components/appStyle.module.css';
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1>
      <Inline/>
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruse" heroName="Batman">
        <p>This is children property</p>
        <h4>This is children property</h4>
      </Greet>
      <Greet name="jaik" heroName="superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="main" heroName="Wonder Women"/>
      <Welcome  name="Bruse" heroName="Batman"/> */}
      {/* <Welcome name="jaik" heroName="superman"/>
      <Welcome name="jaik" heroName="superman"/> */}
      
      {/* <Hello/> */}
    </div>
  );
}

export default App;
