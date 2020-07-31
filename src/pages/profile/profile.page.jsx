import React from 'react';
import './profile.styles.scss';
import {connect} from 'react-redux';
import {chooseFile} from '../../store/action/user.action';
import {user,storageRef} from '../../firebase/firebase.utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

const Profile = (props) =>{
  
    const handleFile = (event) =>{
        
        
      if(event.target.files[0]){
         
          props.chooseFile(event.target.files[0])
        
     
        
      }
    }
    const handleUpload = () =>{
        storageRef.child(`images/${props.loggedUser.id}/${props.file.name}`).put(props.file).then(snap=> {
            storageRef.child(snap.metadata.fullPath).getDownloadURL().then(url=>
                {
                    user.doc(props.loggedUser.id).update({
                        profileImage: url,
                        profileImagePath: snap.metadata.fullPath
                        })
                console.log("image", url)}
            )
            console.log(snap)})
            props.chooseFile(null)
        
    }



    return(
        <div className="profile-page">
            {
                props.loggedUser?
            <div className="user-field">
                <div className="user-upload">
                    <div className="user-image" style={
                {
                    backgroundColor: `${props.loggedUser.color}`
                }
            }>
                {
                    props.loggedUser.profileImage?
                    <img src={props.loggedUser.profileImage} alt="profile"/>
                    :
                    <h1>{props.loggedUser.displayName.charAt(0)}</h1>}
                    <div className="choose-field">
                    <input type="file" onChange={handleFile} id="file-upload"/>
                    <label for="file-upload"><FontAwesomeIcon icon={faCamera}/></label>
                    </div>
                
            </div>
            
            {
                props.file?
                <div className="upload-buttons">
                 <button onClick={handleUpload}>upload</button>
                 </div>
                 :
                 null
             }
               
            </div>
           
                
            
            <div className="user-details">
            
            <div className="user-name"><span>{props.loggedUser.displayName}</span></div>
            <div className="joined-date"><span>Joined Date: {props.loggedUser.date.toDate().toDateString()}</span></div>
            </div>
            </div>
            :
            null
            }
            </div>
        

    )
}

const mapStateToProps = state =>({
        loggedUser: state.user.loggedUser,
        file: state.user.file
        
    })
    const mapDispatchToProps = dispatch =>({
        chooseFile : (file) => dispatch(chooseFile(file))
    })

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

