import React , {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TextInput, } from 'react-native';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
export default function Home() {

  const [activeCategory, setActiveCategory]= useState ('Beef');
  const [categories, setCategories]= useState ([]);
  const [meals, setMeals]= useState ([]);

  useEffect (()=>{
    getCategories();
    getRecipes();
  },[])

  const getCategories = async ()=>{
    try{
      const respone= await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got Catagories:',respone.data);
      if(respone && respone.data){
        setCategories(respone.data.categories);
      }
    }catch(err){
      console.log('error:',err.message);

    }

  }
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      // console.log('got recipes:', response.data);
      if(response && response.data){
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log('error:', err.message);
    }
  }
  

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={{
          paddingVertical: 14, // Equivalent to space-y-6
          gap: 6,
        }}>
        <View style={styles.bell}>
          <Image source={require('../assests/profile.png')}
            style={{ height: hp(6), width: hp(6), borderRadius: hp(100) }} />
          <BellIcon size={hp(5)} color={'#E0E0E0'} />
        </View>
        {/* Greeting and punch line */}
        <View style={{ marginHorizontal: 4, marginBottom: 2, paddingVertical: 2 }}>
          <Text style={{ fontSize: hp(2), color: 'black' }}>Hello' Noman</Text>
        </View>
        <View>
          <Text style={{ fontSize: hp(4.5), color: 'black' }}>Make Your Own Food,</Text>
          <Text style={{ fontSize: hp(4.5), color: 'black' }}>stay at <Text style={{ fontSize: hp(4.5), color: '#FFC107' }}>home</Text></Text>
        </View>

        <View style={styles.searchbar}>
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <View style={styles.search}>
            <MagnifyingGlassIcon size={hp(2.9)} color={'#BDBDBD'} strokeWidth={3}/>
          </View>
        </View>
        {/* Categories */}
        <View>
          <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </View>

        {/* Recipies added down */}
        <View>
          <Recipes meals={meals} categories={categories}/>
        </View>
      </ScrollView>
      {/* <Text style={styles.text}>hello</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  bell: {
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2
  },
  searchbar: {
    marginHorizontal: 4, // Equivalent to mx-4
    flexDirection: 'row', // Equivalent to flex-row
    alignItems: 'center', // Equivalent to items-center
    borderRadius: 9999, // Effectively makes the element circular
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Equivalent to bg-black/5
    padding: 6, // Equivalent to p-[6px]
  },
  input:{
    flex:1,
    marginBottom:1,
    paddingLeft:18,
    fontSize:hp(2),
    letterSpacing:0.5
  },
  search: {
    backgroundColor: 'white',
    borderRadius: 9999, // Effectively makes it circular
    padding: 8, // Adjust padding as needed
  },
});

