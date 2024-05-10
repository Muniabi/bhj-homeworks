document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.font-size').forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelectorAll('.font-size').forEach(function (control) {
                control.classList.remove('font-size_active');
            });
            this.classList.add('font-size_active');
            let size = this.dataset.size;
            document.getElementById('book').classList.remove('book_fs-small', 'book_fs-big');
            document.getElementById('book').classList.add('book_fs-' + size);
        });
    });

    document.querySelectorAll('.color').forEach(function (control) {
        control.addEventListener('click', function (event) {
            event.preventDefault();
            let isTextColor = this.parentElement.classList.contains('book__control_color');
            let color = this.dataset[isTextColor ? 'textColor' : 'bgColor'];
            let book = document.getElementById('book');
            let className = isTextColor ? 'book_color-' : 'book_bg-';

            // если цвет текста и фона совпадают, то меняем цвет текста
            if (isTextColor && color === 'white') {
                isTextColor = false;
            }

            document.querySelectorAll('.color').forEach(function (control) {
                control.classList.remove('color_active');
            });
            this.classList.add('color_active');

            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black', 'book_bg-gray', 'book_bg-black', 'book_bg-white');
            book.classList.add(className + color);
        });
    });
});
