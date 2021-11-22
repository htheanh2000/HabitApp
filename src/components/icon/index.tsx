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
import home from "@/assets/images/home1.svg";
import course from "@/assets/images/courses.svg";
import community from "@/assets/images/community.svg";
import setting from "@/assets/images/setting.svg";
import tab from "@/assets/images/tab.svg";
import add from "@/assets/images/add.svg";
import reader from "@/assets/images/reader.svg";
import smlPlus from "@/assets/images/sml-plus.svg";
import rightArrow from "@/assets/images/right-arrow.svg";
import downArrow from "@/assets/images/down-arrow.svg";
import mentor from "@/assets/images/community.svg";
import notiOff from "@/assets/images/noti-off.svg";
import notiOn from "@/assets/images/noti-on.svg";
import edit from "@/assets/images/edit.svg";
import checkBtn from "@/assets/images/check-btn.svg";
import search from "@/assets/images/search.svg";
import coursesBg from "@/assets/images/courses-bg.svg";
import dropdown from "@/assets/images/downArrow.svg";
import mark from "@/assets/images/mark.svg";
import play from "@/assets/images/play.svg";
import locked from "@/assets/images/locked.svg";
import love from "@/assets/images/love.svg";
import comment from "@/assets/images/comment.svg";
import share from "@/assets/images/share.svg";
import notification from "@/assets/images/notification.svg";
import threeDot from "@/assets/images/three-dot.svg";
import phone from "@/assets/images/phone.svg";
import viRiArrow from "@/assets/images/violet-right-arrow.svg";
import contact from "@/assets/images/contact.svg";
import feedback from "@/assets/images/feedback.svg";
import policy from "@/assets/images/policy.svg";
import about from "@/assets/images/about.svg";
import pen from "@/assets/images/pen.svg";
import clock from "@/assets/images/clock.svg";
import flag from "@/assets/images/flag.svg";
import billingMethod from "@/assets/images/billing-method.svg";
import longStreak from "@/assets/images/long-streak.svg";
import subscription from "@/assets/images/subscription.svg";
import tick from "@/assets/images/tick.svg";
import secure from "@/assets/images/secure.svg";
import camp from "@/assets/images/camp.svg";
import belt from "@/assets/images/belt.svg";
import streak from "@/assets/images/streak.svg";
import light from "@/assets/images/light.svg";
import completion from "@/assets/images/completion.svg";
import average from "@/assets/images/average.svg";
import close from "@/assets/images/close.svg";
// jpg
import blurSetting from "@/assets/images/Settings.jpg";
import blurCourse from "@/assets/images/blur-course.jpg";
import blurCommunity from "@/assets/images/blur-community.jpg";
import blurHome from "@/assets/images/blur-home.jpg";
import { Image, Pressable, StyleSheet, View } from "react-native";
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
  rightArrow,
  downArrow,
  mentor,
  notiOff,
  notiOn,
  checkBtn,
  edit,
  search,
  coursesBg,
  dropdown,
  mark,
  play,
  locked,
  love,
  comment,
  share,
  notification,
  threeDot,
  viRiArrow,
  phone,
  contact,
  about,
  policy,
  feedback,
  pen,
  clock,
  flag,
  billingMethod,
  longStreak,
  subscription,
  tick,
  secure,
  camp,
  belt,
  streak,
  light,
  completion,
  average,
  close
};

const imgTypes = {
  blurSetting,
  blurHome,
  blurCommunity,
  blurCourse,
}

interface IProps {
  name?: IIconName,
  img?: keyof typeof imgTypes,
  size?: number,
  style?: any,
  width?: number,
  blurBackground?: boolean,
  onPress?: () => void
}

// Need to optimize and clean code !!!!!

export type IIconName = keyof typeof iconTypes

const IconComponent: FunctionComponent<IProps> = (props) => {
  const { img, name, size, style, blurBackground, onPress, width } = props
  const Icon = name ? iconTypes[name] : iconTypes['add'];

  if (img) {
    if (size)
      return <Image source={imgTypes[img]} width={size} height={size} />
    else
      return <Image source={imgTypes[img]} />
  }
  else if (width)
    return <Icon width={width} style={style} />;
  else if (size)
    return <Icon width={size} height={size} style={style} />;
  else
    if (onPress) {
      return (
        <Pressable style={[style, blurBackground && styles.container]} onPress={onPress}>
          <Icon />
        </Pressable>
      )
    }
    else return (
      <View style={[style, blurBackground && styles.container]}>
        <Icon />
      </View>
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
    alignItems: 'center'
  }
})

export default IconComponent;
