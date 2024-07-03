import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import UserSelector from './components/UserSelector';
import PostContent from './components/PostContent';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch posts and users from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <UserSelector users={users} onSelectUser={setSelectedUserId} />
      <PostList posts={posts} selectedUserId={selectedUserId} />
      {selectedPost && <PostContent content={selectedPost.content} />}
    </div>
  );
};

export default App;