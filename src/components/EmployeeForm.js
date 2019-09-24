import React from 'react';
import {View,Picker,Text} from 'react-native';
import { CardSection,Input} from'./common';
import {connect} from 'react-redux';
import {employeeUpdate , employeeCreate} from '../actions';

class EmployeeFrom extends React.Component{
    onNameChange(text){
        this.props.employeeUpdate({prop:'name',value:text});
    }
    render(){
        return(<View><CardSection>
            <Input
             label='Name :'
             placeholder='Name'
             value={this.props.name}
             onChangeText={this.onNameChange.bind(this)}
            />
        </CardSection>
        <CardSection>
            <Input label='Cell no :'
            placeholder='+92 *** *******'
            value={this.props.phone}
            onChangeText={value=> this.props.employeeUpdate({prop:'phone', value})}
           />
            
        </CardSection>
        <CardSection >
             <View style={{alignItem:'center', flex:1, flexDirection:'row',height:40}}>
                    <Text style={{ marginTop:7,paddingLeft:20,fontSize:18, flex:1 }}  >Shift:</Text>
                    <Picker style={{ paddingBottom:5,  paddingRight:5,paddingLeft:5,flex:2}}
                        selectedValue={this.props.shift}
                        onValueChange={value=>this.props.employeeUpdate({prop:'shift', value})}>
                        <Picker.Item label='Monday' value='Monday'/>
                        <Picker.Item label='Tuesday' value='Tuesday'/>
                        <Picker.Item label='Wednesday' value='Wednesday'/>
                        <Picker.Item label='Thursday' value='Thursday'/>
                        <Picker.Item label='Friday' value='Friday'/>
                        <Picker.Item label='Saturday' value='Saturday'/>
                        <Picker.Item label='Sunday' value='Sunday'/>
                    </Picker>
              </View>
        </CardSection>
        </View>);
    }
}
const mapStateToProps=(state)=>{
    const {name,phone,shift}=state.employeeFrom;
    return{
        name,phone,shift
    };
}
export default connect(mapStateToProps,{employeeUpdate , employeeCreate})(EmployeeFrom);