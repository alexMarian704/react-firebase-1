import { useState } from 'react';
import './App.css';
import ImageRender from './components/Image';
import Singlephoto from './components/Singlephoto';
import UploadForm from './components/uploadForm';

function App() {
  const [select , setSelect] = useState(null)

  return (
    <div className="App">
      <h1>hi</h1>
      <UploadForm />
      <ImageRender setSelect={setSelect}/>
      {select && <Singlephoto select={select}/>}
    </div>
  );
}

export default App;
