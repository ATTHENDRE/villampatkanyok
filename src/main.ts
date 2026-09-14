import { ElectricRat } from "./electric"

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("ujform")?.addEventListener('submit', Uj)
})


const adatok : ElectricRat[] = []

function Uj(e:SubmitEvent){
    e.preventDefault();

    const ujnev = document.getElementById("nev") as HTMLInputElement

    const ujPatkany = new ElectricRat(
        ujnev.value,
        Math.floor(Math.random()*11) + 10, 
        Math.floor(Math.random()*51) + 50 
    )

    adatok.push(ujPatkany)


    loadData()
    

}

function loadData(){
    const lista = document.getElementById("kartyak")

    for(const item of adatok){
        const div = document.createElement("div")
        

        const nev = document.createElement("h2")
        nev.textContent = item.name
        div.appendChild(nev)

        const atk = document.createElement("p")
        atk.textContent = item.atk.toString()
        div.appendChild(atk)

        const hp = document.createElement("p")
        hp.textContent = item.hp.toString()
        div.appendChild(hp)


        lista?.appendChild(div)

    }


}
