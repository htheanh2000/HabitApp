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
import { Image, ImageStyle } from "react-native";

const imgTypes = {
  blurSetting,
  blurHome,
  blurCommunity,
  blurCourse,
  lesson1,
  lesson2,
  video
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
