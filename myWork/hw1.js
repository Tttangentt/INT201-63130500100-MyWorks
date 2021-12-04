function reverse(str){
    let text = str;
    let rev = '';
    for(let i = text.length-1; i >= 0 ; i--){
        rev += text[i];
    } 
    console.log(rev);
}


function replace(str){
    let text= str;
    let check = '';
    let New = '';
    for(let i = 0; i < text.length ; i++){
        check = text[i];

        if(check == 'a'||check == 'e'||check == 'i'||check == 'o'||check == 'u'){
                New += '*';
        }else{
            New += check;
        }
    }
    console.log(New);
}

function count(str){
    let text = str;
    let check = '';
    let count = 0;
    for(let i = 0; i < text.length; i++){
        check = text[i];

        if(check == 'a'||check == 'e'||check == 'i'||check == 'o'||check == 'u'){
            count += 1;
        }
    }
    console.log(count);
}

reverse("Rawis Noiwong");
replace("Rawis Noiwong");
count("Rawis Noiwong");