document.addEventListener("DOMContentLoaded", function () {
    const book = document.getElementById("book");
    const fontSizeControls = document.querySelectorAll(".font-size");
    const colorControls = document.querySelectorAll(".color");

    fontSizeControls.forEach(function (control) {
        control.addEventListener("click", function (event) {
            event.preventDefault();
            fontSizeControls.forEach(function (control) {
                control.classList.remove("font-size_active");
            });
            this.classList.add("font-size_active");

            const size = this.dataset.size;
            book.classList.remove("book_fs-small", "book_fs-big");
            if (size) {
                book.classList.add("book_fs-" + size);
            }
        });
    });

    colorControls.forEach(function (control) {
        control.addEventListener("click", function (event) {
            event.preventDefault();

            const isTextColor = this.parentElement.classList.contains(
                "book__control_color"
            );
            const color = this.dataset[isTextColor ? "textColor" : "bgColor"];
            const className = isTextColor ? "book_color-" : "book_bg-";
            colorControls.forEach(function (control) {
                control.classList.remove("color_active");
            });

            this.classList.add("color_active");
            if (isTextColor) {
                book.classList.remove(
                    "book_color-gray",
                    "book_color-whitesmoke",
                    "book_color-black"
                );
            } else {
                book.classList.remove(
                    "book_bg-gray",
                    "book_bg-black",
                    "book_bg-white"
                );
            }

            book.classList.add(className + color);
        });
    });
});
