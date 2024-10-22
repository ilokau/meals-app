import { View, Text, StyleSheet } from 'react-native';

function Subtitle( { children }) {
    return(
        <Text style={styles.subtitle}>{children}</Text>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        margin: 8,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5,
        textAlign: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
});