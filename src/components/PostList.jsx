import React, { useMemo } from 'react';

const PostList = ({ posts, selectedUserId }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(post => post.userId === selectedUserId);
  }, [posts, selectedUserId]);

  return (
    <ul>
      {filteredPosts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;