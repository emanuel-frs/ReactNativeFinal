import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface PriceInputProps {
  onPriceChange: (price: number) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ onPriceChange }) => {
  const [priceText, setPriceText] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePriceChange = (text: string) => {
    const cleanedPrice = text.replace(/[^\d,.]/g, ''); 

    if (/^\d{0,}([,.]\d{0,2})?$/.test(cleanedPrice)) {

        const formattedPrice = cleanedPrice.replace('.', ',');
        setPriceText(formattedPrice);

        const parsedPrice = parseFloat(formattedPrice.replace(',', '.')); 

      if (!isNaN(parsedPrice)) {
        onPriceChange(parsedPrice); 
        setError(''); 
      } else {
        setError('Preço inválido')
      }
    } else {
      setError('Por favor, insira um preço válido (XXX,XX)');
    }
  };

  return (
    <View>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        keyboardType="numeric"
        placeholder="0,00"
        placeholderTextColor="#D2AD27"
        onChangeText={handlePriceChange}
        value={priceText}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    marginBottom: 0,
    color: '#FDE251',
    width: '100%',
    height: 44,
    borderRadius: 21,
    backgroundColor: '#1D1E2B',
    borderWidth: 2,
    borderColor: '#373A4D',
    paddingHorizontal: 15,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginHorizontal: 15,
  },
});

export default PriceInput;
