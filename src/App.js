import './App.css';
import { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import UserData from './components/UserData'
import MapComponent from './components/MapComponent';

function App() {
  const [currentUserPicture, setCurrentUserPicture] = useState({});
  const [currentUserName, setCurrentUserName] = useState({});
  const [currentUserLocation, setCurrentUserLocation] = useState({ "latitude": 50, "longitude": 20 });
  const [isUserFetchError, setIsUserFetchError] = useState(true)
  const [isLoadingData, setIsLoadingData] = useState(false)

  async function getNextUser() {
    try {
      setIsLoadingData(true)
      const response = await fetch("https://randomuser.me/api/?nat=us");
      const responseData = await response.json()
      console.log(responseData)
      const userData = responseData.results[0];

      setCurrentUserPicture(userData.picture)
      setCurrentUserName(userData.name)
      setCurrentUserLocation(userData.location.coordinates)
      setIsUserFetchError(false)
    }
    catch (err) {
      setIsUserFetchError(true)
    }
    finally {
      setIsLoadingData(false)
    }
  }

  return (
    <div className="App">
      <Container>
        <Grid container spacing={2} direction="column">
          <Grid item lg={12}>
            <Paper elevation={2} sx={{ p: 4 }} >
              <UserData
                picture={currentUserPicture}
                username={currentUserName}
                hasError={isUserFetchError}
                isLoading={isLoadingData}
                onButtonClick={getNextUser} />
            </Paper>
          </Grid>
          <Grid item lg={12}>
            <Paper elevation={2}>
                <MapComponent location={currentUserLocation} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
