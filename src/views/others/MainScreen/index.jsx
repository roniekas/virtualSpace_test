import React from 'react';

import AvatarGroup from 'components/AvaGroup/AvatarGroup';
import Avatar from 'components/Ava/Avatar';

const MainScreen = () => {
  return (
    <div style={{width: '1000px'}}>
      <AvatarGroup max={2}
        avatars={[
          <Avatar alt="Remy Sharp" />, //Minimum props
          <Avatar alt="Travis Howard" src="https://via.placeholder.com/150" size={'md'} />, //Ideal props
          <Avatar alt="Cindy Baker" src="https://via.placeholder.com/150" />, //Standard props
          <Avatar alt="Agnes Walker" src="https://via.placeholder.com/150" />, //Standard props
        ]}
      >
      </AvatarGroup>
    </div>
  )
}

export default MainScreen;
