/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Todo from './components/screens/mainScreen'
import AuthMain from './components/screens/AuthMain'
import FireStore from './components/screens/FireStore'

AppRegistry.registerComponent(appName, () => FireStore);
