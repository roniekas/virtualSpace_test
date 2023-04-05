import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@mui/styles';
import styles from "./style";
import { getSize } from "helpers/size";

const AvatarGroup = (props) => {
  const { classes, max, avatars } = props;
  const overflowCount = avatars.length - max;
  const size = getSize(avatars[avatars.length - 1].props.size);
  
  return (
    <div className={classes.avatarGroup}>
      {avatars.slice(0, max).map((avatar) => (  
        avatar
      ))}
      {overflowCount > 0 && (
        <div className={classes.groupOverflow} style={{width: size, height: size}}>+{overflowCount}</div>
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  max: PropTypes.number,
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default (withStyles(styles)(AvatarGroup))