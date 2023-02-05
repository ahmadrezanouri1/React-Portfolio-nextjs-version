import React from "react";
import Style from "../../src/styles/scss/Home.module.scss";
import classNames from "classnames";

function SocialIcon(props) {
  const { link, icon, label } = props;
  return (
    <a
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}
      className={classNames(Style.link)}
    >
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
