document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const links = dropdown.querySelectorAll('.dropdown__link');

        value.addEventListener('click', function () {
            list.classList.toggle('dropdown__list_active');
        });

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                value.textContent = this.textContent.trim();
                list.classList.remove('dropdown__list_active');
            });
        });
    });

    // закрытие списка при клике вне его области
    document.addEventListener('click', function (e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
            }
        });
    });
});