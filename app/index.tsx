import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';


const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Aura</Text>
      <Link href="/profile" style={{color: 'blue'}}>Go to profile
      </Link>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})