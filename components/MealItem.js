import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
return (
    <View style={styles.mealContainer}>
        <Pressable android_ripple={{ color: '#ccc'}}
        style={( { pressed }) => 
        (pressed ? styles.pressableButtonPressed : null)}
        >
        <View style={styles.mealContainer}>
        <View>
            <Image source={{uri: imageUrl }} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.mealDetails}>
            <Text style={styles.mealDetailsItem}>{duration}min</Text>
            <Text style={styles.mealDetailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.mealDetailsItem}>{affordability.toUpperCase()}</Text>
        </View>
        </View>
        </Pressable>
    </View>
);
}

export default MealItem;

const styles = StyleSheet.create({
    mealContainer: {
        margin: 16,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden': 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },

    innerMealContainer: {
        borderRadius: 8,
        overflow: 'hidden',

    },

    pressableButtonPressed : { //visible reaction on iOS when pressed
        opacity: 0.5,
    
      },


    image: {
        width: '100%',
        height: 200
    },

    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16,
        margin: 8,
    },

    mealDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    mealDetailsItem: {
        marginHorizontal: 4,
        fontSize: 12,

    }
    
});