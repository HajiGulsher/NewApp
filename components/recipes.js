import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';

export default function Recipes({ categories, meals }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>Recipes</Text>
      <View>
        {categories.length === 0 || meals.length === 0 ? null : (
          <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    </View>
  );
}

const RecipeCard = ({ item, index }) => {
  let isEven = index % 2 === 0;
  return (
    <View>
      <Pressable
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 4,
          paddingVertical: 1,
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}>
        <Image
          source={{ uri: item.strMealThumb }}
          style={{
            width: '100%',
            height: index % 3 === 0 ? hp(25) : hp(35),
            borderRadius: 35,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          }}
        />
        <Text style={{ fontWeight: 'bold', marginLeft: '2' }}>{item.strMeal}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    marginHorizontal: 4,
    paddingVertical: 3,
  },
  text: {
    fontWeight: 'bold',
    color: '#717171',
    fontSize: hp(3),
  },
});
