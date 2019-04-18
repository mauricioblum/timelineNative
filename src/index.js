import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Post from '~/components/Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Mauricio Blum',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac posuere nulla. Nullam vitae ipsum dictum, placerat libero eget, lobortis velit. Vivamus quis faucibus justo. Aliquam erat volutpat. Mauris volutpat placerat nibh, eu sodales urna commodo id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vitae lacus ut dolor pharetra malesuada. Nullam pharetra ut diam scelerisque sagittis. Suspendisse potenti. Maecenas dignissim, justo viverra ultrices pulvinar, dolor nunc vestibulum libero, quis commodo sem quam a leo.        ',
      },
      {
        id: 1,
        title: 'Aprendendo React',
        author: 'Mauricio Blum',
        description: 'Lorem Ipsum Dolor Sit Amet',
      },
      {
        id: 2,
        title: 'Aprendendo Node',
        author: 'Mauricio Blum',
        description: 'Lorem Ipsum Dolor Sit Amet',
      },
      {
        id: 3,
        title: 'Aprendendo a Jogar',
        author: 'Mauricio Blum',
        description: 'Lorem Ipsum Dolor Sit Amet',
      },
      {
        id: 4,
        title: 'Aprendendo a Ganhar',
        author: 'Mauricio Blum',
        description: 'Lorem Ipsum Dolor Sit Amet',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ee7777',
  },
  scroll: {
    width: '100%',
  },
});
