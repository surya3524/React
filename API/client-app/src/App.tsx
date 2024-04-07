import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const [activites, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
      })
  },[])

  return (
    <div>
     <h1>Reactivities</h1>
     <ul>
      {activites.map((activity :any) => (
        <li key={activity.id}>
          {activity.title}
        </li>
      ))}
     </ul>
    </div>
  )
}

export default App
