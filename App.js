import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <EventList />
//     );
//   }
// }

const RootStack = createStackNavigator({
  list: { 
    screen: EventList, 
    navigationOptions: () => ({
      title: 'Your Events'
    }) 
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event'
    })
  }
})

const App = createAppContainer(RootStack);
export default App;