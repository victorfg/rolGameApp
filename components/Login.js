import React, { Component } from 'react';
import { 
  View, 
  Image,
  StyleSheet 
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logoImage} 
            source={require('../assets/logo-icon.png')}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  logoImage:{
    width:100,
    height:100
  },
  logocontainer:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
