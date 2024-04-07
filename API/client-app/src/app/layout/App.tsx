import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header, List, ListItem } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {

  const [activites, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
    .then(response => {
      setActivities(response.data)
      })
  },[])

  return (
    <div>

    <Header as = 'h2' icon='users' content= 'Reactivities'/>
     <List>
      {activites.map((activity) => (
        <ListItem key={activity.id}>
          {activity.title}
        </ListItem>
      ))}
     </List>
    </div>
  )
}

export default App
