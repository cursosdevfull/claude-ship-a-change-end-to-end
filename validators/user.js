const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an error message for an invalid { name, email } body, or null if valid
function validateUserInput({ name, email }) {
  if (name === undefined || email === undefined) {
    return "name and email are required";
  }
  if (typeof name !== "string" || typeof email !== "string") {
    return "name and email must be strings";
  }
  if (!name.trim() || !email.trim()) {
    return "name and email cannot be empty";
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    return "email must be a valid email address";
  }
  return null;
}

module.exports = { validateUserInput };
