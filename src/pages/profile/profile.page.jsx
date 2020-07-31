import React,{Component} from 'react';
import './profile.styles.scss';
import {connect} from 'react-redux';
import {chooseFile} from '../../store/action/user.action';
import firebase,{user,storageRef} from '../../firebase/firebase.utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';


class Profile extends Component{
  constructor(){
      super();
      this.state={
          progress: 0
      }

  }
    handleFile = (event) =>{
      if(event.target.files[0]){  
          this.props.chooseFile(event.target.files[0])
      }
    }
    handleUpload = () =>{
        // storageRef.child(`images/${props.loggedUser.id}/${props.file.name}`).put(props.file).then(snap=> {
        //     storageRef.child(snap.metadata.fullPath).getDownloadURL().then(url=>
        //         {
        //             user.doc(props.loggedUser.id).update({
        //                 profileImage: url,
        //                 profileImagePath: snap.metadata.fullPath
        //                 })
        //         console.log("image", url)}
        //     )
        //     console.log(snap)})
        var uploadTask = storageRef.child(`images/${this.props.loggedUser.id}/${this.props.file.name}`).put(this.props.file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      snapshot => {
        
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
            progress: progress
        })
        
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
            default:
                break;
        }
      }, error=> {
    
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
            alert("You are not Authorized!!!")
          // User doesn't have permission to access the object
          break;
    
        case 'storage/canceled':
            alert("upload was Cancelled!!!")
          // User canceled the upload
          break;

          default:
              break;
    
    
        case 'storage/unknown':
            alert("upload failed!!! Please Try Again")
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, () =>{
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=> {
        user.doc(this.props.loggedUser.id).update({
                 photoURL: downloadURL,
                profileImagePath: uploadTask.snapshot.metadata.fullPath
                
         })
         this.setState({
             progress: 0
         })
      }).then(
          
        this.props.chooseFile(null)
      )
    });
  
    
        
    }



   render(){
    return(
        <div className="profile-page">
            {
                this.props.loggedUser?
            <div className="user-field">
                <div className="user-upload">
                    <div className="user-image" style={
                {
                    backgroundColor: `${this.props.loggedUser.color}`
                }
            }>
                {
                    this.props.loggedUser.photoURL?
                    <img src={this.props.loggedUser.photoURL} alt="profile"/>
                    :
                    <h1>{this.props.loggedUser.displayName.charAt(0)}</h1>}
                    <div className="choose-field">
                    
                    <label><FontAwesomeIcon icon={faCamera}/>
                    <input type="file" onChange={this.handleFile} id="file-upload"/>
                    </label>
                    </div>
                
            </div>
            
            {
                this.props.file?
                <div className="upload-buttons">
                    {this.state.progress>0?
                    <div className="progress-field">
                    <span>{Math.floor(this.state.progress)}%</span>
                    <div className="progress-box">
                        
                        <div className="progress-bar" style={
                            {
                                width: `${Math.floor(this.state.progress)}%`
                            }
                        }></div>

                    </div>
                    </div>
                         :
                        null
                    }
                 <button onClick={this.handleUpload}>upload</button>
                 </div>
                 :
                 null
             }
               
            </div>
           
                
            
            <div className="user-details">
            
            <div className="user-name"><span>{this.props.loggedUser.displayName}</span></div>
            <div className="joined-date"><span>Joined Date: {this.props.loggedUser.date.toDate().toDateString()}</span></div>
            </div>
            </div>
            :
            null
            }
            </div>
        

    )
   } 
}

const mapStateToProps = state =>({
        loggedUser: state.user.loggedUser,
        file: state.user.file
        
    })
    const mapDispatchToProps = dispatch =>({
        chooseFile : (file) => dispatch(chooseFile(file))
    })

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

