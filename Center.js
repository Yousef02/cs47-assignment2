import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
// import { ImageBackground } from 'react-native-web';
import { Themes } from './assets/Themes';
import themes from './assets/Themes/themes';

const Center = () => {


  return (
    <View style={styles.container}>
        <View style={styles.mainpic}>
          <ImageBackground
            source={require('./assets/Profiles/mtl.jpg')}
            style={[Themes.light.shadows, styles.profilePic]}
            imageStyle={[Themes.light.shadows, styles.profilePic]}
            resizeMode="cover" >
            <View style={{position: 'absolute', top: '3%', left: '5%', justifyContent: 'center', alignItems: 'center'}}>  
                <Text style={{
                fontFamily: 'Sydney', fontSize: '32', fontWeight: 'bold', color: 'white'}}>MTL</Text>
            </View>
            <View style={{position: 'absolute', bottom: '3%', left: '5%', justifyContent: 'center', alignItems: 'center'}}>  
                <Text style={{
                fontFamily: 'Sydney', fontSize: '18', fontWeight: 'bold', color: 'white'}}>2 miles aways</Text>
            </View>
            </ImageBackground>
        </View>

        <View style={[Themes.light.shadows, styles.playermain]}>

            <View>
            <Text style={{
            fontFamily: 'Sydney', fontSize: '24', fontWeight: 'bold'}}> My hottest take </Text>
            </View>
            <View style={styles.player}>
                <Image style={styles.button}
                source={require('./assets/Icons/player_light.png')}
                />
                <Image style={styles.wave}
                    source={require('./assets/Icons/audio_waveform_light.png')}
                    />
            </View>
        </View>
    </View>
  );
};

export default Center;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    borderColor: 'black',
    borderRadius: 4,
    width: '100%',
    padding: '4%',
    alignContent: 'center',
    
  },
  mainpic: {
    height: '60%',
    width: '100%',
    borderRadius: 50,
    paddingBottom: '3%',
  },
  playermain: {
    width: '100%',
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: 50,
    alignContent: 'flex-end'

  },
  profilePic: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  wave: {
    flex: 8,
    resizeMode: "contain",
    width:'100%'
  },
  player: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop: -10
  },
  button: {
    flex: 2,
    height: '50%',
    width: '15%',
    borderRadius: 50,
    marginRight: 4,

  }
});
