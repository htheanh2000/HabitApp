import React, { FunctionComponent } from "react";
// jpg
import blurSetting from "@/assets/images/Settings.jpg";
import blurCourse from "@/assets/images/blur-course.jpg";
import blurCommunity from "@/assets/images/blur-community.jpg";
import blurHome from "@/assets/images/blur-home.jpg";
// png
import lesson1 from "@/assets/images/lesson-1.png";
import lesson2 from "@/assets/images/lesson-2.png";
import video from "@/assets/images/video.png";
import ava1 from "@/assets/images/avatar/ava-1.png";
import ava2 from "@/assets/images/avatar/ava-2.png";
import ava3 from "@/assets/images/avatar/ava-3.png";
import ava4 from "@/assets/images/avatar/ava-4.png";
import smlCamp from "@/assets/images/sml-camp.png";
import camp from "@/assets/images/camp1.png";
import { Image, ImageStyle } from "react-native";

const imgTypes = {
  blurSetting,
  blurHome,
  blurCommunity,
  blurCourse,
  lesson1,
  lesson2,
  video,
  ava1,
  ava2,
  ava3,
  ava4,
  smlCamp,
  camp
}

interface IProps {
  name: keyof typeof imgTypes,
  style?: ImageStyle,
  onPress?: () => void
}


const ImageCustom: FunctionComponent<IProps> = (props) => {
  const { name,style } = props
  return <Image source={imgTypes[name]} style={style} />
 
};



export default ImageCustom;
