export class Flight{
    id : number=0;
    flightName : string="";
    flightNumber : string="";

    constructor(flightName : string, flightNumber : string){
        this.flightName = flightName;
        this.flightNumber = flightNumber;
    }
}