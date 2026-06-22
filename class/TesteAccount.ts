import { DioAccount } from "./DioAccount";

export class TesteAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    depositPlus10 = (value:number):void => {
        if(this.validateStatus()){
            this.balance +=(value+10)
            console.log('Você depositou R$'+(value+10))
        }else{
            throw new Error();
        }
    }
}