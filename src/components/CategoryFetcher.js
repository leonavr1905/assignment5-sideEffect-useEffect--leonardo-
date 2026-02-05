import { useState, useEffect } from 'react';

const CategoryFetcher = () => {
  const [id, setId] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(json => setPost(json));
  }, [id]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Task 7: Fetch Data on State Change</h3>
      <button onClick={() => setId(id + 1)}>Get Next Post</button>
      {post && (
        <div style={{ marginTop: '5px' }}>
          <strong>Post #{id}:</strong> {post.title}
        </div>
      )}
    </div>
  );
};

export default CategoryFetcher;