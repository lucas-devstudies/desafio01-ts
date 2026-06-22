import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TesteAccount } from './class/TesteAccount'

//Essa não pega porque é uma classe abstrata
//const DA: DioAccount = new DioAccount('DIO', 20)
//console.log(DA)

console.log('---------------------------------')
const PA: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(PA)
console.log('Depois da Alteração:')
PA.deposit(100)
PA.getName()
PA.withdraw(5)

console.log('---------------------------------')
const CA: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(CA)
console.log('Depois da Alteração:')
CA.getLoan(50)

console.log('---------------------------------')
const TA:TesteAccount = new TesteAccount('Lucas',20)
console.log(TA)
console.log('Depois da Alteração:')
TA.depositPlus10(100)
