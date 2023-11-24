
document.addEventListener('DOMContentLoaded', function () {
    const popupBox = document.getElementById('popup-box');
    const openPopupLinks = document.querySelectorAll('.image-hover a');
    const closePopupLink = document.querySelector('.box-close');

    function openPopup() {
      popupBox.style.visibility = 'visible';
      popupBox.style.opacity = '1';
    }

    function closePopup() {
      popupBox.style.visibility = 'hidden';
      popupBox.style.opacity = '0';
    }

    openPopupLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        openPopup();
      });
    });

    closePopupLink.addEventListener('click', function (event) {
      event.preventDefault();
      closePopup();
    });

    window.addEventListener('click', function (event) {
      if (event.target === popupBox) {
        closePopup();
      }
    });
  });
