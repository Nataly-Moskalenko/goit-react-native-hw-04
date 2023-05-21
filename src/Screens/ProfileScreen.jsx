import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import imageBg from '../../assets/photo-bg.png';


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
        <View style={styles.profile}>
          <Text style={styles.name}>Natali Romanova</Text>
          {/* <Image style={styles.postPhoto} />
          <Text style={styles.text}>Upload photo</Text>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.text}>Location</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 375,
    height: 812,
    flex: 1,
    justifyContent: 'center',
  },
  profile: {
    marginTop: 147,    
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: '80%', 
  },
  name: {
    marginTop: 92,
    marginBottom: 33,
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  postPhoto: {
    width: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
  }, 
});
