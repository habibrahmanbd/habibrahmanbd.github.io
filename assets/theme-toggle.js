document.addEventListener("DOMContentLoaded", (event) => {
    // Function to check if current time is after sunset and before sunrise
    function isNightTime() {
      const now = new Date();
      const sunsetHour = 18; // 6:00 PM, adjust as needed
      const sunriseHour = 6; // 6:00 AM, adjust as needed
      const currentHour = now.getHours();
      return currentHour >= sunsetHour || currentHour < sunriseHour;
    }
  
    // Get saved theme from localStorage, or set to default based on time
    const savedTheme = localStorage.getItem("theme") || (isNightTime() ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", savedTheme);
    const themeToggle = document.getElementById('checkbox');
  
    if (savedTheme === "dark") {
      themeToggle.checked = true;
    } else {
      themeToggle.checked = false;
    }
  
    console.log("Theme loaded: " + savedTheme);
  });
  
  
  function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  
  