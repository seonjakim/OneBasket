import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/index';

const Posting = () => {
  const product = useSelector((state: State) => state.items);
  const history = useHistory();
  const dispatch = useDispatch();
  const { addItems } = bindActionCreators(actionCreators, dispatch);
  const inputFileRef = React.useRef(null);

  const [postContent, setPostContent] = React.useState({
    title: '',
    location: '',
    content: '',
  });
  const [files, setFile] = React.useState(null);
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
      setFile({
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
        image: files?.previewUrl,
        ...postContent,
      };
      addItems([postInput, ...product.item]);
      history.push('/share');
    }
  };

  return (
    <div className="post-container">
      <div>
        물품보러가기
        <button onClick={submit}>Done</button>
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
        {files && (
          <img
            className="file-upload"
            src={files?.previewUrl}
            alt={files?.file.name}
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
