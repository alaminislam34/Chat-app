function CalculateTax(TaxYear = 2022, Tax: number) {
  if (TaxYear < 2022) return Tax * 1.5
  return Tax*1.2
}

CalculateTax(2024, 10_000)