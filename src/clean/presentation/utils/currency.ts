export class FormatCurrency {
  localMoney: string | number;

  private constructor(readonly money: number) {
    this.localMoney = money
  }

  static setValue(value:number) {
    return new FormatCurrency(value)
  }

  getBRL() {
    this.localMoney = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.money)
    return this
  }

  getBDValue() {
    this.localMoney = this.localMoney
      .toString()
      .replace(/[R$ ]/gm, '')
      .replace(/[\.]?/gm, '')
      .replace(/[\,]/gm, '.')
    return this
  }

  build() {
    return this.localMoney
  }
}
