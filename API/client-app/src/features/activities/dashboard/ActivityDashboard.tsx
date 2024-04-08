import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from '../../../app/models/activity';
import ActivityList from "./Activity";

interface Props{
    activities : Activity[];
}

export default function NavBar({activities} : Props) {
  return (
    <>
      <Grid>
        <GridColumn width="10">
          <ActivityList activities = {activities}/>
        </GridColumn>
      </Grid>
    </>
  );
}
