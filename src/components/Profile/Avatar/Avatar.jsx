import  style from './Avatar.module.css'
export const Avatar = (data) => {
  const {userName, imgURL}=data;
  return (
    <div className={style.avatarImg}>
      <img  className={style.img} src={imgURL} alt={userName}/>
    </div>
  )
}
