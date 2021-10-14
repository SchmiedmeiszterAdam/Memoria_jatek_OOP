$(function(){
    const szuloElem = $("article")
    const sablonElem = $(".kartya")
    const meret = 3
    const kivalasztottKartya = []
    for (let i = 0; i < meret; i++) {
        for (let x = 0; x < 2; x++) {            
            const ujElem = sablonElem.clone().appendTo(szuloElem)
            const kartya = new Kartya("kepek/kep"+ (i+1) +".png",ujElem)
        }
    }
    sablonElem.remove()
    $(window).on("kartyaKattintas",(event) =>{
        console.log(event.detail)
        kivalasztottKartya.push(event.detail)
        //console.log(kivalasztottKartya[0].fajlnev + kivalasztottKartya[1].fajlnev + kivalasztottKartya.length)
        if(kivalasztottKartya.length === 2){
            if(kivalasztottKartya[0].fajlnev === kivalasztottKartya[1].fajlnev){
                console.log("Egyforma")
                kivalasztottKartya[0].kartyaEltuntet()
                kivalasztottKartya[1].kartyaEltuntet()
                kivalasztottKartya.splice(0,2)
            }
            else{
                setTimeout(function(){
                    kivalasztottKartya[0].atvalt()
                    kivalasztottKartya[1].atvalt()
                    kivalasztottKartya.splice(0,2)
                },1000)
                
                console.log("Nem egyforma")
            }
            
        }
    })
})