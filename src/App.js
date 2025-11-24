// import logo from './logo.svg';
import './App.css';
import Hell0 from './components/Hello';
import Header from './components/Header';
import Button from './components/Button';
import ProfileCard from './components/ProfileCard';
import "bootstrap/dist/css/bootstrap.min.css";
import Increment from './components/Increment';
import Lists from './components/Lists';
import StudentsTable from './components/StudentsTable';


function App() {
  return (
    <div>
      <Header />
      <StudentsTable />
      <Lists />
      <Increment />
      <Hell0  age='25'> </Hell0>
      <Button  title='Login'/>
      <Button title='Sign Up' />
      <ProfileCard name='Alex' age='35' profession='Engineer' />
      
      
    </div>
  );
}

export default App;
