import React from 'react';

const PostContent = React.memo(({ content }) => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
});

export default PostContent;