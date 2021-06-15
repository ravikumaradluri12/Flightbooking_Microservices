export class tempFlight{
    id : number=0;
    flightName : string="";
    flightNumber : string="";
    totalSeat : number=0;
    source : string="";
    destination : string="";
    departureTime : string="";
    arrivalTime : string="";
    ticketRate : number=0;
    
     
    constructor(flightName : string, flightNumber : string, totalSeat :number, source : string, destination : string, departureTime : string, arrivalTime : string, ticketRate: number){
        this.flightName = flightName;
        this.flightNumber = flightNumber;
        this.totalSeat = totalSeat;
        this.source = source;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime; 
        this.ticketRate =  ticketRate;
    }
}