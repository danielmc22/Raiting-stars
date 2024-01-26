//Referencias
const raitingContainer = document.querySelector('.raiting');
let currentValue = 0;
const limit = 10;

const html = Array.from(Array(limit)).map((item, i) => {    //constructor de array que permite generar un arreglo mediante el parametro que ingrese
    return `<div class="item item-${i}" data-pos="${i}"></div>`
});

raitingContainer.innerHTML = html.join(""); //Se convierte un array en String;

document.querySelectorAll(".item").forEach( item => {
    item.addEventListener('mouseover', (e) => {
        const position = item.getAttribute('data-pos');

        if(currentValue == parseInt(position) + 1){
            return;
        }

        document.querySelectorAll('.item').forEach(it => {
            if(it.classList.contains('item-full')){
                it.classList.remove('item-full')
            }
        });

        for(let i = 0; i <= position; i++){   //Se hace un recorrido hasta la posición
          const square = document.querySelector(`.item-${i}`)
            if(!square.classList.contains('item-full')){
            square.classList.add('item-full')
            }
        }
        currentValue = parseInt(position) + 1;
    });

    item.addEventListener("click", (e) => {
      const position = item.getAttribute("data-pos");
      currentValue = (parseInt(position) + 1);
      console.log(currentValue)
    })
});
