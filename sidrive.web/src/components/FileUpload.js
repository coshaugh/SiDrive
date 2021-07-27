import React from "react";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFiles: [],
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFiles: event.target.files || [],
      loaded: 0,
    });
  };

  uploadFile = (event) => {
    event.preventDefault();

    const data = new FormData();
    this.state.selectedFiles.forEach((file, idx) => {
      data.append(`file${idx}`, file);
    });

    this.props.fileEndpointRequest(data).then((res) => {
      console.alert(res);
    });
  };

  render() {
    return (
      <div>
        <h3>Upload File</h3>

        <form onChange={this.onChangeHandler} onSubmit={this.uploadFile}>
          <div className="form-group">
            <label>Select files</label>
            <br />
            <input type="file" id="myFile" name="filename" ref={this.fileRef} multiple/>
            <button
              type="submit"
              disabled={this.state.selectedFiles.length === 0}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FileUpload;
