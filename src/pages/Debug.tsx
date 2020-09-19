import React, {ReactElement, useState} from "react";
// import {useMutation} from "@apollo/client";

const UPLOAD = null;
// const UPLOAD = gql``;

export const Debug = (): ReactElement => {
  // const [upload] = useMutation(UPLOAD)
  const [file, setFile] = useState(null)
  
  const handleSubmit = (e: any): void => {
    if (!file) {
      return;
    }
    
    console.log(file)
  }
  
  const handleFileChange = (e: any): void => {
    const {name, files} = e.target;
    setFile(files)
  
    // upload
  }
  
  return (
    <div>
      <section>
        <h3>파일 업로드</h3>
        <input type="file" name="fileTest" onChange={handleFileChange} multiple />
        <button onClick={handleSubmit}>전송하기</button>
      </section>
    </div>
  );
};
