import React,{Component} from 'React';
import {CardSection,Card,Input, Button,Spinner} from './common';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';
import {View,Text, TouchableOpacity} from 'react-native';

class  LoginApp extends Component{
    static navigationOptions = {
        title: 'Welcome',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle:{
             flex: 1, textAlign: 'center'
          }
      };
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
       
    }

    renderError(){
        if(this.props.error){
            return(
            <View style={{backgroundColor:'white'}}>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </View>
            );
        }
    }

    rederButton(){
        console.log('Login')
        if(this.props.loading){
            console.log('Hi Login')
            return(
                <Spinner size={'large'}/>
            ); 
        }
        else{
            console.log(' Bye Login')
            if(this.props.red){
                   this.props.navigation.replace('EmployeLists')                
               }
            return( 
                <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                     <View style={{ borderRadius: 20, width: 160, height: 40, justifyContent: 'center', backgroundColor: '#8B63E6', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, color: 'white' }}>LOGIN</Text>
                            </View>
                </TouchableOpacity>
                
            );
        }
    }

    render(){
        return(
            <View > 
                <CardSection>
                    <Input 
                    label='Email'
                    placeholder='user@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}/>
                </CardSection>
                <CardSection>
                     <Input
                        secureTextEntry
                        label='Password'
                        placeholder='******'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}/>
                </CardSection>
                {this.renderError()}
                <View style={{alignSelf:'center', marginTop:20,height:20}}>
                {this.rederButton()}
                </View>
                   
               
                </View>
        );    
        
    }
}
const styles={
    errorTextStyle:{
        fontSize:18,
        color:'red',
        alignSelf:'center'
    }
}
const mapStateToProps=state=>{
    return {
        email: state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
        red: state.auth.user
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginApp);