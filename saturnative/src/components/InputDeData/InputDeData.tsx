import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

interface InputDeDataProps {
    value: string;
    onChange: (text: string, isValid: boolean) => void;
}

const InputDeData: React.FC<InputDeDataProps> = ({ value, onChange }) => {
    const [isValid, setIsValid] = useState(true);

    const handleDateChange = (text: string) => {
        onChange(text, isValidDate(text));
    };

    const isValidDate = (text: string): boolean => {
        const dateParts = text.split('/');
        if (dateParts.length !== 3) {
            return false;
        }

        const [day, month, year] = dateParts.map(part => parseInt(part, 10));

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            return false;
        }

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const minYear = 1958;

        if (year < minYear || year > currentYear) {
            return false;
        }

        const dateObj = new Date(year, month - 1, day);
        const isValidDate = (
            dateObj.getFullYear() === year &&
            dateObj.getMonth() === month - 1 &&
            dateObj.getDate() === day
        );

        return isValidDate;
    };

    return (
        <View>
            <TextInputMask
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                value={value}
                onChangeText={handleDateChange}
                onBlur={() => setIsValid(isValidDate(value))}
                style={[styles.input, styles.padraoText, !isValid ? styles.inputError : null]}
                placeholder="DD/MM/AAAA"
                placeholderTextColor="#D2AD27"
                keyboardType="numeric"
            />
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
        marginHorizontal: 15
    },
    padraoText:{
        fontFamily: 'Museo-Moderno-Medium',
    }
});

export default InputDeData;
