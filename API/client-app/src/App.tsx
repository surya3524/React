import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import { Header, List, ListItem } from 'semantic-ui-react';

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

    <Header as = 'h2' icon='users' content= 'Reactivities'/>
     <List>
      {activites.map((activity :any) => (
        <ListItem key={activity.id}>
          {activity.title}
        </ListItem>
      ))}
     </List>
    </div>
  )
}

export default App
