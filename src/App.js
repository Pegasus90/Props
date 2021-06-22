import "./App.css";
import Profilecomp from "./profile/profile";

import luffy from "./profile/Luffy.jpg";

function App() {
  return (
    <div className="App">
      <Profilecomp
        fullName="Monkey D. Luffy"
        bio="Captain of the Mugiwara Crew"
        profession="Pirate"
      >
        <img style={{ width: 300, height: 300 }} src={luffy} alt="luffy" />
      </Profilecomp>
    </div>
  );
}

export default App;
