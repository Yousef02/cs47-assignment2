import { View, Text, StyleSheet, Image } from 'react-native';
import { Themes } from './assets/Themes';
import themes from './assets/Themes/themes';

// This is an example of destructuring props
// We can also take in the props as an object like so:
// const Comment = (props) =>
// and the props object will look like 
// props = {
//   commentUser: "Text",
//   timeStamp: "Text",
//   commentText: "Text"
// }
const Comment = () => {
  return (
    <View style={[Themes.light.navigation, styles.header]}>
    {/* <View style={styles.name}> */}
        <Image
        source={require('./assets/Icons/menu_light.png')}
        style={[themes.light, styles.profilePic]}
        /> 
        <Text
    style={{
        fontFamily: 'Sydney', fontSize: 34, fontWeight: 'bold'// test to see if the font is loaded, feel free to remove this
    }}> 
        ensom
        </Text>
        <Image
        source={require('./assets/Icons/sun.png')}
        style={[themes.light, styles.profilePic]}
        />
        {/* We put curly braces around variables to show their value in JSX */}
        {/* <Text>{commentUser}</Text> */}
    {/* </View> */}
    {/* <Text>{timeStamp}</Text> */}
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
        ios: {
          height: 54
        },
        android: {
            height: 41
        }}),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    width: '100%',
    justifyContent: 'space-between',
    padding: '2%',
    paddingHorizontal: '4%',
  },
  profilePic: {
    height: 40,
    width: 40,
    marginRight: 4,
  },
});
