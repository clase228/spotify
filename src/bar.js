
import Skeleton from 'react-loading-skeleton';
import iconSprite from "./img/icon/sprite.svg";
function PlayerBtn(props){
 return (
   <div className={'player__btn-' + props.type}>
       <svg className={"player__btn-" + props.type +"-svg " + props.class } alt={props.type}>
           <use href={iconSprite + '#icon-' + props.type} ></use>
       </svg>
   </div>
 )}
function LikeDis(props){
 return (
   <div className={'track-play__' + props.status + ' _btn-icon'}>
       <svg className={'track-play__' + props.status + '-svg'} alt={props.status}>
           <use href={iconSprite + '#icon-' + props.status}></use>
       </svg>
   </div>
 )}

function Bar(props){
 return (
   <div className="bar">
                <div className="bar__content">
                    <div className="bar__player-progress"></div>
                    <div className="bar__player-block">
                        <div className="bar__player player">
                            <div className="player__controls">
                              <PlayerBtn type="prev" class=""/>
                              <PlayerBtn type="play" class="_btn"/>
                              <PlayerBtn type="next" class=""/>
                              <PlayerBtn type="repeat" class="_btn-icon"/>
                              <PlayerBtn type="shuffle" class="_btn-icon"/>
                            </div>
                            
                            <div className="player__track-play track-play">
                                <div className="track-play__contain">
                                    <div className="track-play__image">
                                        <svg className="track-play__svg" alt="music">
                                            <use href={props.loading ? (<Skeleton  />) : (iconSprite + '#icon-note')}  ></use>
                                        </svg>
                                    </div>
                                    <div className="track-play__author">
                                        <a className="track-play__author-link" href="http://">  {props.loading ? (<Skeleton className='nameid_t__load' />) : ('Ты та...')}</a>
                                    </div>
                                    <div className="track-play__album">
                                        <a className="track-play__album-link" href="http://">{props.loading ? (<Skeleton className='nameid_t__load' />) : ('Баста')}</a>
                                    </div>
                                </div>

                                <div className="track-play__like-dis">
                                    <LikeDis status="like"/>
                                    <LikeDis status="dislike"/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="bar__volume-block volume">
                           <div className="volume__content">
                                <div className="volume__image">
                                    <svg className="volume__svg" alt="volume">
                                        <use href={iconSprite + '#icon-volume'} ></use>
                                    </svg>
                                </div>
                                <div className="volume__progress _btn">
                                    <input className="volume__progress-line _btn" type="range" name="range"/>
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
            </div>
 )
}
export default Bar