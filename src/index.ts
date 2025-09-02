function CalculateTax(TaxYear = 2022, Tax: number) {
  if (TaxYear < 2022) return Tax * 1.5
  return Tax*1.2
}

CalculateTax(2024, 10_000)

type Employee ={
    id: number,
    name: string,
    expire: (date:Date) => void
}

let employee: Employee = {
    id: 1,
    name:"alamin",
    expire: (date:Date)=>console.log(date)
}