import { View, Text, StyleSheet, Image } from 'react-native';
import { Themes } from './assets/Themes';
import themes from './assets/Themes/themes';

const Footer = () => {
  return (
    <View style={styles.footer}>
        <View style={styles.footertext}>
            <Image
            source={require('./assets/Icons/discover_light.png')}
            style={[themes.light, styles.profilePic]}
            /> 
        
            <Text
            style={{
                fontFamily: 'Sydney', fontSize: '18', color: 'white'}}> Discover
            </Text>
        </View>

        <View style={styles.footertext}>
            <Image
            source={require('./assets/Icons/heart_light.png')}
            style={[themes.light, styles.profilePic]}
            /> 
            <Text
            style={{
                fontFamily: 'Sydney', fontSize: '18', color: 'white'}}> Matches
            </Text>
        </View>

        <View style={styles.footertext}>        
            <Image
            source={require('./assets/Icons/messages_light.png')}
            style={[themes.light, styles.profilePic]}
            />
            <Text
            style={{
                fontFamily: 'Sydney', fontSize: '18', color: 'white'}}> Dms
            </Text>
        </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  name: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 4,
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: '13%',
  },
  footertext: {
    alignContent: 'center',
    alignItems: 'center'

  },
  profilePic: {
    height: 34,
    width: 34,
    marginBottom: 4
  },
});
