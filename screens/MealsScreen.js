import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsScreen( { route, navigation }) {
    const categoryId = route.params.categoryId;
    
    const mealsDisplayed = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    }
    );

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({ title: categoryTitle });
    }, [categoryId, navigation]);


    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability,

        };
        return <MealItem {...mealProps}/>
    }

    return <View style={styles.container}>
        <FlatList
            data={mealsDisplayed}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    </View>
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#ebc1d6"
    }
});