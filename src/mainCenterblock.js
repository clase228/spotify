import  { useState,useEffect } from 'react';
import iconSprite from "./img/icon/sprite.svg";
function PlaylistItem (props){
   return (
      <div className="playlist__item">
          <div className="playlist__track track">
              <div className="track__title">
                  <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                          <use href={iconSprite + '#icon-note'}></use>
                      </svg>
                  </div>
                  <div className="track__title-text">
                      <a className="track__title-link" href="http://">{props.nameid} <span className="track__title-span">{props.title}</span></a>
                  </div>
              </div>
              <div className="track__author">
                  <a className="track__author-link" href="http://">{props.author}</a>
              </div>
              <div className="track__album">
                  <a className="track__album-link" href="http://">{props.album}</a>
              </div>
              <div className="track__time">
                  <svg className="track__time-svg" alt="time">
                      <use href={iconSprite + '#icon-like'}></use>
                  </svg>
                  <span className="track__time-text">{props.time}</span>
              </div>
          </div>
      </div>
   );
}
window.onclick = function(e) {
   function clearActiveFilter() {
      document.querySelectorAll('.filter__button').forEach((e) =>{
         e.classList.remove('active');
      })
   }
   function hideDropdown() {
      if (document.querySelector('.dropdown__wrapper.active')) {
         document.querySelector('.dropdown__wrapper.active').classList.remove('active');
      }
   }
   if (e.target.classList.contains('filter__button') && e.target.classList.contains('active')) {
      clearActiveFilter()
      hideDropdown()
   }else if (e.target.classList.contains('filter__button')) {
      clearActiveFilter()
      e.target.classList.add('active');
      hideDropdown()
      e.target.nextSibling.classList.add('active');
   }else if (!e.target.classList.contains('filter__button') && !e.target.classList.contains('dropdown__wrapper') && !e.target.classList.contains('dropdown__menu') && !e.target.classList.contains('dropdown__list')){
      clearActiveFilter()
      hideDropdown()
   }
 }
 
 function MainCenterblock() {
 
function Test(params) {
   return (
      <div>
         <PlaylistItem nameid="Guilt" author="Nero" album="Welcome Reality" time="4:44" />
         <PlaylistItem nameid="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
         <PlaylistItem nameid="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
         <PlaylistItem nameid="Non Stop" author="Стоункат, Psychopath" album="Non Stop" time="4:12" title="(Remix)" />
         <PlaylistItem nameid="Run Run" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" title="(feat. AR/CO)" />
         <PlaylistItem nameid="Eyes on Fire" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" title="(Zeds Dead Remix)" />
         <PlaylistItem nameid="Mucho Bien" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" title="(Hi Profile Remix)" />
         <PlaylistItem nameid="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" title="" />
         <PlaylistItem nameid="How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32" title="" />
         <PlaylistItem nameid="Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36" title="" />
         <PlaylistItem nameid="" author="" album="" time="" title="" />
      </div>
   )
}   
function Test2(params) {
   return (
      <div className='block__content__playlist'>
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
         <PlaylistItem nameid={<div className="nameId__load"></div>} author={<div className="author__load"></div>} album={<div className="album__load"></div>}  />
        
      </div>
   )
}   

const [value, setValue] = useState(0);
	const increment = () => {
		setValue(value + 1);
      if (value === 5) {
                  
      }
	};
   useEffect(() => {
		// Заводим таймер
		const timerId = setInterval(() => increment(), 1000);		

		// Данная функция вызывается при удалении компонента из DOM и при перерендере
		return () => {
			// Наводим порядок после удаления компонента или для сброса предыдущего эффекта

			clearInterval(timerId);
		};
	}, [value]);

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
                        <div className='dropdown'>
                        <div className="filter__button button-author _btn-text" >исполнителю</div>
                        <div className='dropdown__wrapper' >
                           <div className='dropdown__menu'>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>

                           </div>
                        </div>
                        </div>
                        <div className='dropdown'>
                        <div className="filter__button button-author _btn-text" >году выпуска</div>
                        <div className='dropdown__wrapper' >
                           <div className='dropdown__menu'>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>

                           </div>
                        </div>
                        </div>
                        <div className='dropdown'>
                        <div className="filter__button button-author _btn-text" >жанру</div>
                        <div className='dropdown__wrapper' >
                           <div className='dropdown__menu'>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>
                              <div className='dropdown__list'>Michael Jackson</div>
                              <div className='dropdown__list'>Frank Sinatra</div>
                              <div className='dropdown__list'>Calvin Harris</div>
                              <div className='dropdown__list'>Zhu</div>
                              <div className='dropdown__list'>Arctic Monkeys</div>

                           </div>
                        </div>
                        </div>
                         
                        
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
                        <Test2 />
                        </div>                        
                    </div>
                </div>
   );
 }
 
 export default MainCenterblock;