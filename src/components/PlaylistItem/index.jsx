import * as S from '../mainCenterblock/styles'
import { useSelector } from "react-redux";
import { authSelector } from "../../store/selectors/auth"
import iconSprite from "../../img/icon/sprite.svg";
import { useThemeContext } from "../../context/theme";
import { useLikeTrackMutation,useUnLikeTrackMutation } from "../../services/tracks";
export function PlaylistItem ({loading,playTrack,trackUrl,stared_user,id,name,author,album,duration_in_seconds,user_id,token}){
   const {theme} = useThemeContext()


   function handleMouseEnter(event,id) {
      let imgIconNote = document.querySelector(`.imgIconNote-${id}`)
      let imgPlayStop = document.querySelector(`.imgPlayStop-${id}`)
      imgIconNote.style.display = 'none'
      imgPlayStop.style.display = 'block'
   }
   function handleMouseLeave(event,id) {
      let imgIconNote = document.querySelector(`.imgIconNote-${id}`)
      let imgPlayStop = document.querySelector(`.imgPlayStop-${id}`)
      imgIconNote.style.display = 'block'
      imgPlayStop.style.display = 'none'
   }
 
   
   const [LikeTrack, {data:getLikeTrackData}]  = useLikeTrackMutation();
   const [UnLikeTrack, {data:getUnLikeTrackData}]  = useUnLikeTrackMutation();
   const auth_data = useSelector(authSelector);
      
   let seconds = duration_in_seconds % 60
   function countDigits(n) {
      for(var i = 0; n > 1; i++) {
         n /= 10;
      }
      return i;
   }
   let secondsConvert = countDigits(seconds) === 2 ? seconds : '0' + seconds 
   function handleToggleLike(id) {
      LikeTrack({id, authorization: `${token}`})
   }
   function handleToggUnleLike(id) {
      UnLikeTrack({id, authorization: `${token}`})
   }
   let isLiked
   console.log(stared_user);
   if(stared_user !== undefined){
      for (let i = 0; i < stared_user.length; i++) {
         if (stared_user[i].id === user_id) {
            isLiked=true
            break;
         }else{
            isLiked=false
         }
         
      }

   }
 
   return (
      <S.PlaylistItem id={id}  onMouseEnter={(event) => handleMouseEnter(event,id)} onMouseLeave={(event) =>handleMouseLeave(event,id)}>
          <S.PlaylistTrack >
              <S.TrackTitle >
                  <S.TrackTitleImage onClick={() =>playTrack(trackUrl) } style={{background:theme.backgroundTrack}}>
                      <S.TrackTitleSvg  alt="music">
                          <use style={{display:'block'}} className={'imgIconNote-'+ id} href={loading ? (<div/>) : (theme.color === '#fff' ? iconSprite + '#icon-note' : iconSprite + '#icon-note-light')}></use>
                          <use style={{display:'none'}} className={'imgPlayStop-'+ id} href={loading ? (<div/>) : (theme.color === '#fff' ? iconSprite + '#icon-play-dark' : iconSprite + '#icon-play-light')}></use>
                      </S.TrackTitleSvg>
                  </S.TrackTitleImage>
                  <div>
                      <S.TrackTitleLink style={{color:theme.color}}>{loading ? (<S.NameIdLoad/>) : name }</S.TrackTitleLink>
                  </div>
              </S.TrackTitle>
              <S.TrackAuthor >
                  <S.TrackAuthorLink style={{color:theme.color}}  >{loading ? (<S.AuthorLoad />) : author }</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum >
                  <S.TrackAlbumLink style={{color:theme.color}}  >{loading ? (<S.AlbumLoad />) : album }</S.TrackAlbumLink>
              </S.TrackAlbum>
              <div >
                  <S.TrackTimeSvg alt="time" onClick={isLiked ?  () => handleToggUnleLike(id): () => handleToggleLike(id)}>
                      <use role="svgHeart" data-type='heart' style={{stroke: isLiked ? 'red':'#696969',fill: isLiked ? 'red':'transparent'}} href={iconSprite + '#icon-like'} ></use>
                  </S.TrackTimeSvg>
                  <S.TrackTimeText >{loading ? (<div/>) :   `${Math.floor(duration_in_seconds / 60)}:${secondsConvert}` }</S.TrackTimeText>
              </div>
          </S.PlaylistTrack>
      </S.PlaylistItem>
   );
}