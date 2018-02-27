import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Text, StyleSheet, Button, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  state = {
    isReady: false,
  };
  async componentDidMount () {
    await Expo.Font.loadAsync({
      'avenir': require('./assets/fonts/AvenirLight.ttf'),
      'avenir_bold': require('./assets/fonts/Avenir.ttf')
    })
    console.log('font loaded!')
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={styles.container}>
        <View elevation={5} style={styles.card}>
        <Text style={{fontSize:20, fontFamily:'avenir_bold'}}>4 days from today</Text>
        <Text style={{fontSize:13, color:'grey',fontFamily:'avenir'}}>3:30 pm - 4:15 pm</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:17, color:'black',fontFamily:'avenir'}}>
          3 riders</Text>
          <View style={styles.smallcircle}></View>
          <Text style={{fontSize:17, color:'#ea4752',fontFamily:'avenir'}}> $90</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{padding:5}}>
                <View style={styles.circleblank}></View>
                <View
                  style={{
                    borderLeftColor: '#ea4752',
                    borderStyle: 'solid',
                    borderLeftWidth: 1,
                    height: 40,
                    marginLeft:4,
                  }}
                />
                <View style={styles.circle}></View>
          </View>
          <View>
            <Text style={{fontFamily:'avenir'}}> 210 E Martin Luther King Jr Blvd </Text>
            <Text style={{fontSize:12, color:'grey', marginBottom:10,fontFamily:'avenir'}}> Austin, TX 75093</Text>
            <Text> 4009 Bashful Dr. </Text>
            <Text style={{fontSize:12, color:'grey', marginBottom:10,fontFamily:'avenir'}}> Plano, TX 75093</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.icon}>
          <Text style={{fontSize:17, textAlign:'center', color:'#ea4752',fontFamily:'avenir_bold', marginTop:2}}>i</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', padding:0,}}>
          <Text style={{fontSize:10, color:'grey', marginLeft:-20,fontFamily:'avenir_bold'}}> In order to confirm your spot, please confirm the $30</Text>
        </View>
        <TouchableOpacity
           style={styles.button}
           activeOpacity = { .5 }
        >

        <Text style={styles.buttontext}> Confirm Payment </Text>

        </TouchableOpacity>
        </View>
        <View elevation={6} style={styles.datecard}>
          <Text style={{color:'white', zIndex:1, fontSize: 13,fontFamily:'avenir'}}>Jan</Text>
          <Text style={{color:'white', zIndex:1, fontSize: 13,fontWeight: 'bold',fontFamily:'avenir'}}> 15 </Text>
        </View>
      </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    height:350,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card : {
    paddingLeft:40,
    marginTop:60,
    width:300,
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    marginLeft: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    zIndex:1,
  },
  info : {
    flex:1,
    alignSelf: 'flex-end',
    position: 'absolute',
    padding: 5,
    marginRight:20,
  },
  datecard : {
    flex:1,
    height: 50,
    width: 50,
    paddingTop: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    padding: 5,
    backgroundColor:'#ea4752',
    marginRight:20,
    borderRadius: 10,
    padding: 1,
    margin: 20,
    marginLeft: 40,
    marginTop: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,

  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    borderWidth: 2,
    borderColor: '#ea4752',
    backgroundColor: 'white',
  },
  circle : {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#ea4752'
  },
  circleblank : {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    borderWidth: 1,
    borderColor: '#ea4752',
    backgroundColor: 'white',
  },
  smallcircle : {
    marginTop:11,
    margin:5,
    marginLeft:10,
    width: 3,
    height: 3,
    borderRadius: 10/2,
    backgroundColor: 'black'
  },
  button: {

      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:20,
      marginRight:20,
      backgroundColor:'#ea4752',
      borderRadius:50,
      borderWidth: 1,
      borderColor: '#fff'
    },

    buttontext:{
        color:'#fff',
        textAlign:'center',
        fontWeight: 'bold',
        fontFamily:'avenir',
    }
});
