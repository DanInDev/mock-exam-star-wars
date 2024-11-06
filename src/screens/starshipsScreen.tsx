import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStarships } from '../services/starshipsService';
import StarHeader from '../components/star_components/starHeader';
import StarText from '../components/star_components/starText';
import colors from '../constants/colors';

import LaunchButton from '../components/launchButton';

interface Starship {
  name: string;
  starship_class: string;
}

const StarshipsScreen: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getStarships();
        setStarships(data);
      } catch (error) {
        console.error("Failed to fetch starships:", error);
      } finally {
        setLoading(false);
        console.log("Starships fetched successfully!");
      }
    };
    fetchStarships();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StarHeader/>
      <StarText style={styles.title}>Available Starships</StarText>
      {/* FlatList of Starships */}
      <FlatList
        data={starships}
        keyExtractor={(starship) => starship.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={require('../../assets/x-wing.png')} style={styles.starshipIcon} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemClass}>{item.starship_class}</Text>
            </View>
            {/* Add LaunchButton for each starship item */}
            <LaunchButton starshipName={item.name} />
          </View>
        )}
      />
      {/* Possible Tab Navigator */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.secondary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: "lightgray",
    marginBottom: 8,
    borderRadius: 10,
  },
  starshipIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 25,
    color: colors.mainText,
  },
  itemClass: {
    fontSize: 20,
    color: colors.secondaryText,  
  },
});

export default StarshipsScreen;