import React from 'react';
import {View} from 'react-native';
import {Card, CardSection, Button} from'./common';
import {connect} from 'react-redux';
import {employeeUpdate , employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeCreate extends React.Component{

    static navigationOptions = ({navigation})=> {
        return{
         title:navigation.state.params.title,
         headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle:{
             flex: 1, textAlign: 'center'
          },
          headerRight: (<View style={{padding:6}}/>)
        }
    }

   
    onButtonPress(){
        a=1;
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift: shift ||'Monday'})
         if(a===1){
             this.props.navigation.navigate('EmployeLists');
         }
    }

    render(){
        return(
            <View>
                <Card>
                    <EmployeeForm {...this.props}/>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Confirm</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    const {name,phone,shift}=state.employeeFrom;
    return{
        name,phone,shift
    };
}
export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeCreate);