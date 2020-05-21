import React from 'react'
import { Vediolistitem } from './Vediolistitem'

export const VedioList = ({vedios,onVideoSelect}) => {
    const listofvideos = vedios.map((video,id)=><Vediolistitem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return listofvideos;
       
    
}
