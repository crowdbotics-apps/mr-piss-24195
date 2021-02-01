import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile199532Navigator from '../features/UserProfile199532/navigator';
import Settings199531Navigator from '../features/Settings199531/navigator';
import Settings199529Navigator from '../features/Settings199529/navigator';
import SignIn2199527Navigator from '../features/SignIn2199527/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile199532: { screen: UserProfile199532Navigator },
Settings199531: { screen: Settings199531Navigator },
Settings199529: { screen: Settings199529Navigator },
SignIn2199527: { screen: SignIn2199527Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
