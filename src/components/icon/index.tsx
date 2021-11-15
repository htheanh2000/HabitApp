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
import { Pressable, StyleSheet, View } from "react-native";
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
  avatar
};

interface IProps {
  name: IIconName,
  size?: number,
  style?: any,
  blurBackground?: boolean,
  onPress?: () => void
}

export type IIconName = keyof typeof iconTypes

const IconComponent: FunctionComponent<IProps> = (props) => {
  const { name, size, style, blurBackground, onPress } = props
  const Icon = iconTypes[name];

 

  if (size)
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
