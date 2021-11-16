import React, { FunctionComponent } from "react";
import facebook from "@/assets/images/facebook.svg";
import google from "@/assets/images/google.svg";
import mail from "@/assets/images/mail.svg";
import lock from "@/assets/images/lock.svg";
import signup from "@/assets/images/sign-up.svg";
import user from "@/assets/images/user.svg";
import check from "@/assets/images/check.svg";
import back from "@/assets/images/back.svg";
import resetPassword from "@/assets/images/reset-password.svg";
import menu from "@/assets/images/menu.svg";
import avatar from "@/assets/images/avatar.svg";
import homepage from "@/assets/images/homepage.svg";
import cloud from "@/assets/images/cloud.svg";
import home from "@/assets/images/home.svg";
import course from "@/assets/images/courses.svg";
import community from "@/assets/images/community.svg";
import setting from "@/assets/images/setting.svg";
import tab from "@/assets/images/tab.svg";
import add from "@/assets/images/add.svg";
import reader from "@/assets/images/reader.svg";
import smlPlus from "@/assets/images/sml-plus.svg";
import rightArrow from "@/assets/images/right-arrow.svg";
import { Pressable, StyleSheet } from "react-native";
import { BLUR_COLOR } from "@/constants/color";

const iconTypes = {
  facebook,
  google,
  mail,
  lock,
  signup,
  user,
  check,
  back,
  resetPassword,
  menu,
  avatar,
  homepage,
  cloud,
  home,
  course,
  community,
  setting,
  tab,
  add,
  reader,
  smlPlus,
  rightArrow
};

interface IProps {
  name: IIconName,
  size?: number,
  style?: any,
  width?: number,
  blurBackground?: boolean,
  onPress?: () => void
}

export type IIconName = keyof typeof iconTypes

const IconComponent: FunctionComponent<IProps> = (props) => {
  const { name, size, style, blurBackground, onPress, width } = props
  const Icon = iconTypes[name];

 
  if (width)
    return <Icon width={width} style={style}/>;
  else if (size)
    return <Icon width={size} height={size} style={style}/>;
  else
    return (
      <Pressable style={[style , blurBackground && styles.container]} onPress={onPress}>
        <Icon />
      </Pressable>
    )

  
};


IconComponent.defaultProps = {
  size: undefined
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUR_COLOR.brown10,
    borderRadius: 1000,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default IconComponent;
