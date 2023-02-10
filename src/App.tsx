
import './App.css';
import Private from './components/Auth/Private';
import Profile from './components/Auth/Profile';
import Box from './components/Context/Box';
import ThemeContext from './components/Context/ThemeContext';
import Counter from './components/counter/Counter';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import User from './components/User/User';
import UserContext from './components/userContext/UserContext';
import Users from './components/userContext/Users';

function App() {
  const personName={
      first: "Rifat",
      last: "Ahmed",
      age: 25
  
  }


  const personList=[
    {first:"Rifat", last:"Ahmed"},
    {first:"Hanif", last:"Khan"},
    {first:"Imran", last:"Ahmed"}
  ]
  return (
    <div className="App">
      <Greet name="Rifat"  isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList persons={personList}/>
      <Heading>How many heading tag there are.</Heading>
      <Status status='loading'/>
      <Oscar>
        <Heading>Oscar goes to md Rifat that means to me</Heading>
      </Oscar>
      <User></User>
      <Counter></Counter>
      <ThemeContext>
        <Box></Box>
      </ThemeContext>
      <UserContext>
        <Users></Users>
      </UserContext>
      <Private isLoggedIn={true} component={Profile}></Private>
    </div>
  );
}

export default App;
