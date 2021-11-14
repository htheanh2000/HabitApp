import React, { FunctionComponent } from "react";
import Onboard from "@/assets/images/onboard.svg";

const iconTypes = {
  Onboard: Onboard,
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