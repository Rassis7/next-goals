import {
  getYear, getMonth, getDate, getHours, getMinutes, parseISO, format,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';

export class FormatDate {
  localDate: string | Date;

  constructor(readonly date: string | Date) {
    this.localDate = date
  }

  static set(date: string | Date = new Date()) {
    if (typeof date === 'string') {
      const reverseDate = FormatDate.getStringFormat(date)
      const dateUTC = FormatDate.getUTCDate(parseISO(reverseDate))
      return new FormatDate(dateUTC)
    }
    const dateUTC = FormatDate.getUTCDate(date)
    return new FormatDate(dateUTC)
  }

  getBRFormat(response: 'string' | 'Date' = 'Date', returnTime = false) {
    const dateGMT = utcToZonedTime(this.localDate, 'America/Sao_Paulo')
    if (response === 'Date') {
      this.localDate = dateGMT
      return this
    }

    this.localDate = FormatDate.getFormat(this.localDate, 'dd/MM/yyyy', returnTime)
    return this
  }

  getENFormat(response: 'string' | 'Date' = 'Date', returnTime = false) {
    const dateGMT = utcToZonedTime(this.localDate, 'America/Sao_Paulo')
    if (response === 'Date') {
      this.localDate = dateGMT
      return this
    }
    this.localDate = FormatDate.getFormat(this.localDate, 'yyyy-MM-dd', returnTime)
    return this
  }

  build() {
    return this.localDate
  }

  private static getFormat(dateParam: Date | string, maskParam: string, returnTime: boolean) {
    const date = typeof dateParam === 'string' ? parseISO(dateParam) : dateParam
    const mask = `${maskParam} ${returnTime ? 'HH:mm' : ''}`.trim()
    return format(date, mask, { locale: ptBR });
  }

  private static getStringFormat = (date: string) => {
    const [dateValue, time] = date.split(' ');
    const onlyDate = dateValue.includes('/')
      ? dateValue.split('/')
      : dateValue.split('-');
    return `${onlyDate.reverse().join('-')} ${time}`.trim();
  }

  private static getUTCDate = (dateParam: Date | number):Date => {
    const dateFormatInUtc = Date.UTC(
      getYear(dateParam),
      getMonth(dateParam),
      getDate(dateParam),
      getHours(dateParam),
      getMinutes(dateParam),
    )
    return new Date(dateFormatInUtc)
  }
}
