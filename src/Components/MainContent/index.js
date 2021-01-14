import React from 'react'
import AnimeCard from '../AnimeCard/index';

const MainContent = (props) => {
    return (
        <main>
            <div className='main-head'>
                <form className='search-box'
                onSubmit={props.HandleSearch}
                >
                    <input type='search' 
                    placeholder="Pesquise um anime, seu otaku fedido..." 
                    required
                    value={props.search}
                    onChange={e=> props.SetSearch(e.target.value)}>
                        
                    </input>
                </form>
            </div>
            <div className='anime-list'>
                {props.animeList.map(anime =>(
                    <AnimeCard
                    anime={anime}
                    key={anime.mal_id}
                    
                    >

                    </AnimeCard>
                ) )}

            </div>
        </main>
        )
}

export default MainContent
