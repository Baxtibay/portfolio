window.addEventListener('DOMContentLoaded', () => {
  const elMenuToggle = document.querySelector('.js-menu-toggle'),
    elNavbarWrapper = document.querySelector('.navbar-wrapper'),
    elMenuCloseButton = elNavbarWrapper.querySelector('.menu-close-button')


  // SHOW MENU FUNCTION
  function showMenu(button, toggleContent, addClasName) {
    button.addEventListener('click', () => {
      toggleContent.classList.add(addClasName)
      document.body.style.overflow = 'hidden'
    })
  }

  // HIDE MENU FUNCTION
  function hideMenu(button, toggleContent, removeClassName) {
    button.addEventListener('click', () => {
      toggleContent.classList.remove(removeClassName)
      document.body.style.overflow = ''
    })
  }

  // OPEN MENU
  if(elMenuToggle) {
    elMenuToggle.addEventListener(
      'click',
      showMenu(
        elMenuToggle,
        elNavbarWrapper,
        'burger-menu'
      )
    )
  }

  // CLOSE MENU
  if(elMenuCloseButton) {
    elMenuCloseButton.addEventListener(
      'click',
      hideMenu(
        elMenuCloseButton,
        elNavbarWrapper,
        'burger-menu'
      )
    )
  }

})