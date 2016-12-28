var moment = require('moment')
export const timestampFormat = (timestamp, format) => {
  let result
  console.log(format)
  timestamp = parseInt(timestamp)
  if (!timestamp) {
    result = '-'
  } else if (format) {
    result = moment(timestamp).format(format)
  } else {
    result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
  }
  return result
}
