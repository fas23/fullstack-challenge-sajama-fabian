import {useEffect, useState} from 'react'
import { getCharacters } from '../service';
import RickMortyLIst from './RickMortyLIst';

const RickMorty = () => {

    //const [isLoading, setIsLoading] = useState(false);
    const [charList, setCharList] = useState([]);
    const [image, setImage] = useState("")

    useEffect(() => {
        //setIsLoading(true);
        getCharacters()
        .then((data) => setCharList(data.results))
        .catch((err) => console.log(err))
        //.finally(() => setIsLoading(false));
        }, []);

  return (
    <>
        <img src={image} alt="imagen"></img>
        
        {
            <div>
            {charList.map( list => (
                <RickMortyLIst name={list.name} species={list.species} 
                image={list.image} setImage={setImage} key={list.id}/>
                
            )
            )}
          </div>
        }
    </>
  )
}

export default RickMorty;