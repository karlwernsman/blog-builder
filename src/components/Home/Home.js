import React, { useState } from 'react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [text, setText] = useState('text');
  const [font, setFont] = useState('font');
  const [alignment, setAlignment] = useState('alignment');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, text, font, alignment }} />
      <Editor {...{ setTitle, setSubtitle, setText, setFont, setAlignment }} />
    </main>
  );
}
