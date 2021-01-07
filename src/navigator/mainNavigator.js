import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import PrivacyPolicyScreen23190733Navigator from '../features/PrivacyPolicyScreen23190733/navigator';
import BlankScreen19186121Navigator from '../features/BlankScreen19186121/navigator';
import Settings186099Navigator from '../features/Settings186099/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
  PrivacyPolicyScreen23190733 { screen: PrivacyPolicyScreen23190733Navigator },
BlankScreen19186121: { screen: BlankScreen19186121Navigator },
Settings186099: { screen: Settings186099Navigator },

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
