export class BookFlight{
    flightName : string;
    flightNumber : string;
    totalSeat : number;
    source : string;
    destination : string;
    departureTime : Date;
    arrivalTime : Date;
    durationHrs : number;
    durationMins : number;
    ticketRate : number;

    constructor(flightName : string, flightNumber : string, totalSeat :number, source : string, destination : string, departureTime : Date, arrivalTime : Date, durationHrs : number, durationMins : number, ticketRate: number){
        this.flightName = flightName;
        this.flightNumber = flightNumber;
        this.totalSeat = totalSeat;
        this.source = source;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.durationHrs= durationHrs;
        this.durationMins= durationMins;
        this.ticketRate =  ticketRate;
    }
}