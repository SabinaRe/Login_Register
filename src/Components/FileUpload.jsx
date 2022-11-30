import axios from "axios";
import { useState } from "react";
import "./login.css"
export default function FileUpload() {

  const [file, setFile] = useState("null");

  //storation of file through useState
  const handleFile = (e)=>{
    setFile(e.target.files[0]);
    console.log(e.target.files[0])
   }

   //handling of file API through Axios
  const handleAPI = (e)=>{
    const url = ''
    const formData = new FormData()
    formData.append('file', file)
   
    axios.post(url, formData).then(res=>{
      console.log(res)
    })
  }

  return (
    <div className="fileform">
      <form className="uploadForm">
        <label style={{ paddingLeft:"30px"}}>Select a File</label>
        <input type="file" name="name" onChange={handleFile} /> <br />
        <button  style={{margin:"16px"}} onClick={handleAPI}>UPLOAD</button>
      </form>
    </div>
  )
}
