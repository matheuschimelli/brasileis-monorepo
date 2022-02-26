import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'// dependent on utc plugin
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import customParseFormat from 'dayjs/plugin/customParseFormat'


dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('pt-br')
dayjs.tz.setDefault("America/Sao_Paulo")
dayjs.extend(relativeTime)
dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(customParseFormat)

export default dayjs

export function dateToText(date: Date) {
    console.log('datee', date)
    return dayjs(date).locale('pt-br').format("dddd D [de] MMMM [de] YYYY ").toString()
}

