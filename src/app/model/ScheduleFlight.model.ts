export class ScheduleFlight{
    id : number=0;
    flightName : string;
    flightNumber : string;
    totalSeat : number;
    source : string;
    destination : string;
    departureTime : Date;
    arrivalTime : Date;
    ticketRate : number;

    constructor(flightName : string, flightNumber : string, totalSeat :number, source : string, destination : string, departureTime : Date, arrivalTime : Date, ticketRate: number){
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