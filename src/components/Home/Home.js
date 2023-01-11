import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [text, setText] = useState('text');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, text }} />
      <Editor {...{ setTitle, setSubtitle, setText }} />
    </main>
  );
}
