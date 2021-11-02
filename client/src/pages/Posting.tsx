import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/index';

const Posting = () => {
  const groceries = useSelector((state: State) => state.groceries);
  const history = useHistory();
  const dispatch = useDispatch();
  const { addGrocery } = bindActionCreators(actionCreators, dispatch);
  const inputFileRef = React.useRef(null);

  const [postContent, setPostContent] = React.useState({
    title: '',
    location: '',
    content: '',
  });
  const [uploadFile, setUploadeFile] = React.useState(null);
  const [submitClicked, setSubmitClicked] = React.useState(false);

  const inputOnChange = (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    setPostContent({
      ...postContent,
      [id]: event.target.value,
    });
  };

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setUploadeFile({
        file,
        previewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const uploadFileOnClick = (event) => {
    event.preventDefault();
    inputFileRef.current.click();
  };

  const submit = () => {
    if (!submitClicked) {
      setSubmitClicked(true);
      const postInput = {
        image: uploadFile?.previewUrl,
        ...postContent,
      };
      addGrocery([postInput, ...groceries.item]);
      history.push('/share');
    }
  };

  return (
    <div className="post-container">
      <div className="sub-nav">
        <h2>물품보러가기</h2>
        <button className="done-button" onClick={submit}>
          Done
        </button>
      </div>
      <div className="upload">
        <div onClick={uploadFileOnClick} className="file-upload">
          upload
        </div>
        <input
          ref={inputFileRef}
          id="input-file"
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={handleFileOnChange}
        />
        {uploadFile && (
          <img
            className="file-upload"
            src={uploadFile?.previewUrl}
            alt={uploadFile?.file.name}
          />
        )}
      </div>
      <div onChange={inputOnChange}>
        <input
          className="input"
          type="text"
          placeholder="Title"
          data-id="title"
        />
        <input
          className="input"
          type="text"
          placeholder="Address"
          data-id="location"
        />
        <textarea
          className="post-content"
          placeholder="Describe your item in as much detail as you can."
          data-id="content"
        ></textarea>
      </div>
    </div>
  );
};

export default Posting;
