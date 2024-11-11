document.addEventListener("DOMContentLoaded", () => {
    const cartProducts = document.querySelector(".cart__products");

    function saveCart() {
        const products = Array.from(cartProducts.children).map((product) => ({
            id: product.dataset.id,
            image: product.querySelector(".cart__product-image").src,
            count: parseInt(
                product.querySelector(".cart__product-count").textContent
            ),
        }));
        localStorage.setItem("cart", JSON.stringify(products));
    }

    function loadCart() {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            const products = JSON.parse(savedCart);
            products.forEach(({ id, image, count }) => {
                const cartProduct = document.createElement("div");
                cartProduct.classList.add("cart__product");
                cartProduct.dataset.id = id;

                const productImageElem = document.createElement("img");
                productImageElem.classList.add("cart__product-image");
                productImageElem.src = image;

                const productCount = document.createElement("div");
                productCount.classList.add("cart__product-count");
                productCount.textContent = count;

                cartProduct.appendChild(productImageElem);
                cartProduct.appendChild(productCount);
                cartProducts.appendChild(cartProduct);
            });
        }
    }

    function updateQuantity(control, increment) {
        const quantityElement = control
            .closest(".product__quantity-controls")
            .querySelector(".product__quantity-value");
        let quantity = parseInt(quantityElement.textContent);

        if (increment) {
            quantity++;
        } else if (quantity > 1) {
            quantity--;
        }

        quantityElement.textContent = quantity;
    }

    function addToCart(product) {
        const productId = product.dataset.id;
        const productImage = product.querySelector(".product__image").src;
        const quantity = parseInt(
            product.querySelector(".product__quantity-value").textContent
        );

        const existingProduct = cartProducts.querySelector(
            `.cart__product[data-id="${productId}"]`
        );

        if (existingProduct) {
            const productCount = existingProduct.querySelector(
                ".cart__product-count"
            );
            productCount.textContent =
                parseInt(productCount.textContent) + quantity;
        } else {
            const cartProduct = document.createElement("div");
            cartProduct.classList.add("cart__product");
            cartProduct.dataset.id = productId;

            const productImageElem = document.createElement("img");
            productImageElem.classList.add("cart__product-image");
            productImageElem.src = productImage;

            const productCount = document.createElement("div");
            productCount.classList.add("cart__product-count");
            productCount.textContent = quantity;

            cartProduct.appendChild(productImageElem);
            cartProduct.appendChild(productCount);
            cartProducts.appendChild(cartProduct);
        }
        saveCart();
    }

    loadCart();

    document
        .querySelectorAll(".product__quantity-control")
        .forEach((control) => {
            control.addEventListener("click", (event) => {
                const isIncrement = control.classList.contains(
                    "product__quantity-control_inc"
                );
                updateQuantity(control, isIncrement);
            });
        });

    document.querySelectorAll(".product__add").forEach((button) => {
        button.addEventListener("click", (event) => {
            const product = button.closest(".product");
            addToCart(product);
        });
    });
});
