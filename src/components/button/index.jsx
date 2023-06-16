
import * as S from './style';
export const Button = ({className,children, $primary}) =>{
   return <S.Button className={className} $primary={$primary}>{children}</S.Button>
}