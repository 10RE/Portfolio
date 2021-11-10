let weapon_container = document.getElementById("weapon_container");

let data = JSON.parse(weapons_data);
data = data["weapons_data"];
for (let weapon of data) {
    let weapon_name = weapon["name"];
    let item_node = document.createElement("div");
    item_node.classList.add("list_item");
    
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

    item_node.append(item_img_node);
    item_node.append(item_name_node);
    item_node.append(item_description_node);

    weapon_container.append(item_node);
    console.log(weapon);
}

