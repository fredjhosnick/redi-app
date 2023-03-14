import './App.css';

function App() {
  return (
    <div class="login-page">
  <div class="form">
  <span class="login100-form-title">
						Sing In
					</span>

    <form class="register-form">
      
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>sing in</button>
      <p class="message">Don't have an account? <a href="#">SING UP NOW</a></p>
    </form>
  </div>
</div>


  );
}

export default App;
