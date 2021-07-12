import axios from "axios";
import React, { Component } from "react";
class FileUpload extends Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    let uploadToken=localStorage.getItem("authtoken")
    console.log(".....",uploadToken)
    console.log(this.state.selectedFile);

    axios
      .post("https://apifromashu.herokuapp.com/api/upload", formData, {
        // headers: {
        //   authtoken: uploadToken ,
        // },
      })
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        //
      });
  };

  // File content to be displayed after
  // file upload is complete
  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-4" >
          <form className="w-50">
            <label> <b>Please Select File</b></label>
          <input type="file" className="mb-3 form-control" onChange={this.onFileChange} />
          <button class="btn btn-success mb-3 form-control"  onClick={this.onFileUpload}>Upload!</button>
          </form>
        </div>
       
      </div>
    );
  }
}

export default FileUpload;
