import React, {
  FC,
  MutableRefObject,
  RefObject,
  useLayoutEffect,
  useRef,
} from "react";

export const KakaoMap: FC = () => {
  const mapRef = useRef(null);
  const elementRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const kakao = (window as any).kakao;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    mapRef.current = new kakao.maps.Map(elementRef.current, options);
  }, []);
  return (<div ref={elementRef} style={{ width: "500px", height: "400px" }} />);
};

export const useKakao = (
  elementRef: RefObject<HTMLDivElement>,
  mapRef: MutableRefObject<any>,
  option: any,
) => {
  useLayoutEffect(() => {
    const kakao = (window as any).kakao;
    mapRef.current = new kakao.maps.Map(elementRef.current, option);
  }, []);
};
