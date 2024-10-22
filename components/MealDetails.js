import { View, Text, StyleSheet } from 'react-native';


function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return <View style={[styles.mealDetails, style]}>
            <Text style={[styles.mealDetailsItem, textStyle]}>{duration}min</Text>
            <Text style={[styles.mealDetailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.mealDetailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
}

export default MealDetails;

const styles = StyleSheet.create({
    mealDetailsItem: {
        marginHorizontal: 4,
        marginVertical: 4,
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 4,
        paddingVertical: 3,
        backgroundColor: '#c289a6',
        borderRadius: 4,

    }
});