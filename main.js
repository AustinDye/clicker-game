let clickUpgrades = {
    gloves: {
        price: 10,
        quantity: 0,
        multiplier: 1,
    },
    basket: {
        price: 500,
        quantity: 0,
        multiplier: 2,
    }
    
}

let shopUpgrades= {
    hireWorker: {
        price:1000,
        quantity: 0,
        multiplier:1,
    },
    secondStore: {
        price:2000,
        quantity: 0,
        multiplier:2,
    }
}


let score = 0
let clickMod = 1
let passive = 0
let allClicks = 0
let totalPassive = 0

function scoreClick(){
    score += clickMod
    allClicks += clickMod
    drawScores()
}

function drawScores(){
    document.getElementById('score-count').innerHTML = `Herbs ${score}`
    document.getElementById('passive1').innerHTML = `CLICKS + ${clickUpgrades.gloves.quantity + 1}<br> PRICE: ${clickUpgrades.gloves.price} TOTAL:  ${clickUpgrades.gloves.quantity}`
    document.getElementById('passive2').innerHTML = `CLICKS X 2 <br> PRICE: ${clickUpgrades.basket.price} TOTAL:  ${clickUpgrades.basket.quantity}`
    document.getElementById('passive3').innerHTML = `HERBS/1s + ${shopUpgrades.hireWorker.quantity + 1}<br> PRICE: ${shopUpgrades.hireWorker.price} TOTAL:  ${shopUpgrades.hireWorker.quantity}`
    document.getElementById('passive4').innerHTML = `INCREASE HERBS/s <br> PRICE: ${shopUpgrades.secondStore.price} TOTAL:  ${shopUpgrades.secondStore.quantity}`
    document.getElementById('total').innerHTML = `life-time herbs : ${allClicks}`
    document.getElementById('per-click').innerHTML = `Per Click: ${clickMod}`
    document.getElementById('per-sec').innerHTML = `herbs/1s: : ${passive}`
    document.getElementById('normal-herb').innerHTML = `Pick Herbs : + ${clickMod} herbs `
   
}

function autoClick(){
   score += passive 
   allClicks += passive

    drawScores()
}


function clickUpgrade(x){
    let upgrade = clickUpgrades[x]

    if(score >= upgrade.price){
        score -= upgrade.price
        upgrade.quantity++
        clickMod *= upgrade.multiplier
        clickMod += upgrade.quantity
        upgrade.price *= 2
    }
    clickUpgrades[x] = upgrade
    
    drawScores()
}

function shopUpgrade(x){
    let upgrade = shopUpgrades[x]

    if(score >= upgrade.price){
        score -= upgrade.price
        upgrade.quantity++
        passive *= upgrade.multiplier
        passive +=  upgrade.multiplier
        upgrade.price *= (upgrade.quantity + 1)
    } 
    shopUpgrades[x] = upgrade
    
    drawScores()
}
setInterval(autoClick, 1000)