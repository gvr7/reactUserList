import './index.css'


const UserProfile = (props) =>{
  const {userData} = props
  const {name,url,des} = userData
  return(
    
   
      <div className = "check">
            <div className = "check1 mr-3">
              <img src = {url} className = 'avatar'  alt = 'avatar'/>
            </div>
      
            <div className='mt-4 check3'>
              <span className = "spanHeading">{name}</span> <br />
              <span >{des}</span>
            </div>
      </div>
            
      

  )
}

export default UserProfile