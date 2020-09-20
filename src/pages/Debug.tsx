import React, {ChangeEvent, ReactElement, useEffect, useMemo, useRef, useState} from "react";
import { useMutation, gql } from "@apollo/react-hooks";
import {useKakao} from "../views/components/map/kakao-map";

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
  
  const kakao = (window as any).kakao;
  
  const mapRef = useRef<any>(null);
  const elemRef = useRef<HTMLDivElement>(null)
  
  const options = useMemo(() => (
    {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
  ), [])
  
  useEffect(() => {
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(33.450701, 126.570667)
    });
    
    marker.setMap(mapRef.current)
  }, [])
  
  useKakao(elemRef, mapRef, options)

  return (
    <div>
      <section>

        <h3>파일 업로드</h3>
        <input type="file" name="fileTest" onChange={handleFileChange} multiple />
        <button onClick={handleSubmit}>전송하기</button>
      </section>
      
      <section>
        <h3>카카오맵</h3>
        
        <div ref={elemRef} style={{ width: "300px", height: "400px"}} />
      </section>
    </div>
  );
};
