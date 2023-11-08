import './App.css';
import React from 'react'
import ComponentC from './components/ComponentE';

// Basic Context in React
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={'Sinchana'}>
          <ChannelContext.Provider value={'Codevolution'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;


// Note:
// To send data from App Component to ---> ComponentF
