export function validateSignupForm({ name, email, password }) {
  const errors = {}

  if (!name.trim()) {
    errors.name = 'Name is required'
  }
  if (!email.trim()) {
    errors.email = 'Email is required'
  } else if (!email.includes('@') || !email.includes('.')) {
    errors.email = 'Invalid email address'
  }

  if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return errors
}

export function validateLoginForm({ email, password }) {
  const errors = {}

  if (!email.trim()) {
    errors.email = 'Email is required'
  } else if (!email.includes('@') || !email.includes('.')) {
    errors.email = 'Invalid email address'
  }

  if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return errors
}
