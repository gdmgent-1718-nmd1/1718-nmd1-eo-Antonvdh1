const unfold = document.querySelector('.unfold');
const init = () => {
    const users = document.querySelectorAll('.user');
    for (let i = 0; i < users.length; i++) { 
        if (users[i].id%2==0){
            users[i].classList.add("even");
        }
    }
}
const overHandler = e => {
    unfold.classList.remove('hidden');
}
const outHandler = e => {
    unfold.classList.add('hidden');
}

let cirkel = document.querySelector('.cirkel');
cirkel.addEventListener('mouseover', overHandler);
cirkel.addEventListener('mouseout',outHandler);

init();