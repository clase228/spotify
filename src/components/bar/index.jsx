
import iconSprite from "../../img/icon/sprite.svg";
import * as S from './styles'
import { useState, useRef,useEffect } from "react";
import { useThemeContext } from "../../context/theme";

function Bar({trackUrl,Play}){
   const [isPlay,setPlay] = useState(false)
   const audioRef = useRef(null)
   const currentTimeAudio = useRef(null)
   let currentTimeInterval;
   clearInterval(currentTimeInterval)
   const handelOnOffTrack = () =>{
      if(!isPlay){
         setPlay(true)
        console.log(audioRef.current);
        audioRef.current.play()
         currentTimeInterval = setInterval(() => {
            currentTimeAudio.current.style.width = audioRef.current.currentTime / audioRef.current.duration * 100 + '%'
         }, 1);
      }else{
         clearInterval(currentTimeInterval)
         setPlay(false)
         audioRef.current.pause()
      }
   }
   useEffect(()=>{
      console.log(trackUrl);
   },[trackUrl])
  
   const {theme} = useThemeContext()
 return (
   <S.Bar style={{background: theme.background}}>
                <S.BarContent >
                    <S.BarPlayerProgress style={{background: theme.progresBarElement}}>
                        <S.BarPlayerProgressBar style={{background: theme.progresBar}} ref={currentTimeAudio}/>
                    </S.BarPlayerProgress>
                    <S.BarPlayerBlock >
                        <S.BarPlayer >
                            <S.PlayerControls className="player__controls">
                            <S.PlayerBtnPrev>
                                <S.PlayerBtnPrevSvg alt='prev'>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-prev-dark'  :iconSprite + '#icon-prev-light'} ></use>
                                </S.PlayerBtnPrevSvg>
                            </S.PlayerBtnPrev>
                            <S.PlayerBtnPlay>
                                <S.PlayerBtnPlaySvg alt={isPlay ? 'pause' : 'play'} onClick={handelOnOffTrack}>
                                    <use href={(isPlay ? theme.color === '#fff' ? iconSprite + '#icon-pause-dark'  :iconSprite + '#icon-pause-light': theme.color === '#fff' ? iconSprite + '#icon-play-dark'  :iconSprite + '#icon-play-light')} ></use>
                                </S.PlayerBtnPlaySvg>
                            </S.PlayerBtnPlay>
                            <S.PlayerBtnNext>
                                <S.PlayerBtnNextSvg alt='next'>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-next-dark'  :iconSprite + '#icon-next-light'} ></use>
                                </S.PlayerBtnNextSvg>
                            </S.PlayerBtnNext>
                            <S.PlayerBtnRepeat>
                                <S.PlayerBtnRepeatSvg alt='repeat'>
                                    <use href={theme.color === '#fff' ? iconSprite + '#icon-repeat-dark'  :iconSprite + '#icon-repeat-light'} ></use>
                                </S.PlayerBtnRepeatSvg>
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle>
                                <S.PlayerBtnShuffleSvg alt='shuffle'>
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
                                        <S.TrackPlayAuthorLink style={{color:theme.color}}  href="http://">  {'Ты та...'}</S.TrackPlayAuthorLink>
                                    </S.TrackPlayAuthor>
                                    <S.TrackPlayAlbum >
                                        <S.TrackPlayAlbumLink style={{color:theme.color}}  href="http://">{'Баста'}</S.TrackPlayAlbumLink>
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
                                    <S.VolumeProgressLine className=" _btn" type="range" name="range"/>
                                </S.VolumeProgress>
                                
                           </S.VolumeContent>
                        </S.BarVolume>
                    </S.BarPlayerBlock>
                </S.BarContent>
                <S.HiddenAudio controls  src={trackUrl} ref={audioRef}/>
            </S.Bar>
 )
}
export default Bar