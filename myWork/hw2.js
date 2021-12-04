let Question1 = {
    question: '1+1=?',
    selectAns:[1,2,3,4],
    ans: 2,
    checkAns (i){let num = i;
        let score = 0;
        if(num == this.ans){
            score += 1;}
            return score;
        }
}

let Question2 = {
    question: '2+1=?',
    selectAns:[1,2,3,4],
    ans: 3,
    checkAns (i){let num = i;
        let score = 0;
        if(num == this.ans){
            score += 1;}
            return score;
        }
}

let Question3 = {
    question: '4+1=?',
    selectAns:[1,3,5,7],
    ans: 5,
    checkAns (i){let num = i;
        let score = 0;
        if(num == this.ans){
            score += 1;}
            return score;
        }
}

let Question4 = {
    question: '3-2=?',
    selectAns:[1,2,3,4],
    ans: 1,
    checkAns (i){let num = i;
        let score = 0;
        if(num == this.ans){
            score += 1;}
            return score;
        }
}

let Question5 = {
    question: '2-2=?',
    selectAns:[0,1,2,3],
    ans: 0,
    checkAns (i){let num = i;
        let score = 0;
        if(num == this.ans){
            score += 1;}
            return score;
        }
}

let player = {
    name:'Rawis',
    selectQst:[Question1.question,Question3.question,Question5.question],
    selectAns:[Question1.selectAns,Question3.selectAns,Question5.selectAns],
    Ans:[Question1.selectAns[1],Question3.selectAns[2],Question5.selectAns[0]],
    score: Question1.checkAns(Question1.selectAns[1])+Question3.checkAns(Question3.selectAns[2])+Question5.checkAns(Question5.selectAns[0])
}

console.log(player);
