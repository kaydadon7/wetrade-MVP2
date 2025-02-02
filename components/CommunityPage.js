import React, { useState } from 'react';

export function CommunityPage() {
  const [posts, setPosts] = useState([
    { id: 1, user: "סוחר אקטיבי", content: "אני מאמין שה-SP500 יעלה השבוע!", likes: 12, comments: ["נראה לי צודק", "לא בטוח"] },
    { id: 2, user: "משקיע לטווח ארוך", content: "אני מחזק את הפוזיציה שלי בטסלה!", likes: 20, comments: ["רעיון מעולה", "גם אני קניתי"] }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { id: posts.length + 1, user: "אתה", content: newPost, likes: 0, comments: [] }]);
      setNewPost('');
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-5">
      <h2 className="text-3xl font-bold mb-5 text-blue-900">קהילת WETRADE</h2>
      <div className="w-full max-w-2xl p-4 shadow-lg bg-white rounded-lg">
        <input type="text" placeholder="מה יש לך לומר?" value={newPost} onChange={(e) => setNewPost(e.target.value)} className="w-full p-2 border rounded-lg mb-2" />
        <button onClick={handlePost} className="bg-blue-700 text-white p-2 rounded-lg">פרסם</button>
      </div>
      <div className="w-full max-w-2xl mt-5">
        {posts.map(post => (
          <div key={post.id} className="p-4 shadow-lg bg-white rounded-lg mb-3">
            <h4 className="font-bold">{post.user}</h4>
            <p>{post.content}</p>
            <p>❤️ {post.likes} לייקים</p>
            <p>💬 {post.comments.length} תגובות</p>
          </div>
        ))}
      </div>
    </div>
  );
}