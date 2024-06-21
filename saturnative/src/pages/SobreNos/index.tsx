import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ url, children }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
};

export default function SobreNos() {
  return (
    <ScrollView contentContainerStyle={styles.containerPai}>
        <View style={styles.barra} />
      <View style={styles.containerFilho}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg' }}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://www.linkedin.com/in/khezac/">
            <Text>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
          <Link url="https://github.com/Khezac">
            <Text>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg' }}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://www.linkedin.com/in/leoesplinio/">
            <Text>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
          <Link url="https://github.com/LeoEsplinio">
            <Text>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/6428556-icone-mulher-para-perfil-de-usuario-icone-feminino-humano-ou-sinal-e-simbolo-de-pessoas-vetor.jpg' }}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://www.linkedin.com/in/nimello/">
            <Text>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
          <Link url="https://github.com/nimello74">
            <Text>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg' }}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://www.linkedin.com/in/emanuel-f-2565181b6/">
            <Text>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
          <Link url="https://github.com/emanuel-frs">
            <Text>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/3715527-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-vetor.jpg' }}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://www.linkedin.com/in/lucas-rodrigues-928419110/">
            <Text>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
          <Link url="https://github.com/Lcs97">
            <Text>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
