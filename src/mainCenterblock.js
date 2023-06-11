import Skeleton from 'react-loading-skeleton';
import iconSprite from "./img/icon/sprite.svg";
import  { useState } from 'react';
 function MainCenterblock(props) {
   function PlaylistItem (prop){
      return (
         <div className="playlist__item">
             <div className="playlist__track track">
                 <div className="track__title">
                     <div className="track__title-image">
                         <svg className="track__title-svg" alt="music">
                             <use href={props.loading ? (<Skeleton  />) : (iconSprite + '#icon-note')}></use>
                         </svg>
                     </div>
                     <div className="track__title-text">
                         <a className="track__title-link" href="http://">  {props.loading ? (<Skeleton className='nameId__load'/>) : prop.nameid }<span className="track__title-span">{props.loading ? (<Skeleton className=''/>) : prop.title }</span></a>
                     </div>
                 </div>
                 <div className="track__author">
                     <a className="track__author-link" href="http://">{props.loading ? (<Skeleton className='author__load'/>) : prop.author }</a>
                 </div>
                 <div className="track__album">
                     <a className="track__album-link" href="http://">{props.loading ? (<Skeleton className='album__load'/>) : prop.album }</a>
                 </div>
                 <div className="track__time">
                     <svg className="track__time-svg" alt="time">
                         <use href={iconSprite + '#icon-like'}></use>
                     </svg>
                     <span className="track__time-text">{props.loading ? (<Skeleton className='time__load'/>) : prop.time }</span>
                 </div>
             </div>
         </div>
      );
   }

// По умолчанию у нас ничего не видно
const [visibleFilter, setVisibleFilter] = useState(null);

const toggleVisibleFilter = (filter) => {
  // если состояние visibleFilter равен значению filter
  // это значит, что мы нажали на тот же фильтр, скрываем блок
  setVisibleFilter(visibleFilter === filter ? null : filter);
};

function Dropdown(props) {
   return(
      <div className='dropdown'>
         <div className={visibleFilter === props.id ? 'filter__button button-author _btn-text active' : 'filter__button button-author _btn-text'} onClick={() => toggleVisibleFilter(props.id)} >{props.name}</div>
         {visibleFilter === props.id && 
         <div className='dropdown__wrapper' >
         <div className='dropdown__menu'>
            {props.content.forEach(el => {
               <div className='dropdown__list'>{el}Michael Jackson</div>
            })
         }
            <div className='dropdown__list'>Michael Jackson</div>
            <div className='dropdown__list'>Frank Sinatra</div>
            <div className='dropdown__list'>Calvin Harris</div>
            <div className='dropdown__list'>Zhu</div>
            <div className='dropdown__list'>Arctic Monkeys</div>
         </div>
      </div>} 
   </div>
   )
}
   return (
      <div className="main__centerblock centerblock">
                    <div className="centerblock__search search">
                        <svg className="search__svg">
                            <use href={iconSprite + '#icon-search'}></use>
                        </svg>
                        <input className="search__text" type="search" placeholder="Поиск" name="search" />
                    </div>
                    <h2 className="centerblock__h2">Треки</h2>
                    <div className="centerblock__filter filter" >
                        <div className="filter__title">Искать по:</div>
                        <Dropdown id="nameid" name="Исполнителю" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                        <Dropdown id="year" name="Году выпуска" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                        <Dropdown id="genre" name="Жанру" content={['Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu', 'Michael Jackson', 'Frank Sinatra', 'Calvin Harris', 'Arctic Monkeys', 'Zhu']}/>
                    </div>

                    <div className="centerblock__content">
                        <div className="content__title playlist-title">
                            <div className="playlist-title__col col01">Трек</div>
                            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                            <div className="playlist-title__col col03">АЛЬБОМ</div>
                            <div className="playlist-title__col col04">
                              
                                <svg className="playlist-title__svg" alt="time">
                                    <use href={iconSprite + '#icon-watch'}></use>
                                </svg>
                            </div>
                        </div>
                        
                      
   
 
                        <div className="content__playlist playlist">
                        <PlaylistItem nameid=" Guilt" author="Nero" album="Welcome Reality" time="4:44" />
                        <PlaylistItem nameid=" Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
                        <PlaylistItem nameid=" I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
                        <PlaylistItem nameid=" Non Stop" author="Стоункат, Psychopath" album="Non Stop" time="4:12" title="(Remix)" />
                        <PlaylistItem nameid=" Run Run" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" title="(feat. AR/CO)" />
                        <PlaylistItem nameid=" Eyes on Fire" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" title="(Zeds Dead Remix)" />
                        <PlaylistItem nameid=" Mucho Bien" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" title="(Hi Profile Remix)" />
                        <PlaylistItem nameid=" Knives n Cherries" author="minthaze" album="Captivating" time="1:48" title="" />
                        <PlaylistItem nameid=" How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32" title="" />
                        <PlaylistItem nameid=" Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36" title="" />
                        <PlaylistItem nameid=" " author="" album="" time="" title="" />
                        </div>                        
                    </div>
                </div>
   );
 }
 
 export default MainCenterblock;