
import moment from "moment"
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


const getWeekList = () => {
    const date = new Date()
    const arr = []
    const dayNow = date.getDay() 
    const dateNow = date.getDate()
    
    for (let index = 0; index <= 6; index++) {
        const date = moment().add(index-dayNow, 'days').date()
        arr.push({
            day: WEEK[index],
            date: date,
            today: date === dateNow 
        })
    }
    return arr
}

const getTimeList = () => {
    let startDate = new Date ('11/16/2021, 6:30:00 AM')
    let endDate = new Date ('11/16/2021, 6:30:00 PM')
    const arr = []
    for (let index = startDate.getTime(); index <= endDate.getTime(); index+= 1000*60*30) {
        const string = '0' + moment(new Date(index)).format('LT')
        arr.push(string.slice(-8))
    }     
    return arr
}


export {
    getWeekList,
    WEEK,
    getTimeList
}