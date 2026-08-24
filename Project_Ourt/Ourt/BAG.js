function getCart() {

    return JSON.parse(
        localStorage.getItem("ourtCart")
    ) || [];

}



function saveCart(cart) {

    localStorage.setItem(
        "ourtCart",
        JSON.stringify(cart)
    );

}



function renderCart() {

    const cart = getCart();

    const cartBody =
        document.getElementById("cart-body");


    cartBody.innerHTML = "";


    let totalPrice = 0;

    let totalCount = 0;



    /* 장바구니가 비었을 경우 */

    if (cart.length === 0) {

        cartBody.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    class="empty">

                    장바구니가 비어 있습니다.

                </td>

            </tr>

        `;

    }



    /* 상품 출력 */

    for (let i = 0; i < cart.length; i++) {


        const item = cart[i];


        const itemTotal =
            item.price * item.quantity;


        totalPrice += itemTotal;

        totalCount += item.quantity;



        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <input
                    type="checkbox"
                    class="item-check"
                    value="${item.id}">

            </td>


            <td>

                <img
                    class="cart-image"
                    src="${item.image}">

            </td>


            <td class="product-info">

                <strong>
                    ${item.name}
                </strong>

                브랜드 :
                ${item.brand}

                <br>

                사이즈 :
                ${item.size}

            </td>


            <td>

                ${item.price.toLocaleString()}원

            </td>


            <td>

                <input
                    type="number"
                    id="quantity-${item.id}"
                    class="quantity"
                    value="${item.quantity}"
                    min="1">


                <button
                    class="change-button"
                    onclick="changeQuantity('${item.id}')">

                    변경

                </button>

            </td>


            <td>

                무료

            </td>


            <td>

                <strong>

                    ${itemTotal.toLocaleString()}원

                </strong>

            </td>

        `;


        cartBody.appendChild(row);

    }



    document.getElementById(
        "total-product"
    ).innerText =
        totalPrice.toLocaleString() + "원";


    document.getElementById(
        "final-price"
    ).innerText =
        totalPrice.toLocaleString() + "원";


    document.getElementById(
        "bag-count"
    ).innerText =
        totalCount;


    document.getElementById(
        "domestic-count"
    ).innerText =
        totalCount;

}



/* =========================
   수량 변경
========================= */

function changeQuantity(id) {

    const cart = getCart();


    const input =
        document.getElementById(
            "quantity-" + id
        );


    let quantity =
        Number(input.value);


    if (quantity < 1) {

        quantity = 1;

    }


    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id === id) {

            cart[i].quantity = quantity;

        }

    }


    saveCart(cart);


    renderCart();

}



/* =========================
   선택상품 삭제
========================= */

function deleteSelected() {

    const checked =
        document.querySelectorAll(
            ".item-check:checked"
        );


    if (checked.length === 0) {

        alert("삭제할 상품을 선택해주세요.");

        return;

    }


    let cart = getCart();


    const selectedIds = [];


    for (let i = 0; i < checked.length; i++) {

        selectedIds.push(
            checked[i].value
        );

    }


    cart =
        cart.filter(function(item) {

            return !selectedIds.includes(
                item.id
            );

        });


    saveCart(cart);


    renderCart();

}



/* =========================
   장바구니 전체 비우기
========================= */

function clearBag() {

    localStorage.setItem(
        "ourtCart",
        JSON.stringify([])
    );


    renderCart();

}



/* =========================
   선택상품 주문
========================= */

function orderSelected() {

    const checked =
        document.querySelectorAll(
            ".item-check:checked"
        );


    if (checked.length === 0) {

        alert("주문할 상품을 선택해주세요.");

        return;

    }


    const selectedIds = [];


    for (let i = 0; i < checked.length; i++) {

        selectedIds.push(
            checked[i].value
        );

    }


    let cart = getCart();


    cart =
        cart.filter(function(item) {

            return !selectedIds.includes(
                item.id
            );

        });


    saveCart(cart);


    alert("주문되었습니다.");


    renderCart();

}



/* =========================
   전체상품 주문
========================= */

function orderAll() {

    const cart = getCart();


    if (cart.length === 0) {

        alert("장바구니에 상품이 없습니다.");

        return;

    }


    localStorage.setItem(
        "ourtCart",
        JSON.stringify([])
    );


    alert("주문되었습니다.");


    renderCart();

}



renderCart();

const onlineStoreMenu =
    document.getElementById("online-store-menu");

const storePanel =
    document.getElementById("store-panel");

let storeTimer;


onlineStoreMenu.addEventListener(
    "mouseenter",
    function() {

        clearTimeout(storeTimer);

        storePanel.classList.add("show");

    }
);


onlineStoreMenu.addEventListener(
    "mouseleave",
    function() {

        storeTimer = setTimeout(
            function() {

                storePanel.classList.remove("show");

            },
            200
        );

    }
);


storePanel.addEventListener(
    "mouseenter",
    function() {

        clearTimeout(storeTimer);

    }
);


storePanel.addEventListener(
    "mouseleave",
    function() {

        storePanel.classList.remove("show");

    }
);