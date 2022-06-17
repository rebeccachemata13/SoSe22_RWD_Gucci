let price_div_2 = document.getElementById("this_is_price_div");
let price = document.createElement("price");

function declaringDots() {
    let dot1 = document.getElementById("slick-slide-control20");
    let dot2 = document.getElementById("slick-slide-control21");
    let dot3 = document.getElementById("slick-slide-control22");
    let produkt_material = document.createElement("img");
    let produkt_info_1 = document.createElement("p");
    let produkt_info_2 = document.createElement("p");
    let produkt_info_div = document.getElementById("produkt_info_div");
    let produkt_name = document.createElement("p");
    let product_name_div = document.getElementById("product_name_div");

    function priceControllerRed(){
        price.innerHTML="30 000 $";
        produkt_name.innerHTML = "HARIM RED RUBY";
        price_div_2.appendChild(price);
        product_name_div.appendChild(produkt_name);
        price.classList.add("second-headline");
        produkt_name.classList.add("first-headline");

        produkt_info_1.innerHTML = "Die Gucci Egypt Parade Kollektion setzt sich auf zeitgemäße Weise mit dem alten Ägypten außeinander und modernisiert die antike Art.\nErstellt aus den kostbarsten glänzendsten Edelsteinen, sind die Gucci Harim Pyramiden ein Hingucker in jeder Umgebung.";
        produkt_info_2.innerHTML = "Die Harim Red Ruby besteht hauptsächlich aus roten Rubinen und soll mit ihren einzigartigen Rottönen das Rote Meer symbolisieren.\nMit einer Größe von 10cm bringt sie jedem Besitzer ein Stück ägyptische Kultur in das Haus.";
        produkt_material.src = "images/Rubin.jpg";
        produkt_info_div.appendChild(produkt_material);
        produkt_info_div.appendChild(produkt_info_1);
        produkt_info_div.appendChild(produkt_info_2);
     

        produkt_info_1.style.textAlign="left";
        produkt_info_1.style.marginLeft="80px";
        produkt_info_1.style.marginRight="30px";
        produkt_info_1.style.fontSize="16px";

        produkt_info_2.style.textAlign="left";
        produkt_info_2.style.marginLeft="80px";
        produkt_info_2.style.marginRight="30px";
        produkt_info_2.style.fontSize="16px";
    }
    function priceControllerGreen(){
        price.innerHTML="45 000 $";
        produkt_name.innerHTML = "HARIM GREEN EMERALD";
        product_name_div.appendChild(produkt_name);
        price_div_2.appendChild(price);
        price.classList.add("second-headline");
        produkt_name.classList.add("first-headline");

        produkt_info_1.innerHTML = "Die Gucci Egypt Parade Kollektion setzt sich auf zeitgemäße Weise mit dem alten Ägypten außeinander und modernisiert die antike Art.\nErstellt aus den kostbarsten glänzendsten Edelsteinen, sind die Gucci Harim Pyramiden ein Hingucker in jeder Umgebung.";
        produkt_info_2.innerHTML = "Die Harim Green Emerald besteht hauptsächlich aus grünen Smaragden und soll mit ihren einzigartigen Grüntönen die Vegetation um den Nil widerspiegeln.\nMit einer Größe von 10cm bringt sie jedem Besitzer ein Stück ägyptische Kultur in das Haus.";
        produkt_info_div.appendChild(produkt_material);
        produkt_info_div.appendChild(produkt_info_1);
        produkt_info_div.appendChild(produkt_info_2);
        produkt_material.src = "images/Smaragd.jpg";
    }
    function priceControllerYellow(){
        price.innerHTML="25 000 $";
        produkt_name.innerHTML = "HARIM YELLOW SAPPHIRE";
        product_name_div.appendChild(produkt_name);
        price_div_2.appendChild(price);
        price.classList.add("second-headline");
        produkt_name.classList.add("first-headline");

        produkt_info_1.innerHTML = "Die Gucci Egypt Parade Kollektion setzt sich auf zeitgemäße Weise mit dem alten Ägypten außeinander und modernisiert die antike Art.\nErstellt aus den kostbarsten glänzendsten Edelsteinen, sind die Gucci Harim Pyramiden ein Hingucker in jeder Umgebung.";
        produkt_info_2.innerHTML = "Die Harim Yellow Sapphire besteht hauptsächlich aus gelben Saphiren und soll mit ihren einzigartigen Gelbtönen die Sahara Wüste widerspiegeln.\nMit einer Größe von 10cm bringt sie jedem Besitzer ein Stück ägyptische Kultur in das Haus.";
        produkt_material.src = "images/sapphire_gelb.jpg";
        produkt_info_div.appendChild(produkt_material);
        produkt_info_div.appendChild(produkt_info_1);
        produkt_info_div.appendChild(produkt_info_2);
        
        

        produkt_info_1.style.textAlign="left";
        produkt_info_1.style.marginLeft="80px";
        produkt_info_1.style.marginRight="30px";
        produkt_info_1.style.fontSize="16px";

        produkt_info_2.style.textAlign="left";
        produkt_info_2.style.marginLeft="80px";
        produkt_info_2.style.marginRight="30px";
        produkt_info_2.style.fontSize="16px";
    }
    
    dot1.addEventListener("click",priceControllerYellow);
    dot2.addEventListener("click",priceControllerRed);
    dot3.addEventListener("click",priceControllerGreen);
    priceControllerYellow();
}
setTimeout(declaringDots, 500);
