import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  postHeader: {
    textAlign: 'left',
    borderBottomWidth: 1,

    borderColor: '#999',
  },
  postTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  postAuthor: {
    fontSize: 12,
    fontWeight: '300',
    color: '#666',
  },
  postDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#666',
    marginVertical: 5,
  },
});

const Post = ({ title, author, description }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postAuthor}>{author}</Text>
    </View>

    <Text style={styles.postDescription}>{description}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
