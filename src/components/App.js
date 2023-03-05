import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Navbar, PostDetail, CreatePost } from './'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/post/:postId' element={<PostDetail />} />
        <Route exact path='/create-post' element={<CreatePost />} />
      </Routes>
      {/* <h1>Hi</h1> */}
    </div>
  );
}

export default App;
