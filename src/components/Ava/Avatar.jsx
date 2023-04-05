import React from "react";
import PropTypes from "prop-types";
import styles from "./style";
import { getSize } from "helpers/size";
import { withStyles } from "@mui/styles";

const Avatar = (props) => {
  const {classes, alt, src, size} = props;
  let fixSize = getSize(size);

  function getInitial (name) {
    const toArray = name.split(' ');
    return toArray[0].charAt(0) + toArray[1].charAt(1);
  }

  const avatarSize = {
    width: `${fixSize}px`,
    height: `${fixSize}px`,
  };
  return (
    <div className={classes.avatar} style={avatarSize}>
      <img className={classes.images} src={src} alt={getInitial(alt)} />
    </div>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'sm',
};

export default (withStyles(styles)(Avatar))