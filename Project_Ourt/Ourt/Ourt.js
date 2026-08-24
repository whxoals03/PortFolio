const onlineStoreMenu = document.getElementById("online-store-menu");
const storePanel = document.getElementById("store-panel");

let storeTimer;


/* ONLINE STORE에 마우스를 올렸을 때 */
onlineStoreMenu.addEventListener("mouseenter", function() {

    clearTimeout(storeTimer);

    storePanel.classList.add("show");

});


/* ONLINE STORE에서 마우스가 벗어났을 때 */
onlineStoreMenu.addEventListener("mouseleave", function() {

    storeTimer = setTimeout(function() {

        storePanel.classList.remove("show");

    }, 200);

});


/* 드롭다운 메뉴에 마우스를 올렸을 때 */
storePanel.addEventListener("mouseenter", function() {

    clearTimeout(storeTimer);

});


/* 드롭다운 메뉴에서 마우스가 벗어났을 때 */
storePanel.addEventListener("mouseleave", function() {

    storePanel.classList.remove("show");

});