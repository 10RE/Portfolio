let PAGE_DISPLAY_NUMBER = 10;

let skin_container = document.getElementById("skin_container");
let skin_page_navigation = document.getElementById("skin_page_navigation");
let skins_data_local = readWeaponData(skins_data);

console.log(skins_data_local);
renderSkin(1);
renderPageNav(1);

function readWeaponData(data_in) {
    let data = JSON.parse(data_in);
    return data["skins_data"];
}

function renderPageNav (page) {
    clearChildNodes(skin_page_navigation);
    for (let idx = 1; idx < skins_data_local.length / PAGE_DISPLAY_NUMBER; idx ++) {
        let page_nav_node = document.createElement("p");
        page_nav_node.classList.add("clickable", "page_nav", "hover_link");
        if (idx === page ) {
            page_nav_node.classList.add("selected_link");
        }
        page_nav_node.textContent = idx;
        page_nav_node.addEventListener("click", () => {
            renderSkin(idx);
            renderPageNav(idx);
        });
        skin_page_navigation.append(page_nav_node);
    }
}

function renderSkin(page) {
    clearChildNodes(skin_container);
    for (let skin of skins_data_local.slice((page-1) * PAGE_DISPLAY_NUMBER, page * PAGE_DISPLAY_NUMBER)) {
        let skin_name = skin["name"];
        let item_node = document.createElement("div");
        item_node.classList.add("list_item");
        
        let item_img_node = document.createElement("img");
        item_img_node.setAttribute("src", skin["img_url"]);
        item_img_node.setAttribute("alt", skin_name);
        item_img_node.classList.add("item_img", "skin_img");

        let item_name_node = document.createElement("div");
        item_name_node.classList.add("item_name");
        item_name_node.textContent = skin_name;

        let item_price_div_node = document.createElement("div");
        item_price_div_node.classList.add("price_div");

        let item_price_node = document.createElement("div");
        item_price_node.classList.add("price", "clickable");
        item_price_node.textContent = "$" + skin["price"];

        item_price_node.addEventListener("click", () => {
            window.open(skin["link"], "_blank");
        });

        item_price_div_node.append(item_price_node);
        item_node.append(item_img_node);
        item_node.append(item_name_node);
        item_node.append(item_price_div_node);

        skin_container.append(item_node);
        console.log(skin);
    }
}

function clearChildNodes (node) {
    if (!node.firstChild) {
        return;
    }
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

//renderWeaponWithCatagory("Rifles");


