import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

interface LinearImagesProps {
  translatex: string;
}
interface ImageListType {
  imageList: string[];
  intervalTime:number;
}

const Carousal: React.FC<ImageListType> = ({ imageList,intervalTime }) => {
  const [xAxis, setXaxis] = useState(0);
  useEffect(() => {
    let interval: any;
    interval = setInterval(() => {
      console.log(xAxis);
      if (xAxis === imageList.length - 1) {
        setXaxis(0);
        return;
      }
      setXaxis((prev) => prev + 1);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [xAxis]);
  const swipeRight = () => {
    if (xAxis === imageList.length - 1) {
      setXaxis(0);
      return;
    }
    setXaxis((prev) => prev + 1);
  };
  const swipeLeft = () => {
    if (xAxis === 0) {
      setXaxis(imageList.length - 1);
      return;
    }
    setXaxis((prev) => prev - 1);
  };

  const changeImage=(pos:number)=>{
    setXaxis(pos)
  }

  return (
    <CarousalContainer>
      <LinearImages translatex={`translateX(-${xAxis}00%)`}>
        {imageList.map((image) => {
          return <img key={image} src={image} />;
        })}
      </LinearImages>
      <LeftArrow onClick={swipeLeft}>
        <AiFillLeftCircle />
      </LeftArrow>
      <RightArrow onClick={swipeRight}>
        <AiFillRightCircle />
      </RightArrow>
      <ImageNavigator>
        {imageList.map((_, pos) => {
          return <NavigateButton key={pos} onClick={()=>changeImage(pos)} color={`${xAxis===pos?"black":""}`} />;
        })}
      </ImageNavigator>
    </CarousalContainer>
  );
};
export default Carousal;

const CarousalContainer = styled.div`
  //border: 1px solid black;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const LinearImages = styled.div<LinearImagesProps>`
  display: flex;
  transition: 0.7s ease-in-out;
  transform: ${(props) => props.translatex};
  & > img {
    width: 100%;
  }
`;
const Arrow = styled(IconButton)`
  && {
    position: absolute;
    border: 1px solid rgba(128, 128, 128, 0.18);
    top: 50%;
    transform: translateY(-50%);
    color: white;
    padding: 0;
    opacity: 0.5;
    & svg {
      height: 40px;
      width: 40px;
    }
  }
`;

const LeftArrow = styled(Arrow)`
  left: 0;
`;

const RightArrow = styled(Arrow)`
  right: 0;
`;

const ImageNavigator = styled.div`
  position: absolute;
  display: flex;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  gap: 3px;
`;

const NavigateButton = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  background-color: ${(background) => background.color && background.color};
  opacity: 0.4;
`;
