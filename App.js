import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import report from './pages/repoet';
import editprofile from './pages/editprofile';


const stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <stack.Navigator headerMode='none'>
        <stack.Screen name="report" component={report} />
        <stack.Screen name="editprofile" component={editprofile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;