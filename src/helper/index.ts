
const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const getWeekList = () => {
    const date = new Date()
    const arr = []
    const dayNow = date.getDay() 
    const dateNow = date.getDate()
    for (let index = 0; index <= 6; index++) {
        const date = dateNow - (dayNow - index - 1)
        arr.push({
            day: WEEK[index],
            date,
            today: date === dateNow 
        })
    }
    return arr
}

export {
    getWeekList,
    WEEK
}