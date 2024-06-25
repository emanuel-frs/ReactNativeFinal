import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

const Khezac = require('../../../assets/perfis/Khezac.jpg');
const Leo = require('../../../assets/perfis/leo.webp');
const Emanuel = require('../../../assets/perfis/Emanuel.jpg');
const Lucas = require('../../../assets/perfis/Lucas.jpg');
const Nicolle = require('../../../assets/perfis/nicolle.jpg');

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
      <View style={styles.containerFilho}>
        <Image
          source={Khezac}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://github.com/Khezac">
            <Text style={styles.padraoText}>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
          <Link url="https://www.linkedin.com/in/khezac/">
            <Text style={styles.padraoText}>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={Leo}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://github.com/LeoEsplinio">
            <Text style={styles.padraoText}>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
          <Link url="https://www.linkedin.com/in/leoesplinio/">
            <Text style={styles.padraoText}>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={Nicolle}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://github.com/nimello74">
            <Text style={styles.padraoText}>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
          <Link url="https://www.linkedin.com/in/nimello/">
            <Text style={styles.padraoText}>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={Emanuel}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://github.com/emanuel-frs">
            <Text style={styles.padraoText}>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
          <Link url="https://www.linkedin.com/in/emanuel-f-2565181b6/">
            <Text style={styles.padraoText}>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
        </View>
      </View>
      <View style={styles.containerFilho}>
        <Image
          source={Lucas}
          style={styles.foto}
        />
        <View style={styles.linksContainer}>
          <Link url="https://github.com/Lcs97">
            <Text style={styles.padraoText}>GitHub</Text>
            <AntDesign name="github" size={24} color="white" />
          </Link>
          <Link url="https://www.linkedin.com/in/lucas-rodrigues-928419110/">
            <Text style={styles.padraoText}>Linkedin</Text>
            <AntDesign name="linkedin-square" size={24} color="white" />
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
