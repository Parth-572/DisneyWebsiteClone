import React from 'react'
import genereList from '../services/genereList.json'
import MovieList from './MovieList'


const GenereMovieList = () => {
  return (
    <div>
        {genereList.map((item,index) =>(
            index <= 4 && (<div className='p-8 px-8 md:px-16 ' key={index}>
                <h2 className='text-[20px] text-white font-bold '>{item.name}</h2>
                <MovieList genreID = {item.id} index ={index}/>
            </div>)
        ))}
    </div>
  )
}

export default GenereMovieList