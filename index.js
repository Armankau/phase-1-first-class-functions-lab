const drivers = (["Antonia", "Nuru", "Amari", "Mo"])

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function() {
    return drivers.slice(2,4)
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

function createFareMultiplier(integer){
   return function(fare){return integer*fare}
}
const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers()}
