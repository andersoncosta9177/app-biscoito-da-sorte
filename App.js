
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'

function App() {
  const [img, setImg] = useState(require('./img/biscoito.png'));
  const [textFrase, setTextoFrase] = useState('');

  let frases = [
    "No meio da dificuldade encontra-se a oportunidade",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação. ",
    " Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo. ",
    " É parte da cura o desejo de ser curado",
    "O que me preocupa não é o grito dos maus. É o silêncio dos bons. ",
    " Imagine uma nova história para sua vida e acredite nela.",
    "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência. ",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer. ",
    " Deus não fez tudo num só dia; o que me faz pensar que eu possa?",

  ];


  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase("'" + frases[numeroAleatorio] + "'");
    setImg(require('./img/biscoitoAberto.png'));
  }

  function reiniciar() {
    setImg(require('./img/biscoito.png'))
    setTextoFrase('')
    }

  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}

      />

      <Text style={styles.textFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>

      </TouchableOpacity>


      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>Zerar biscoito</Text>
        </View>

      </TouchableOpacity>



    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },

  textFrase: {
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: 'italic',
    margin: 30,
    textAlign: 'center'
  },

  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },

  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },

  btnTexto: {

  }

})






export default App