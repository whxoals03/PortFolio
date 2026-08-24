/* =========================
   주소에서 상품 ID 가져오기
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const productId =
    params.get("id");



/* =========================
   상품 찾기
========================= */

let product = null;


for (
    let i = 0;
    i < products.length;
    i++
) {


    if (
        products[i].id === productId
    ) {


        product =
            products[i];


        break;

    }

}



/* =========================
   상품 정보 출력
========================= */

function showProduct() {


    if (product === null) {

        alert(
            "상품을 찾을 수 없습니다."
        );

        return;

    }


    document
        .getElementById(
            "product-image"
        )
        .src =
        product.image;


    document
        .getElementById(
            "product-name"
        )
        .innerText =
        product.name;


    document
        .getElementById(
            "product-brand"
        )
        .innerText =
        product.brand;


    document
        .getElementById(
            "product-price"
        )
        .innerText =
        product.price.toLocaleString()
        + "원";


    document
        .getElementById(
            "product-discount"
        )
        .innerText =
        product.discount;


    document
        .getElementById(
            "product-review"
        )
        .innerText =
        product.review;

}



/* =========================
   장바구니 추가
========================= */

function addToBag() {


    if (product === null) {

        return;

    }


    let cart =
        JSON.parse(
            localStorage.getItem(
                "ourtCart"
            )
        ) || [];


    let found =
        false;


    for (
        let i = 0;
        i < cart.length;
        i++
    ) {


        if (
            cart[i].id ===
            product.id
        ) {


            cart[i].quantity++;


            found =
                true;


            break;

        }

    }



    if (found === false) {


        cart.push({

            id:
                product.id,

            name:
                product.name,

            brand:
                product.brand,

            price:
                product.price,

            size:
                product.size,

            image:
                product.image,

            quantity:
                1

        });

    }



    localStorage.setItem(

        "ourtCart",

        JSON.stringify(
            cart
        )

    );


    updateBagCount();


    alert(
        "장바구니에 상품을 담았습니다."
    );

}



/* =========================
   장바구니 숫자
========================= */

function updateBagCount() {


    const cart =
        JSON.parse(
            localStorage.getItem(
                "ourtCart"
            )
        ) || [];


    let count =
        0;


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



onlineStoreMenu.addEventListener(

    "mouseenter",

    function() {


        clearTimeout(
            storeTimer
        );


        storePanel
            .classList
            .add(
                "show"
            );

    }

);



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

                200

            );

    }

);



storePanel.addEventListener(

    "mouseenter",

    function() {


        clearTimeout(
            storeTimer
        );

    }

);



storePanel.addEventListener(

    "mouseleave",

    function() {


        storePanel
            .classList
            .remove(
                "show"
            );

    }

);



/* =========================
   페이지 실행
========================= */

showProduct();

updateBagCount();