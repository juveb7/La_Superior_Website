document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#login-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.querySelector('#username').value;
      const password = document.querySelector('#password').value;
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = '/dashboard';
      } else {
        alert('Invalid username or password');
      }
    });
  });