let onePt = document.getElementById("one-pt")
let twoPts = document.getElementById("two-pts")
let threePts = document.getElementById("three-pts")


let homePts = document.getElementById("home-pts")
let guestPts = document.getElementById("guest-pts")
let points = 0




function homeAddPoint() {
  points += 1
  homePts.textContent = points

}
function homeAddTwoPoints() {
     points += 2
     homePts.textContent = points
}
function homeAddThreePoints() {
    points += 3
    homePts.textContent = points
}




function guestAddPoint() {
  points += 1
  guestPts.textContent = points

}
function guestAddTwoPoints() {
    points += 2
    guestPts.textContent = points
  
}

function guestAddThreePoints() {
    points += 3
  guestPts.textContent = points
}
