const getters = {
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  info: state => state.theater.info,
  userInfo: state => state.user.userInfo
}
export default getters
