import React from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from 'react-native';
import { pakistaniMealData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';










export default function Categories({categories,activeCategory, setActiveCategory}) {
  return (
    <View >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 4 }}
        contentContainerStyle={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}
      >
        {categories.map((cat, index) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? styles.activeButton : {};
          
          return (
            <TouchableOpacity key={index} 
            onPress={()=>setActiveCategory(cat.strCategory)}
            style={styles.st}>
              <View  style={[styles.imageContainer, activeButtonClass]} >
                <Image
                  source={{ uri: cat.strCategoryThumb }}
                  style={{ width: hp(6), height: hp(6), borderRadius:hp(100) }}
                />
              </View>
              <Text style={[styles.text, isActive ? styles.activeText : {}]}>{cat.strCategory}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  st: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 10, // Adjust spacing as needed
  },
  text: {
    textAlign: 'center', // Center the text below the images
    marginTop: 4, // Add some margin on top of the text
  },
  activeButton: {
    backgroundColor: '#FFD700', // Example active background color
    
  },
  activeText: {
    color: '#FFD700', // Example active text color
  },
  imageContainer: {
    padding: 2,
    borderRadius: hp(110),
  },
});
