/* model (Daten) */

let data = {
    milk: { lower: 0, upper: 5, bev: "Milch", arr: ["milch"] },
    juice: { lower: 6, upper: 12, bev: "Saft", arr: ["milch", "saft"] },
    cola: { lower: 13, upper: 17, bev: "Cola", arr: ["milch", "saft", "cola"] },
    wine: { lower: 18, upper: 120, bev: "Wein", arr: ["milch", "saft", "cola", "wein"] },
    tea: { lower: 121, upper: 999, bev: "Tee", arr: ["tee"] },
}

let gui =   {
                img:{   path:"./bilder/" , ext: ".jpg" },
                dom:{   btn: document.getElementById("trigBtn"),
                        field: document.getElementsByName("eingabe")[0],
                        txt: document.getElementById("outputTxt")
                }
            }