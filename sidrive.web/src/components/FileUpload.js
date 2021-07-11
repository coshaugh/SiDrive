import React from "react";

// todo: make this handle multiple files
class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  uploadFile = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", this.state.selectedFile);

    this.props.fileEndpointRequest(data).then((res) => {
      console.alert(res);
    });
  };

  getLabel = () => {
    var baseLabel = "Choose a file to upload.";
    var detailLabel = !!this.props.getDetailMsg
      ? " " + this.props.getDetailMsg()
      : "";

    return `${baseLabel}${detailLabel}`;
  };

  render() {
    return (
      <div>
        <h3>Upload File</h3>

        <form
          onChange={this.onChangeHandler}
          onSubmit={this.uploadFile}
        >
          <div className="form-group">
            <label>{this.getLabel()}</label>
            <br />
            <input type="file" id="myFile" name="filename" ref={this.fileRef} />
            <button type="submit" disabled={!this.state.selectedFile}>
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FileUpload;
