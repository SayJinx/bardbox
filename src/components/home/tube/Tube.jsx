import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Greeting from '../Greeting';
import { Card, Col } from 'react-bootstrap';



  const Tube = ({pId}) => {

    const url = `https://www.youtube.com/playlist?list=${pId}`

  return (

    <Card className='h-150 w-50 shadow-sm bg-white rounded'>
      <Col  className='m-auto p-20'>
      <Greeting />
      <ReactPlayer 
      width='100%'
      height='100%'
      url={url} />
      </Col>
    </Card>
  );

}

export default Tube;