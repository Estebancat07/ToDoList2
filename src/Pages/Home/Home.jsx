import { useEffect } from "react";
import { HomeContainer, HomeImg, HomeImgs, HomeMainText } from "./HomeStyles";
import Pokemon from '../../assets/img/home/pokemon.png'
import TodoList from '../../assets/img/home/todolist.png'
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(()=>{
    document.title = 'Inicio'
  }, [])

  return (
    <HomeContainer>
      <HomeMainText>
         <span>ToDo List y Pokemon Search.</span> 
      </HomeMainText>

      <HomeImgs>
        <Link to='/todo' title="Link a ToDo List">
          <HomeImg src={TodoList} style={{ backgroundColor: "red" }} />
        </Link>

        <Link to='/pokeapi' title="Link a Pokemons Search">
          <HomeImg src={Pokemon} style={{ backgroundColor: "yellow" }} />
        </Link>
      </HomeImgs>
    </HomeContainer>
  )
}
export default Home