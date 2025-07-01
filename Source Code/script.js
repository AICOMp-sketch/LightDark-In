let isDark = false;
    const body = document.body;
    const box = document.getElementById("authBox");
    const title = document.getElementById("formTitle");
    const linkText = document.querySelector(".toggle a");

    function switchMode() {
      isDark = !isDark;
      body.classList.toggle("dark-mode", isDark);
      box.classList.toggle("dark", isDark);
      title.textContent = isDark ? "Sign Up" : "Sign In";
      linkText.textContent = isDark ? "Back to sign in" : "Sign up here";
    }