
import iconSprite from "../../img/icon/sprite.svg";
import * as S from './styles'
import { useState, useRef } from "react";
import audio from '../../audio/Bobby_Marleni_-_Dropin.mp3'

function Bar(props){
   const [isPlay,setPlay] = useState(false)
   const audioRef = useRef(null)
   const currentTimeAudio = useRef(null)
   let currentTimeInterval;
   clearInterval(currentTimeInterval)
   const handelOnOffTrack = () =>{
      if(isPlay === false){
         setPlay(true)
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
   
  
   
 return (
   <S.Bar >
                <S.BarContent >
                    <S.BarPlayerProgress >
                        <S.BarPlayerProgressBar ref={currentTimeAudio}/>
                    </S.BarPlayerProgress>
                    <S.BarPlayerBlock >
                        <S.BarPlayer >
                            <S.PlayerControls className="player__controls">
                            <S.PlayerBtnPrev>
                                <S.PlayerBtnPrevSvg alt='prev'>
                                    <use href={iconSprite + '#icon-prev'} ></use>
                                </S.PlayerBtnPrevSvg>
                            </S.PlayerBtnPrev>
                            <S.PlayerBtnPlay>
                                <S.PlayerBtnPlaySvg alt={isPlay ? 'pause' : 'play'} onClick={handelOnOffTrack}>
                                    <use href={iconSprite + (isPlay ? '#icon-pause' : '#icon-play')} ></use>
                                </S.PlayerBtnPlaySvg>
                            </S.PlayerBtnPlay>
                            <S.PlayerBtnNext>
                                <S.PlayerBtnNextSvg alt='next'>
                                    <use href={iconSprite + '#icon-next'} ></use>
                                </S.PlayerBtnNextSvg>
                            </S.PlayerBtnNext>
                            <S.PlayerBtnRepeat>
                                <S.PlayerBtnRepeatSvg alt='repeat'>
                                    <use href={iconSprite + '#icon-repeat'} ></use>
                                </S.PlayerBtnRepeatSvg>
                            </S.PlayerBtnRepeat>
                            <S.PlayerBtnShuffle>
                                <S.PlayerBtnShuffleSvg alt='shuffle'>
                                    <use href={iconSprite + '#icon-shuffle'} ></use>
                                </S.PlayerBtnShuffleSvg>
                            </S.PlayerBtnShuffle>
                            </S.PlayerControls>
                            
                            <S.PlayerTrackPlay >
                                <S.TrackPlayContain >
                                    <S.TrackPlayImage>
                                        <S.TrackPlaySvg alt="music">
                                            <use href={props.loading ? (<div/>) : (iconSprite + '#icon-note')}  ></use>
                                        </S.TrackPlaySvg>
                                    </S.TrackPlayImage>
                                    <S.TrackPlayAuthor >
                                        <S.TrackPlayAuthorLink  href="http://">  {props.loading ? (<S.NameidBarLoad  />) : ('Ты та...')}</S.TrackPlayAuthorLink>
                                    </S.TrackPlayAuthor>
                                    <S.TrackPlayAlbum >
                                        <S.TrackPlayAlbumLink  href="http://">{props.loading ? (<S.NameidBarLoad  />) : ('Баста')}</S.TrackPlayAlbumLink>
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
                                        <use href={iconSprite + '#icon-volume'} ></use>
                                    </S.VolumeSvg>
                                </S.VolumeImage>
                                <S.VolumeProgress className=" _btn">
                                    <S.VolumeProgressLine className=" _btn" type="range" name="range"/>
                                </S.VolumeProgress>
                                
                           </S.VolumeContent>
                        </S.BarVolume>
                    </S.BarPlayerBlock>
                </S.BarContent>
                <S.HiddenAudio controls ref={audioRef} >
                  <source  src={audio}  type="audio/mpeg" />
                </S.HiddenAudio>
            </S.Bar>
 )
}
export default Bar