import React, {Component} from 'react';
import {View, Text,BackHandler,Button,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';
import {navigation} from 'react-navigation';


class EmployeeLists extends Component{
   
    static navigationOptions =({navigation})=> {
        return{
        title: 'Employees',
        headerLeft: null,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle:{
             flex: 1, textAlign: 'center'
          },
          headerLeft:(
          <View style={{padding:6}}></View>) ,
          headerRight: (<View style={{padding:6}}>
              <Button
            onPress={navigation.getParam('employeeCreatePage')}
            title="Add"
            forecolor="white" titleColor='black' 
          /></View>
            )
          }
      };
      empployeeCreateScreen = () => {
       this.props.navigation.navigate('EmployeCreate',{title:'Add Employee'})
      }
    
      componentDidMount () {
        this.props.navigation.setParams({ employeeCreatePage: this.empployeeCreateScreen });
        this.props.employeeFetch();
        this.props.name=''
        this.props.phone=''
        this.props.shift=''
      }
       renderRow=(employee)=>{
         return(<ListItem employee={employee} nav={this.props.navigation} />);
       }
      render(){        
          return(<View>
               <FlatList
                  data = {this.props.employees}
                  renderItem = {this.renderRow}
              /> 
          </View>);
      }
}
const mapStateToProps=state=>{
  const employees=_.map(state.employees,(val,uid)=>{
        return {...val,uid}
  });
  return {employees};
}
export default connect(mapStateToProps,{employeeFetch})(EmployeeLists);