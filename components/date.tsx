import { parseISO, format } from 'date-fns'

type DataString = { dateString: string }

export default function Date({ dateString }: DataString) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
