export default function() {
    const bodyScrollLock = require('body-scroll-lock')
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;
    console.log('disableBodyScroll()')
    disableBodyScroll()

    window.onload = function() {
        console.log('onload')
        console.log('enableBodyScroll()')
        enableBodyScroll();

        const selectors = {
            form: '[data-form]',
            email: '#email',
            acceptForm: '#accept',
            popup: '[data-popup]',
            closeBtn: '[data-close]',
            sendBtn: '.js-send-btn',
            popupControl: '[data-href]',
            menuOpen: '[data-menu-open]',
            menuClose: '[data-menu-close]',
            menu: '#menu'
        }

        //Hide popup sections
        document.querySelectorAll(selectors.popup)
            .forEach(elem => elem.querySelector(selectors.closeBtn).addEventListener('click', function(e) {
                elem.classList.add('hide');
                elem.classList.remove('show');
                enableBodyScroll();
            }));

        //Open popup sections
        document.querySelectorAll(selectors.popupControl)
            .forEach(elem => elem.addEventListener('click', function() {
                const popup = document.querySelector(`#${this.dataset.href}`);
                disableBodyScroll()
                popup.classList.add('show');
                popup.classList.remove('hide');
            }))

        function homeSection() {
            console.log('home section')
            const homeSection = document.querySelector('#home-section');

            if (homeSection) {
                disableBodyScroll(homeSection)

                setTimeout(() => {
                    homeSection.classList.add('hide')
                    homeSection.classList.remove('show');
                    enableBodyScroll(homeSection);
                }, 2000);
            }
            const AOS = require('aos')
            AOS.init()
        };

        homeSection()
        console.log('SAM INIT')
    };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzYW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpc2FibGVCb2R5U2Nyb2xsICA9ICBib2R5U2Nyb2xsTG9jay5kaXNhYmxlQm9keVNjcm9sbDtcbiAgY29uc3QgZW5hYmxlQm9keVNjcm9sbCAgPSAgYm9keVNjcm9sbExvY2suZW5hYmxlQm9keVNjcm9sbDtcbiAgZGlzYWJsZUJvZHlTY3JvbGwgKClcbiAgXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBlbmFibGVCb2R5U2Nyb2xsICgpO1xuICAgIFxuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgIGZvcm06ICdbZGF0YS1mb3JtXScsXG4gICAgICBlbWFpbDogJyNlbWFpbCcsXG4gICAgICBhY2NlcHRGb3JtOiAnI2FjY2VwdCcsXG4gICAgICBwb3B1cDogJ1tkYXRhLXBvcHVwXScsXG4gICAgICBjbG9zZUJ0bjogJ1tkYXRhLWNsb3NlXScsXG4gICAgICBzZW5kQnRuOiAnLmpzLXNlbmQtYnRuJyxcbiAgICAgIHBvcHVwQ29udHJvbDogJ1tkYXRhLWhyZWZdJyxcbiAgICAgIG1lbnVPcGVuOiAnW2RhdGEtbWVudS1vcGVuXScsXG4gICAgICBtZW51Q2xvc2U6ICdbZGF0YS1tZW51LWNsb3NlXScsXG4gICAgICBtZW51OiAnI21lbnUnXG4gICAgfVxuICBcbiAgICAvL0hpZGUgcG9wdXAgc2VjdGlvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5wb3B1cClcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmNsb3NlQnRuKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICBlbmFibGVCb2R5U2Nyb2xsICgpO1xuICAgICAgICB9KSk7XG4gIFxuICAgIC8vT3BlbiBwb3B1cCBzZWN0aW9uc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnBvcHVwQ29udHJvbClcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5kYXRhc2V0LmhyZWZ9YCk7XG4gICAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwgKCApXG4gICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSkpXG4gICAgXG4gICAgZnVuY3Rpb24gaG9tZVNlY3Rpb24oKSB7XG4gICAgICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLXNlY3Rpb24nKTtcblxuICAgICAgaWYgKCBob21lU2VjdGlvbiApIHtcbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwgKCBob21lU2VjdGlvbiApXG4gIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgICAgICBob21lU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgZW5hYmxlQm9keVNjcm9sbCAoIGhvbWVTZWN0aW9uICk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgICAgQU9TLmluaXQoKVxuICAgIH07XG4gIFxuICAgIGhvbWVTZWN0aW9uKClcbiAgICBjb25zb2xlLmxvZygnU0FNIElOSVQnKVxuICB9O1xufTsiXSwiZmlsZSI6InNhbS5qcyJ9