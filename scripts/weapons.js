let weapon_container = document.getElementById("weapon_container");
let weapons_data_local = readWeaponData(weapons_data);
let weapons_catagory = ["Rifles", "Pistols", "SMGs", "Heavy"];

function readWeaponData(data_in) {
    let data = JSON.parse(data_in);
    return data["weapons_data"];
}

function renderWeaponWithCatagory(cata) {
    clearWeapons();
    let back_node = document.createElement("div");
    back_node.classList.add("back_btn", "hover_link", "clickable");
    back_node.id = "back_btn";
    back_node.addEventListener("click", () => {
        renderCatagory();
    })
    back_node.textContent = "< Back";
    weapon_container.append(back_node);

    weapon_container.classList.remove("weapon_category");
    weapon_container.classList.add("weapon_list");

    for (let weapon of weapons_data_local) {
        if (weapon["catagory"] != cata) {
            continue;
        }
        let weapon_name = weapon["name"];
        let item_node = document.createElement("div");
        item_node.classList.add("flip-card", "list_item");
        let flip_card_node = document.createElement("div");
        flip_card_node.classList.add("flip-card-inner");
        let flip_card_front_node = document.createElement("div");
        flip_card_front_node.classList.add("flip-card-front", "panel");
        let flip_card_back_node = document.createElement("div");
        flip_card_back_node.classList.add("flip-card-back");
        
        let item_img_node = document.createElement("img");
        item_img_node.setAttribute("src", "../imgs/CSGO_" + weapon_name.replace(" ", "_") + "_Inventory.png");
        item_img_node.setAttribute("alt", weapon_name);
        item_img_node.classList.add("item_img");

        let item_name_node = document.createElement("div");
        item_name_node.classList.add("item_name");
        item_name_node.textContent = weapon_name;

        let item_description_node = document.createElement("div");
        item_description_node.classList.add("item_descript", "descript");
        item_description_node.textContent = weapon["description"];

        flip_card_front_node.append(item_img_node);
        flip_card_front_node.append(item_name_node);
        flip_card_front_node.append(item_description_node);

        let add_ons = {"price": "Price", "reward": "Reward", "damage": "Damage", "ap": "Armor Penetration", "rpm": "Fire rate", "magazine": "Magazine size"};
        for (let add_on in add_ons) {
            let local_val = weapon[add_on];
            let local_node = document.createElement("p");
            if (add_on === "rpm") {
                local_val = parseFloat(local_val).toFixed(2);
            }
            local_node.textContent = add_ons[add_on] + ": " + local_val;
            flip_card_back_node.append(local_node);
        }

        flip_card_node.append(flip_card_front_node);
        flip_card_node.append(flip_card_back_node);

        item_node.append(flip_card_node);

        weapon_container.append(item_node);
        console.log(weapon);
    }
}

function renderCatagory() {
    clearWeapons();
    for (let catagory of weapons_catagory) {
        weapon_container.classList.add("weapon_category");
        weapon_container.classList.remove("weapon_list");
        let item_node = document.createElement("div");
        item_node.classList.add("list_item", "clickable", "panel");
        item_node.addEventListener("click", () => {
            renderWeaponWithCatagory(catagory);
        })
        
        let item_img_div_node = document.createElement("div");
        item_img_div_node.classList.add("icon_div", "item_img");

        let item_img_node = document.createElement("img");
        item_img_node.setAttribute("src", "../imgs/" + catagory + ".png");
        item_img_node.setAttribute("alt", catagory);
        item_img_node.classList.add("icon_img");
        //item_img_div_node.append(item_img_node);

        let item_name_div_node = document.createElement("div");
        item_name_div_node.classList.add("icon_name_div");

        let item_name_node = document.createElement("p");
        item_name_node.classList.add("icon_name");
        item_name_node.textContent = catagory;
        
        item_img_div_node.append(item_img_node);
        item_name_div_node.append(item_name_node);
        item_node.append(item_img_div_node);
        item_node.append(item_name_div_node);

        weapon_container.append(item_node);
        console.log(catagory);
    }
}

function clearWeapons () {
    while (weapon_container.firstChild) {
        weapon_container.removeChild(weapon_container.firstChild);
    }
}

renderCatagory();

//renderWeaponWithCatagory("Rifles");


