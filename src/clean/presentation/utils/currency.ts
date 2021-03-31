export class FormatCurrency {
  localMoney: string | number;

  private constructor(readonly money: number) {
    this.localMoney = money
  }

  static setValue(value:number) {
    return new FormatCurrency(value)
  }

  getBRL() {
    this.localMoney = this.localMoney
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return this
  }

  getBDValue() {
    this.localMoney = this.localMoney
      .toString()
      .replace(/[R$.]+/gm, '')
      .replace(/[\,]/gm, '.')
    return this
  }

  build() : string | number {
    return this.localMoney
  }
}
