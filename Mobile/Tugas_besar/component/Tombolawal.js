import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class GenreButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: null,
    };
  }

  handleGenrePress = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { selectedGenre } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.genreButton,
            selectedGenre === 'Profile' && styles.selectedGenreButton,
            styles.borderButton,
          ]}
          onPress={() => this.handleGenrePress('Profile')}
        >
          <Text style={styles.genreButtonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genreButton,
            selectedGenre === 'Fasilitas' && styles.selectedGenreButton,
            styles.borderButton // Terapkan objek gaya borderButton
          ]}
          onPress={() => this.handleGenrePress('Fasilitas')}
        >
          <Text style={styles.genreButtonText}>Fasilitas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genreButton,
            selectedGenre === 'Homestay' && styles.selectedGenreButton,
            styles.borderButton
          ]}
          onPress={() => this.handleGenrePress('Homestay')}
        >
          <Text style={styles.genreButtonText}>Homestay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  genreButton: {
    width: 100,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedGenreButton: {
    backgroundColor: 'white',
  },
  genreButtonText: {
    color: 'purple',
    fontSize: 16,
  },
  borderButton: {
    borderWidth: 1, // Lebar border yang diinginkan
    borderColor: 'white',
  }
});

export default GenreButton;
