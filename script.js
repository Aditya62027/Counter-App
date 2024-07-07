const countValue = document.querySelector('#counter');

const increment = () => {

    // get value from ui
    let value = parseInt(countValue.innerText);
    // update value
    value = value+1;
    // set the value
    countValue.innerText = value;
};

const decrement = () => {
    // get value from ui
    let value = parseInt(countValue.innerText);
    // update value
    value = value-1;
    // set the value
    countValue.innerText = value;

};