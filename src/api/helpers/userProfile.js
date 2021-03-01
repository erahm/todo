function userProfile(userData) {
  const { id, email } = userData;

  return {
    id,
    email
  }
}

module.exports = userProfile;