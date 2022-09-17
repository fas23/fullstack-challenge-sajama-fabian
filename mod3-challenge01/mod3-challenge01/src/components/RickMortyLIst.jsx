import React from 'react'

const RickMortyLIst = ({name, species, image, setImage}) => {
  return (
    <button className="color-square"
      onClick={() => setImage(image)}>  
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{species}</p>
    </button>
  )
}

export default RickMortyLIst
