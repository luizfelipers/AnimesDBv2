import {useState, useEffect} from 'react';
import Header from './Components/Header/index';
import Sidebar from './Components/Sidebar/index';
import MainContent from './Components/MainContent/index';

function App() {
  const [animeList, SetAnimeList ] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  const getTopAnimes = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    setTopAnime(temp.top.slice(0,5));
  }

  const HandleSearch = e => {
    e.preventDefault();

  FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res => res.json());
 console.log(temp.results);
    SetAnimeList(temp.results);
   

  }

  useEffect(()=> {
    getTopAnimes();
    console.log("Top Anime");
   
  },[]);

 console.log(topAnime);

  return (
    <div className="App">
      <Header></Header>

     

    <div className='content-wrap'>
      <Sidebar topAnime={topAnime}></Sidebar>
    <MainContent
    HandleSearch={HandleSearch}
    search={search}
    SetSearch={SetSearch}
    animeList={animeList}
    ></MainContent>
    </div>



    </div>
  );
}

export default App;
