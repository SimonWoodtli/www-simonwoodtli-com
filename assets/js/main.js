// ----------------------------- Dark-Mode ----------------------------
const darkModeToggle = document.querySelector('#toggleDark');
const darkModeStateKey = "DarkMode";
const isDark = JSON.parse(localStorage.getItem(darkModeStateKey) || 'false')

// This slightly favours dark theme. Like overwriting of light happens if
// system (matchMedia())is set dark. But if system is set light and the
// user set dark mode previously on the site it stays dark. Makes
// more sense IMO than having this complicated 3 options like the
// tailwind docs has.
if (isDark || window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('theme-dark');
  // would be nice to have 'add' here for the icon switch. But only works
  // with '.toggleDark:before {...}' because ':after' adds both icons :(
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

// ------------------------------ Sidebar -----------------------------
// not sure if toggleMenu should not work direclty on aside, why put
// that on burger? TRY
const toggleHamburger= document.querySelector('#toggleHamburger');
const toggleMenu = document.querySelector('#toggleMenu');

toggleHamburger.addEventListener('click', (e) => {
  toggleHamburger.classList.toggle('toggleHamburger')
  toggleMenu.classList.toggle('toggleMenu')
  console.log('foo');
})
