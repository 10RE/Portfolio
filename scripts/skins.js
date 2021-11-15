let skin_container = document.getElementById("skin_container");
let skins_data_local = readWeaponData(skins_data);
console.log(skins_data_local);
renderSkin();

function readWeaponData(data_in) {
    let data = JSON.parse(data_in);
    return data["skins_data"];
}

function renderSkin() {
    clearSkins();

    for (let skin of skins_data_local) {
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
        item_price_node.classList.add("price");
        item_price_node.textContent = "$" + skin["price"];

        item_price_div_node.append(item_price_node);
        item_node.append(item_img_node);
        item_node.append(item_name_node);
        item_node.append(item_price_div_node);

        skin_container.append(item_node);
        console.log(skin);
    }
}

function clearSkins () {
    if (!skin_container.firstChild) {
        return;
    }
    while (skin_container.firstChild) {
        skin_container.removeChild(skin_container.firstChild);
    }
}

//renderWeaponWithCatagory("Rifles");


