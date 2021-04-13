interface IInvoiceSchema {
  pos: number;
  name: string;
  exampleData: string;
}

export const importInvoicesSchema: IInvoiceSchema[] = [
  { pos: 1, name: 'Invoice number', exampleData: 'INV/001/02/2020' },
  { pos: 2, name: 'Status', exampleData: 'Issued' },
  { pos: 3, name: 'Payer', exampleData: 'Some Company Ltd.' },
  { pos: 4, name: 'Date of sale', exampleData: '01.01.2020' },
  { pos: 5, name: 'Date of issue', exampleData: '05.01.2020' },
  { pos: 6, name: 'Due date', exampleData: '30.01.2020' },
  { pos: 7, name: 'NETT value', exampleData: '1000' },
  { pos: 8, name: 'NETT currency', exampleData: 'EUR' },
  { pos: 9, name: 'TAX value', exampleData: '230' },
  { pos: 10, name: 'TAX currency', exampleData: 'EUR' },
  { pos: 11, name: 'GROSS value', exampleData: '1230' },
  { pos: 12, name: 'GROSS currency', exampleData: 'EUR' },
  { pos: 13, name: 'NETT value in branch currency', exampleData: '4000' },
  { pos: 14, name: 'NETT branch currency', exampleData: 'PLN' },
  { pos: 15, name: 'TAX value in branch currency', exampleData: '1230' },
  { pos: 16, name: 'TAX branch currency', exampleData: 'PLN' },
  { pos: 17, name: 'GROSS value in branch currency', exampleData: '5230' },
  { pos: 18, name: 'GROSS branch currency', exampleData: 'PLN' },
];
