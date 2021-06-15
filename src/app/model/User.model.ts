export class User{
    id : number=0;
    userName : string;
    userMailid : string;
    userMobileNo : number;
    userPassword : string;
    confirmPassword: string;

    constructor(userName : string, userMailid : string, userMobileNo : number, userPassword : string,confirmPassword:string){
        this.userName = userName;
        this.userMailid = userMailid;
        this.userMobileNo = userMobileNo;
        this.userPassword = userPassword;
        this.confirmPassword=confirmPassword;
    }
}