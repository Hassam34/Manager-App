import React from 'react';
import {View} from 'react-native';
import {Card, CardSection, Button,Confirm} from'./common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave,employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends React.Component{
    state={showModal:false}
    static navigationOptions = ({navigation})=> {
        return{
         title:navigation.state.params.title,
         headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle:{
             flex: 1, textAlign: 'center'
          },
          headerRight: ( 
          <View style={{padding:6}}>
              
          </View>
          )
          
        }
    }
    componentDidMount(){
        _.each(this.props.navigation.state.params.employee,(value, prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }
            
    onButtonPress(){
        a=1;
        const {name,phone,shift}=this.props;
        //console.log(name,' ',phone,' ',shift);
        this.props.employeeSave({name,phone,shift: shift,uid:this.props.navigation.state.params.employee.uid})
         if(a===1){
             this.props.navigation.navigate('EmployeLists');
         }
    }
    
    onTextSend(){
        const {name, phone, shift}= this.props;
        Communications.text(phone,`Hi ${name}, Your upcomming shift is on ${shift}`);
    }

    onAccept(){
        a=1;
        this.props.employeeDelete({uid:this.props.navigation.state.params.employee.uid})
        this.setState({showModal:false})
        if(a===1){
            this.props.navigation.navigate('EmployeLists');
        }

    }
    onDecline(){
        this.setState({showModal:false})
    }
    render(){
        return(
            <View>
                <Card>
                    <EmployeeForm {...this}/>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onTextSend.bind(this)}>Text Scehdule</Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=> this.setState({showModal:!this.state.showModal})}>Fire Employee</Button>
                    </CardSection>
                    <Confirm visible={this.state.showModal}
                             onAccept={this.onAccept.bind(this)}
                            onDecline={this.onDecline.bind(this)}
                    >Are you sure you want to fire him</Confirm>
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
export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);