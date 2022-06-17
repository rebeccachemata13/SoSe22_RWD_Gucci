let plus_material = document.getElementById("plus_material");
let plus_versand = document.getElementById("plus_versand");
let plus_geschenk = document.getElementById("plus_geschenk");
let plus_zahlen = document.getElementById("plus_zahlen");
let plus_produkt = document.getElementById("plus_produkt");

let material_div = document.getElementById("material_div");
let versand_div = document.getElementById("versand_div");
let geschenk_div = document.getElementById("geschenk_div");
let zahlen_div = document.getElementById("zahlen_div");
let produkt_div = document.getElementById("produkt_div");

let infobox = document.createElement("p");
let versand_tabelle = document.createElement("img");
let geschenk_packung = document.createElement("img");
let oko_packung = document.createElement("img");
let infobox_geschenk = document.createElement("p");
let zahlungsmethoden = document.createElement("img");
let zahlen_info_1 = document.createElement("p");
let zahlen_info_2 = document.createElement("p");



function openMaterial(){
    if(plus_material.innerHTML=="+"){
        plus_material.innerHTML= "−";
        
        infobox.innerText= 
        "Gucci Schmuck wird aus sorgfältig ausgewählten Materialien hergestellt.\nBitte gehen Sie sorgsam damit um, damit Sie lange Freude daran haben.\n Dieses Stück wurde entsprechend geltender internationaler Vorschriften aus hypoallergenen Materialien hergestellt.\n Pflegen Sie dieses Stück, indem Sie es mit einem weichen Tuch reinigen oder polieren und es einzeln aufbewahren.";
        material_div.appendChild(infobox);
        infobox.style.textAlign="left";
        infobox.style.marginLeft="150px";
        infobox.style.marginRight="150px";
        infobox.style.fontSize="16px";
    } else {
    plus_material.innerHTML= "+";
    infobox.remove();
    }
    plus_material.style.fontWeight = "900";
}

plus_material.addEventListener("click", openMaterial);

function openVersand(){
    if(plus_versand.innerHTML=="+"){
        plus_versand.innerHTML= "−";
        
        versand_tabelle.src="images/Tabelle_Versand.png"
        versand_div.appendChild(versand_tabelle);
        

    } else {
    plus_versand.innerHTML= "+";
    versand_tabelle.remove();
    }
    plus_versand.style.fontWeight = "900";
}

plus_versand.addEventListener("click", openVersand);

function openGeschenk(){
    if(plus_geschenk.innerHTML =="+"){
        plus_geschenk.innerHTML="−";

        geschenk_packung.src="images/tuete_gucci.png";
        oko_packung.src ="images/oeko_behaelter.png";
        infobox_geschenk.innerHTML = "Die neue ökologische Verpackung im Vintage-Stil wurde mit Blick auf die Umwelt entworfen und beschafft.\nSie ist vollständig recycelbar und dient künftig als Verpackung für Bestellungen auf Gucci.com, die in einem wiederverwendbaren Gucci Shopper aus Baumwoll-Canvas geliefert werden."
        geschenk_div.appendChild(geschenk_packung);
        geschenk_div.appendChild(oko_packung);
        geschenk_div.appendChild(infobox_geschenk);

        infobox_geschenk.style.textAlign="left";
        infobox_geschenk.style.marginLeft="150px";
        infobox_geschenk.style.marginRight="150px";
        infobox_geschenk.style.fontSize="16px";
    
    } else {
    plus_geschenk.innerHTML="+";
    geschenk_packung.remove();
    oko_packung.remove(); 
    infobox_geschenk.remove(); 
    }
    plus_geschenk.style.fontWeight = "900";
}

plus_geschenk.addEventListener("click", openGeschenk);

function openZahlen() {
    if(plus_zahlen.innerHTML == "+"){
        plus_zahlen.innerHTML="−";

        zahlungsmethoden.src = "images/zahlungsmethoden.png";
        zahlen_info_1.innerHTML = "Gucci akzeptiert die folgenden Zahlungsweisen für Online-Einkäufe:"
        zahlen_info_2.innerHTML = "Bitte beachten Sie, dass bei Zahlung mit Kreditkarte Ihre Rechnungsadresse mit der Adresse auf Ihrer Kreditkartenabrechnung übereinstimmen muss."
        zahlen_div.appendChild(zahlen_info_1);
        zahlen_div.appendChild(zahlungsmethoden);
        zahlen_div.appendChild(zahlen_info_2);

        zahlen_info_1.style.textAlign="left";
        zahlen_info_1.style.marginLeft="150px";
        zahlen_info_1.style.marginRight="150px";
        zahlen_info_1.style.fontSize="16px";

        zahlen_info_2.style.textAlign="left";
        zahlen_info_2.style.marginLeft="150px";
        zahlen_info_2.style.marginRight="150px";
        zahlen_info_2.style.fontSize="16px";
        
    } else {
        plus_zahlen.innerHTML="+";
        zahlungsmethoden.remove();
        zahlen_info_1.remove();
        zahlen_info_2.remove();
        }
        plus_zahlen.style.fontWeight ="900"
}

plus_zahlen.addEventListener("click", openZahlen);


