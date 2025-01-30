import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Marcas de Carros</Text>

      <ScrollView>
        <Text style={styles.titulo}> FERRARI </Text>
        <Text style={styles.subtitulo}>Fundada em 1947 por Enzo Ferrari, em Maranello, Itália. </Text>
        <ScrollView horizontal>
        <View><Image style={styles.img} source={require('./assets/ferrari.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/ferrari2.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/ferrari3.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/ferrrari2.jpg')}/></View>
          </ScrollView>
     
        <Text style={styles.titulo}> Lamborghini </Text>
        <Text style={styles.subtitulo}>Fundada em 1963 por Ferruccio Lamborghini, em  Emília-Romanha,
         na Itália. </Text>
        <ScrollView horizontal>
        <View><Image style={styles.img} source={require('./assets/Lamborghini1.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Lamborghini2.png')}/></View>
        <View><Image style={styles.img} source={require('./assets/Lamborghini3.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Lamborghini4.jpg')}/></View>
          </ScrollView>


      <Text style={styles.titulo}> Porsche </Text>
        <Text style={styles.subtitulo}>Fundada em 1931 por Ferdinand Porsche, em Stuttgart, Alemanha. </Text>
       <ScrollView horizontal>
          <View><Image style={styles.img} source={require('./assets/porsche1.jpg')}/></View>
          <View><Image style={styles.img} source={require('./assets/porsche2.jpg')}/></View>
          <View><Image style={styles.img} source={require('./assets/porsche3.jpg')}/></View>
          <View><Image style={styles.img} source={require('./assets/porsche4.jpg')}/></View>
        </ScrollView>

          <Text style={styles.titulo}> Bugatti </Text>
        <Text style={styles.subtitulo}>Fundada em 1963 por Ferruccio Lamborghini, em  Emília-Romanha,
         na Itália. </Text>
        <ScrollView horizontal>
        <View><Image style={styles.img} source={require('./assets/Bugatti1.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Bugatti2.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Bugatti3.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Bugatti4.jpg')}/></View>
          </ScrollView>

          <Text style={styles.titulo}> Ford </Text>
        <Text style={styles.subtitulo}>Fundada em 1903 por Henry Ford, em  EDetroit, Michigan,
         nos Estados Unidos. </Text>
        <ScrollView horizontal>
        <View><Image style={styles.img} source={require('./assets/Ford1.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Ford2.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Ford3.jpg')}/></View>
        <View><Image style={styles.img} source={require('./assets/Ford4.jpg')}/></View>
          </ScrollView>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#050003',
    padding:4,
    marginTop:40
  },
  paragraph: {
    color:'red',
    marginTop: 45,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img:{
    marginTop:20,
    width:400,
    height:200,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'red',
  },
  titulo:{
    padding:5,
    color:'#e6d839',
    fontSize:30,
    marginTop:60
  },
  subtitulo:{
    color:'white',
    fontSize:25,
  
  }
});
