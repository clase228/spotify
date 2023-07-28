
import iconSprite from "../../img/icon/sprite.svg";
import * as S from './styles'
import { useState, useRef,useEffect } from "react";
import { useThemeContext } from "../../context/theme";

function Bar({trackUrl,playTrackNext,playTrackPrev,isNoTrack}){
   const [isPlay, setIsplay] = useState(false);
   const [isRepeat, setIsRepeat] = useState(false);
   const [isShuffle, setIsShuffle] = useState(false);
   
   const audioRef = useRef(null)
   const currentTimeAudio = useRef(null)
   const hoverTimeAudio = useRef(null)
   let currentTimeInterval;
   clearInterval(currentTimeInterval)
   useEffect(()=>{
      playFunc()
   },[trackUrl])
 
   function playFunc(params) {
      setIsplay(true)
        audioRef.current.play()
         currentTimeInterval = setInterval(() => {
            currentTimeAudio.current.style.width = audioRef.current.currentTime / audioRef.current.duration * 100 + '%'

            if (audioRef.current.currentTime === audioRef.current.duration && isRepeat === true  && isShuffle === false) {
               audioRef.current.pause()
               audioRef.current.currentTime = 0;
               audioRef.current.play()
            }else if (audioRef.current.currentTime === audioRef.current.duration && isRepeat === false && isShuffle === false){
               handleNextTrack()
            }
         }, 1);    
   }
   function handleNextTrack(){
      whitchTrackPlay('next')
   }
   function handlePrevTrack(){
      whitchTrackPlay('prev')
   }
   function whitchTrackPlay(nextOrPrev) {
      if (isShuffle ===false) {
         nextOrPrev=== 'next' ?playTrackNext(trackUrl.id,'next'):playTrackPrev(trackUrl.id,'prev')
      }else if(isShuffle ===true) {
         nextOrPrev=== 'next' ?playTrackNext(trackUrl.id,'random'):playTrackPrev(trackUrl.id,'random')
      }
   }
   const handelOnOffTrack = () =>{
      if(isPlay === false){
         playFunc()
      }else{
         setIsplay(false)
         clearInterval(currentTimeInterval)
         audioRef.current.pause()
      }
   }
   function changeVolume(volume) {
      audioRef.current.volume = volume.target.value
   }
   const {theme} = useThemeContext()
   function handleHoverBar(event) {
      let seconds = (((event.pageX / window.innerWidth * 100) / 100) * audioRef.current.duration) % 60
      function countDigits(n) {
         for(var i = 0; n > 1; i++) {
            n /= 10;
         }
         return i;
      }
      let secondsConvert = countDigits(seconds) === 2 ? Math.round(seconds) : '0' + Math.round(seconds) 
      hoverTimeAudio.current.textContent =`${Math.floor((((event.pageX / window.innerWidth * 100) / 100) * audioRef.current.duration) / 60)}:${secondsConvert}`
      hoverTimeAudio.current.style.left = event.pageX - 24 + 'px'
      hoverTimeAudio.current.style.display = 'flex'
       
   }
   function handleUnHoverBar(event) {
      hoverTimeAudio.current.style.display = 'none'
   }
   function changeSec(event) {
      audioRef.current.currentTime = ((event.pageX / window.innerWidth * 100) / 100) * audioRef.current.duration
   }
 return (
   <S.Bar style={{background: theme.background},isNoTrack?{display:'block'}:{display:'none'}}>
                <S.BarContent >
                    <S.BarPlayerProgress onMouseLeave={(e)=>handleUnHoverBar(e)}  onMouseMove={(e)=>handleHoverBar(e)} onClick={(e)=>changeSec(e)} style={{background: theme.progresBarElement}}>
                        <S.BarTrackSec ref={hoverTimeAudio}>0:14</S.BarTrackSec>
                        <S.BarPlayerProgressBar  style={{background: '#B672FF'}} ref={currentTimeAudio}/>
                    </S.BarPlayerProgress>
                    <S.BarPlayerBlock >
                        <S.BarPlayer >
                            <S.PlayerControls className="player__controls">
                            <S.PlayerBtnPrev>
                                <S.PlayerBtnPrevSvg alt='prev' onClick={()=>handlePrevTrack()}>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-prev-dark'  :iconSprite + '#icon-prev-light'} ></use>
                                </S.PlayerBtnPrevSvg>
                            </S.PlayerBtnPrev>
                            <S.PlayerBtnPlay>
                                <S.PlayerBtnPlaySvg alt={isPlay ? 'pause' : 'play'} onClick={handelOnOffTrack}>
                                    <use href={(isPlay ? theme.color === '#fff' ? iconSprite + '#icon-pause-dark'  :iconSprite + '#icon-pause-light': theme.color === '#fff' ? iconSprite + '#icon-play-dark'  :iconSprite + '#icon-play-light')} ></use>
                                </S.PlayerBtnPlaySvg>
                            </S.PlayerBtnPlay>
                            <S.PlayerBtnNext>
                                <S.PlayerBtnNextSvg alt='next' onClick={()=>handleNextTrack()}>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-next-dark'  :iconSprite + '#icon-next-light'} ></use>
                                </S.PlayerBtnNextSvg>
                            </S.PlayerBtnNext>
                            <S.PlayerBtnRepeat>
                                <S.PlayerBtnRepeatSvg style={isRepeat?{stroke:"#AD61FF"}:{stroke:"#696969"}} alt='repeat' onClick={isRepeat? ()=>setIsRepeat(false):()=>setIsRepeat(true)}>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-repeat-dark'  :iconSprite + '#icon-repeat-light'} ></use>
                                </S.PlayerBtnRepeatSvg>
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle>
                                <S.PlayerBtnShuffleSvg style={isShuffle?{stroke:"#AD61FF"}:{stroke:"#696969"}} alt='shuffle' onClick={isShuffle? ()=>setIsShuffle(false):()=>setIsShuffle(true)}>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-shuffle-dark'  :iconSprite + '#icon-shuffle-light'} ></use>
                                </S.PlayerBtnShuffleSvg>
                            </S.PlayerBtnShuffle>
                            </S.PlayerControls>
                            
                            <S.PlayerTrackPlay >
                                <S.TrackPlayContain >
                                    <S.TrackPlayImage>
                                        <S.TrackPlaySvg alt="music">
                                            <use href={iconSprite + '#icon-note'}  ></use>
                                        </S.TrackPlaySvg>
                                    </S.TrackPlayImage>
                                    <S.TrackPlayAuthor >
                                        <S.TrackPlayAuthorLink style={{color:theme.color}}  href="http://">  {trackUrl.name}</S.TrackPlayAuthorLink>
                                    </S.TrackPlayAuthor>
                                    <S.TrackPlayAlbum >
                                        <S.TrackPlayAlbumLink style={{color:theme.color}}  href="http://">{trackUrl.author}</S.TrackPlayAlbumLink>
                                    </S.TrackPlayAlbum>
                                </S.TrackPlayContain>

                                <S.TrackPlayLikeDis>
                                <S.trackPlayLike>
                                     <S.trackPlayLikeSvg alt='like'>
                                         <use href={iconSprite + '#icon-like'}></use>
                                     </S.trackPlayLikeSvg>
                                 </S.trackPlayLike>
                                <S.trackPlayDislike>
                                     <S.trackPlayDislikeSvg alt='dislike'>
                                         <use href={iconSprite + '#icon-dislike'}></use>
                                     </S.trackPlayDislikeSvg>
                                 </S.trackPlayDislike>
                                </S.TrackPlayLikeDis>
                            </S.PlayerTrackPlay>
                        </S.BarPlayer>
                        <S.BarVolume className="bar__volume-block volume">
                           <S.VolumeContent className="volume__content">
                                <S.VolumeImage className="volume__image">
                                    <S.VolumeSvg alt="volume">
                                        <use href={theme.color === '#fff' ? iconSprite + '#icon-volume-dark'  :iconSprite + '#icon-volume-light' } ></use>
                                    </S.VolumeSvg>
                                </S.VolumeImage>
                                <S.VolumeProgress className=" _btn">
                                    <S.VolumeProgressLine min='0' max='1' step='0.01' onInput={(e) =>changeVolume(e)} className=" _btn" type="range" name="range"/>
                                </S.VolumeProgress>
                                
                           </S.VolumeContent>
                        </S.BarVolume>
                    </S.BarPlayerBlock>
                </S.BarContent>
                <S.HiddenAudio controls  src={trackUrl.track_file} ref={audioRef}/>
            </S.Bar>
 )
}
export default Bar