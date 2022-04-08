import React from "react";

class UserProfile extends React.Component {
  render() {
    const { name, id, email, avatar } = this.props.user
    return(
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
        <img src={avatar} alt={name}></img>
      </div>
    )
  }
}

export default UserProfile;