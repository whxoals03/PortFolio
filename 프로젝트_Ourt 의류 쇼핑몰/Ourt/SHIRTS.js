document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* =========================
           상품 목록 생성
        ========================= */

        showProducts();



        /* =========================
           장바구니 숫자
        ========================= */

        updateBagCount();



        /* =========================
           ONLINE STORE 메뉴
        ========================= */

        const onlineStoreMenu =
            document.getElementById(
                "online-store-menu"
            );


        const storePanel =
            document.getElementById(
                "store-panel"
            );


        let storeTimer;



        /* ONLINE STORE에 마우스를 올림 */

        onlineStoreMenu.addEventListener(
            "mouseenter",
            function() {

                clearTimeout(
                    storeTimer
                );


                storePanel.classList.add(
                    "show"
                );

            }
        );



        /* ONLINE STORE에서 마우스가 벗어남 */

        onlineStoreMenu.addEventListener(
            "mouseleave",
            function() {

                storeTimer =
                    setTimeout(
                        function() {

                            storePanel
                                .classList
                                .remove(
                                    "show"
                                );

                        },
                        300
                    );

            }
        );



        /* 하위 메뉴로 마우스 이동 */

        storePanel.addEventListener(
            "mouseenter",
            function() {

                clearTimeout(
                    storeTimer
                );


                storePanel.classList.add(
                    "show"
                );

            }
        );



        /* 하위 메뉴에서 완전히 벗어남 */

        storePanel.addEventListener(
            "mouseleave",
            function() {

                storePanel.classList.remove(
                    "show"
                );

            }
        );


    }
);



/* =========================
   상품 목록 자동 생성
========================= */

function showProducts() {


    const productGrid =
        document.getElementById(
            "product-grid"
        );


    for (
        let i = 0;
        i < products.length;
        i++
    ) {


        const product =
            products[i];


        productGrid.innerHTML += `

            <a
                href="PRODUCT.html?id=${product.id}"
                class="product-card"
            >


                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="hover-info">


                    <h2>

                        ${product.name}

                    </h2>


                    <p class="brand">

                        ${product.brand}

                    </p>


                    <div class="price-area">


                        <span class="discount">

                            ${product.discount}

                        </span>


                        <span class="price">

                            ${product.price.toLocaleString()}원

                        </span>


                    </div>


                    <p class="review">

                        ${product.review}

                    </p>


                </div>


            </a>

        `;

    }

}



/* =========================
   장바구니 상품 수 표시
========================= */

function updateBagCount() {


    const cart =
        JSON.parse(
            localStorage.getItem(
                "ourtCart"
            )
        ) || [];


    let count = 0;


    for (
        let i = 0;
        i < cart.length;
        i++
    ) {

        count +=
            cart[i].quantity;

    }


    const bagCount =
        document.getElementById(
            "bag-count"
        );


    if (bagCount !== null) {

        bagCount.innerText =
            count;

    }

}