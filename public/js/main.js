// Dark mode
const darkModeToggle = document.querySelector('#toggleDark');
const darkModeStateKey = "DarkMode";
const isDark = JSON.parse(localStorage.getItem(darkModeStateKey) || 'false')

if (isDark || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('theme-dark');
  darkModeToggle.classList.remove('toggleDark')
}

darkModeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('theme-dark')) {
    document.documentElement.classList.remove('theme-dark');
    darkModeToggle.classList.add('toggleDark')
    localStorage.setItem(darkModeStateKey, false)
  } else {
    document.documentElement.classList.add('theme-dark');
    darkModeToggle.classList.remove('toggleDark')
    localStorage.setItem(darkModeStateKey, true)

  }
})
