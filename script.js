

// slider image start
const next = document.getElementById('next');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
let arr = [i1,i2,i3];
let counter = 0;
if (next) {  
    next.onclick = (e) => {
        arr[counter].checked = true;
        counter++;
        if(counter >=3){
            counter= 0;
        }
    };
}

const prev = document.getElementById('prev');
if (prev) {  
    prev.onclick = (e) => {
        arr[counter].checked = true;
        counter--;
        if(counter < 0){
            counter = 2;
        }
    };
}

sliderImg = () =>{
    setInterval(() => {
        arr[counter].checked = true;
        counter++;
        if(counter >=3){
            counter= 0;
        }
    }, 5000);  
}
sliderImg();

