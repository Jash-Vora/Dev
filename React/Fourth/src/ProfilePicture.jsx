
function ProfilePicture(){
    const imageUrl = './src/images/Profile.jpg'
    const handleClick  = (e)=> e.target.style.display = "none";
    return(
        <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="profile picture" />
    )
}
export default ProfilePicture;