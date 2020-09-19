import React, { ChangeEvent, ReactElement, useState } from "react";
import { useMutation, gql } from "@apollo/react-hooks";

const UPLOAD = null;
// const UPLOAD = gql``;

const SINGLE_UPLOAD = gql`
  mutation UploadSingle($file: Upload!) {
    uploadSingle(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export const Debug = (): ReactElement => {
  // const [upload] = useMutation(UPLOAD)
  const [file, setFile] = useState(null)

  const handleSubmit = (e: any): void => {
    if (!file) {
      return;
    }

    console.log(file)
  }
  const [upload, { data }] = useMutation(SINGLE_UPLOAD);
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length === 1) {
      const file = files[0];
      const data2 = await upload({
        variables: {
          file: file,
        },
        
      });
      console.log(data, data2);
    }
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
