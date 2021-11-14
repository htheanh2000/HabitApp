import React, { FunctionComponent } from "react";
import facebook from "@/assets/images/facebook.svg";
import google from "@/assets/images/google.svg";
import mail from "@/assets/images/mail.svg";

const iconTypes = {
  facebook,
  google,
  mail
};

interface IProps {
  name: keyof typeof iconTypes,
  size?: number
}

const IconComponent: FunctionComponent<IProps> = (props) => {
  const { name, size } = props
  const Icon = iconTypes[name];
  if (size)
    return <Icon width={size} height={size} />;
  else
    return <Icon />
};

IconComponent.defaultProps = {
  size: undefined
}
export default IconComponent;