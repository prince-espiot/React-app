import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ButtonCom from "./components/Button";
import { useState } from "react";
import JobSeekerPortal from "./Job-portal";

function App() {
  let items = [
    "Ghana",
    "Accra",
    "London",
    "Estonia",
    "Helsinkia",
    "Tallinn",
    "Finland",
  ];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div>
      
      <div>
      <h1>My Application</h1>
      <JobSeekerPortal />
    </div>
    <ButtonCom color="success" onClick={() => console.log("Clicked!")}>
    Submit
    </ButtonCom>
    </div>
  );
}

export default App;

//<ButtonCom color="success" onClick={() => console.log("Clicked!")}>
//Submit
//</ButtonCom>
//{visible && <Alert onClose={() => setVisible(false)}>My alert</Alert>}
//      <ButtonCom color="primary" onClick={() => setVisible(true)}>
//        Submit
//      </ButtonCom>
