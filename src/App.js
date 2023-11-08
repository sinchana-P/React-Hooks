import './App.css';
import HookCouterOne from './components/HookCouterOne';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassComponent from './components/IntervalClassComponent';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching'
import DataFetchingById from './components/DataFetchingById'
import DataFetchingButton from './components/DataFetchingButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HookCouterOne />
        <ClassCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassComponent /> */}
        {/* <IntervalHookCounter /> */}

        {/* <DataFetching /> */}
        {/* <DataFetchingById /> */}
        <DataFetchingButton />
      </header>
    </div>
  );
}

export default App;
