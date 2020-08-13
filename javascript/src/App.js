import React from 'react';
import './App.css';
import Machine from './definitions/Machine'
import Place from './definitions/Place'
import MachineManager from './components/machine/MachineManager'
import { blue, pink } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Account from './definitions/Account';


const machines = [
  new Machine({ machineID: 1, placeID: 1, name: 'machine01' }),
  new Machine({ machineID: 2, placeID: 2, name: 'machine02' }),
  new Machine({ machineID: 3, placeID: 5, name: 'machine03' }),
  new Machine({ machineID: 4, placeID: 3, name: 'machine04' }),
  new Machine({ machineID: 5, placeID: 6, name: 'machine05' }),
  new Machine({ machineID: 6, placeID: 5, name: 'machine06' }),
  new Machine({ machineID: 7, placeID: 1, name: 'machine07' }),
  new Machine({ machineID: 8, placeID: 8, name: 'machine08' }),
  new Machine({ machineID: 9, placeID: 4, name: 'machine09' }),
  new Machine({ machineID: 10, placeID: 2, name: 'machine10' }),
  new Machine({ machineID: 11, placeID: 5, name: 'machine11' }),
  new Machine({ machineID: 12, placeID: 1, name: 'machine12' }),
  new Machine({ machineID: 13, placeID: 3, name: 'machine13' }),
  new Machine({ machineID: 14, placeID: 3, name: 'machine14' }),
  new Machine({ machineID: 15, placeID: 6, name: 'machine15' }),
];

const places = [
  new Place({ placeID: 1, accountID: 1, name: 'place01', shiftStart: '1100', GMT: '+01:00', active: true, operators: 15 }),
  new Place({ placeID: 2, accountID: 2, name: 'place02', shiftStart: '2000', GMT: '-03:00', active: true, operators: 23 }),
  new Place({ placeID: 3, accountID: 4, name: 'place03', shiftStart: '2000', GMT: '+10:00', active: true, operators: 7 }),
  new Place({ placeID: 4, accountID: 3, name: 'place04', shiftStart: '0800', GMT: '+01:00', active: false, operators: 5 }),
  new Place({ placeID: 5, accountID: 4, name: 'place05', shiftStart: '1000', GMT: '+10:00', active: true, operators: 9 }),
  new Place({ placeID: 6, accountID: 2, name: 'place06', shiftStart: '0400', GMT: '+08:00', active: false, operators: 32 }),
  new Place({ placeID: 7, accountID: 1, name: 'place07', shiftStart: '0100', GMT: '-03:00', active: false, operators: 45 }),
  new Place({ placeID: 8, accountID: 3, name: 'place08', shiftStart: '0400', GMT: '+02:00', active: true, operators: 5 }),
];

const accounts = [
  new Account({ accountID: 1, name: 'account01' }),
  new Account({ accountID: 2, name: 'account02' }),
  new Account({ accountID: 3, name: 'account03' }),
  new Account({ accountID: 4, name: 'account04' })
];


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme} key="app">
      <div className="App" style={{ backgroundColor: '#FEFEFE' }}>
        <Container maxWidth="lg">
          <MachineManager availableMachines={machines} availablePlaces={places} availableAccounts={accounts} />
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
