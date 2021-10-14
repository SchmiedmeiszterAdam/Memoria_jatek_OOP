class Kartya {
  constructor(fajlnev, elem) {
    this.elem = elem;
    this.fajlnev = fajlnev;
    console.log(this.fajlnev);
    this.kepElem = elem.children("img");
    this.allapot = false;
    this.hatter = "kepek/hatter.jpg";
    this.setLap()
    this.elem.on("click",()=>{
        this.atvalt()
        this.kattintasTrigger()
    })
  }

  atvalt(){
    this.allapot =!this.allapot
    this.setLap()
  }

  setLap() {
    if (this.allapot) {
      this.kepElem.attr("src", this.fajlnev);
    } else {
      this.kepElem.attr("src", this.hatter);
    }
  }
  kattintasTrigger(){
      //let esemeny = new Event("kartya")
      let esemeny = new CustomEvent("kartyaKattintas",{detail:this})
      window.dispatchEvent(esemeny)
  }
  kartyaEltuntet(){
      this.elem.css("visibility","hidden")
  }
}
