export class ElectricRat{
     
    public name : string
    public atk : number
    public hp : number


    public constructor(name: string, atk: number, hp: number){
        if(name === undefined || name === null || name === ""){
            throw new Error("Nev nem lehet üres!");
        }
        if(atk <= 0){
            throw new Error("Támadás pozitív kell legyen!");
        }
        if(hp <= 0){
            throw new Error("Hp pozitiv kell legyen!");
        }

        this.name = name;
        this.atk = atk;
        this.hp = hp;
    }

    toCSV(){
        return `${this.name};${this.atk};${this.hp}`;
    }

}