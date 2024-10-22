import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealHandler() {
        navigation.navigate('Meal Details', {
            mealId: id,
        });
    }

return (
    <View style={styles.mealContainer}>
        <Pressable android_ripple={{ color: '#ccc'}}
        style={( { pressed }) => 
        (pressed ? styles.pressableButtonPressed : null)}
        onPress={selectMealHandler}
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
        elevation: 1,
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
        color: 'white',
        paddingHorizontal: 4,
        paddingVertical: 3,
        backgroundColor: '#c289a6'

    }
    
});

