document.getElementById('login-tab').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
  });
  
  document.getElementById('register-tab').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
  });
  
  // Default to login tab
  document.getElementById('login-tab').click();
  