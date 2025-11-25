// import logo from './logo.svg';
import "./App.css";
import Hell0 from "./components/Hello";
import Header from "./components/Header";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Increment from "./components/Increment";
import Lists from "./components/Lists";
import StudentsTable from "./components/StudentsTable";
import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";
import ColourPicker from "./components/ColourPicker";

function App() {
  const students = [
    { id: 1, name: "John", course: "React", score: 85 },
    { id: 2, name: "Mary", course: "Python", score: 92 },
    { id: 3, name: "Kevin", course: "JavaScript", score: 78 },
  ];
  return (
    <div>
      <Header />
      <ColourPicker />

      <Counter />

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          score={student.score}
        />
      ))}
      <StudentsTable />
      <Lists />
      <Increment />
      <Hell0 age="25"> </Hell0>
      <Button title="Login" />
      <Button title="Sign Up" />
      <ProfileCard name="Alex" age="35" profession="Engineer" />
    </div>
  );
}

export default App;
