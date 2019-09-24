import React from 'react';
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import {CardSection} from './common'
class ListItem extends React.Component{
    onRowPress(){
            this.props.nav.navigate('EmployeeEdit',{title:'Edit Employee',employee:this.props.employee.item})
    }
    render(){
        //console.log(this.props.employee);
        const {name}= this.props.employee.item;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                 <View>
                   <CardSection>
                           <Text style={styles.nameStyle} >{name}</Text>
                   </CardSection>
               </View>
            </TouchableWithoutFeedback>
               )
    }
}
const styles={
    nameStyle:{
        flex:1,
        fontSize:30,
        paddingLeft:10,
        alignSelf:'center',
        textAlign: 'center'
    }
}
export default ListItem