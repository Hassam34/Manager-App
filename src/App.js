import React, {Component} from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import firebase from'firebase';
import LoginForm from './components/LoginForm';
import EmployeLists from './components/EmployeLists';
import EmployeCreate from './components/EmployeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import ReduxThunk from 'redux-thunk';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {View,Text} from 'react-native';
import {Spinner,Button,CardSection} from './components/common'

let a=1;
let b=1;

const RoutePage =createStackNavigator({
    
    EmployeLists: EmployeLists ,
    LoginForm: LoginForm ,
    EmployeCreate:EmployeCreate,
    EmployeeEdit:EmployeeEdit
   },
   {
    initialRouteName: 'LoginForm',
   });
  
   
const AppContainer = createAppContainer(RoutePage);

export default class  App extends Component{
    state={logedIn:null}
    componentDidMount(){
        console.log('hi')
        if(a==1)
        {
            const firebaseConfig = {
                apiKey: 'AIzaSyATwTgmYrdDYaSMG3LMEcj26ZQHg2PwL3w',
                authDomain: 'manager-c1053.firebaseapp.com',
                databaseURL: 'https://manager-c1053.firebaseio.com',
                projectId: 'manager-c1053',
                storageBucket: '',
                messagingSenderId: '465966072265',
                appId: '1:465966072265:web:ee1796cd869e0960'
              };
              firebase.initializeApp(firebaseConfig);
              a=2;
              
        }
    }
    


    render(){
        console.disableYellowBox = true;
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                    <AppContainer/>
                        </Provider>
           
        );
    };  
};
const styles={
    spinnerStyle:{
        flex: 1,
        marginTop:240,
        justifyContent: 'center',
        alignItems:'center'
    }
}