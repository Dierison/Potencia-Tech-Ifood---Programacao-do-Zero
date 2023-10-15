function balance(wins, defeats){

    let result = wins - defeats
    if(wins < defeats){
        result = 0
    }
    return result
}

function level(position){
    
    
    switch (position>=0){

        case position<=10:
            position = "Iron"
            break;    
        case  position>=11 && position<=20:
            position = "Bronze"
            break;
        case position>=21 && position<=50:
            position = "Silver"
            break;
        case position>=51 && position<=80:
            position = "Gold"
            break;
        case position>=81 && position<=90:
            position = "Diamond"
            break;
        case position>=91 && position<=100:
            position = "Legendary"
            break;
        case position>=101:
            position = "Imortal"
    }

    return position
}   

let games = balance(15585,100)
let ranked = level(games)

console.log("The Hero has a balance of "+games+" and he is in the level: "+ranked)