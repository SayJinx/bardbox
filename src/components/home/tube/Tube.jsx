import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Greeting from 'greeting';



  const Tube = ({pId}) => {

    const url = `https://www.youtube.com/playlist?list=${pId}`

  return (

    <div>
      <Greeting />
      <ReactPlayer 
      width='200%'
      height='200%'
      url={url} />
    </div>
  );

}

export default Tube;