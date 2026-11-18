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

// Parses a route id. Only plain digits are accepted ("0x1", "1e0" or " 1" are
// not), and the id must be positive. Returns the number, or null if invalid.
function parseId(raw) {
  if (!/^\d+$/.test(raw)) return null;
  const id = Number(raw);
  return id > 0 ? id : null;
}

module.exports = { validateUserInput, parseId };
