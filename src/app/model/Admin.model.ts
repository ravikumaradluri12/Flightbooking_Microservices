export class Admin{
    id : number=0;
    adminid : string;
    password : string;

    constructor(adminid : string, password : string){
        this.adminid = adminid;
        this.password = password;
    }
}