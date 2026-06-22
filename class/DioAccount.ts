export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
  getName = (): string => {
    return this.name
  }

  deposit = (value:number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce depositou R$'+this.balance)
    }
    else{
      console.log('Parece que você não pode realizar depósito :/');
    }
  }

  withdraw = (value:number): void => {
    if(this.validadeBalance(value) && this.validateStatus()){
      this.balance-=value
      console.log('Voce sacou R$'+this.balance)
    }else{
      console.log('Algo saiu errado :/')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
  private validadeBalance = (value:number):boolean=>{
    if(this.balance>=value){
      return true;
    }

    throw new Error();
  }
}
