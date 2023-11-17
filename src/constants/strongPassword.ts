// Password has at least a lowercase and uppercase letter, a special character, a number, 6 chars or more
const strongPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{6,})/;

export default strongPassword;
