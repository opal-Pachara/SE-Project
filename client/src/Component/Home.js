import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import YouTube from 'react-youtube';
import '../Styles/Video.css';
export default function Home() {
  return (
  <div>
    <div className="textvideo">
      <b> It's been along day...</b><br/>
      <strong>Without you my friend</strong>

    </div>
    <div className="Video"> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/RgKAFK5djSk"
          title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>




  </div>
    
        
    
  );
}