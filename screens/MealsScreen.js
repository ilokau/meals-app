import { View, FlatList, StyleSheet, Text } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsScreen( { route }) {
    const categoryId = route.params.categoryId;
    const mealsDisplayed = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    }
    );

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />
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
    }
});