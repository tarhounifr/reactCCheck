import ProfilePhoto from "./Component/Profile/ProfilePhoto"
import FullName from "./Component/Profile/FullName"
import Address from "./Component/Profile/Adress/Address"
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
