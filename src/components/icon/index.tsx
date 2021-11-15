import React, { FunctionComponent } from "react";
import facebook from "@/assets/images/facebook.svg";
import google from "@/assets/images/google.svg";
import mail from "@/assets/images/mail.svg";
import lock from "@/assets/images/lock.svg";
import signup from "@/assets/images/sign-up.svg";
import user from "@/assets/images/user.svg";
import check from "@/assets/images/check.svg";

const iconTypes = {
  facebook,
  google,
  mail,
  lock,
  signup,
  user,
  check
};

interface IProps {
  name: IIconName,
  size?: number,
  style?: any
}

export type IIconName = keyof typeof iconTypes

const IconComponent: FunctionComponent<IProps> = (props) => {
  const { name, size, style } = props
  const Icon = iconTypes[name];
  if (size)
    return <Icon width={size} height={size} style={style}/>;
  else
    return <Icon style={style}/>
};

IconComponent.defaultProps = {
  size: undefined
}

export default IconComponent;
