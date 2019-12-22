const button = document.querySelector('#btn');
const select = document.querySelector('#select');
const opis = document.querySelector('#opis');
const iznos = document.querySelector('#iznos');
const rashod = document.querySelector('#rashod');
const prihod = document.querySelector('#prihod');
const prihodiContainer = document.querySelector('#prihodi');
const rashodiContainer = document.querySelector('#rashodi');
const container = document.querySelector('#container');
const prihodiCounter = document.querySelector('#prihodi-counter');
const rashodiCounter = document.querySelector('#rashodi-counter');
const prihodiSpan = document.querySelector('#prihodi-span');
const rashodiSpan = document.querySelector('#rashodi-span');
const rashodiProcenat = document.querySelector('#rashodi-procenat');

let counter = 0;
let counterPrihodi = 0;
let counterRashodi = 0;
let counterProcenat = 0;

button.addEventListener('click',Unesi);

function Unesi(){
    let opisTxt = opis.value;
    if( opisTxt == ''){return alert('Opis Rashoda/Prihoda Ne Moze Biti Prazan!!!')};
    if( ! isNaN(opisTxt)){return alert('Opis Rashoda/Prihoda Ne Moze Biti Samo Broj!!!')};
    let iznosTxt = iznos.value;
    if( iznosTxt == ''){return alert('Iznos Ne Moze Biti Prazan!!!')};
    if( iznosTxt <= 0 ){return alert('Iznos Ne Moze Biti Negativan Ili Jednak 0!!!')};
    if( isNaN(iznosTxt)){return alert('Iznos Mora Biti Broj')};
    let createDivOpis = document.createElement('div');
    let createDivIznos = document.createElement('div');
    let createElementBtn = document.createElement('button');
    if(rashod.selected){ 
        counterRashodi += Number(iznosTxt); 
        rashodiCounter.innerHTML = `-${counterRashodi}`;
        createDivOpis.className ='rashodiDiv';
        createDivIznos.className = 'rashodiDiv';
        createElementBtn.className = 'button';
        createDivOpis.innerHTML = opisTxt;
        createDivIznos.innerHTML = `-${iznosTxt}`;
        createElementBtn.innerHTML = "Delete";
        createElementBtn.addEventListener('click', (e)=>{
            counterRashodi += Number(e.target.previousElementSibling.textContent);
            counter -= Number(e.target.previousElementSibling.textContent);
            rashodiCounter.innerHTML = `-${counterRashodi}`;
            container.innerHTML = counter;
            createDivOpis.remove();createDivIznos.remove();createElementBtn.remove();});
        rashodiContainer.appendChild(createDivOpis);
        rashodiContainer.appendChild(createDivIznos);
        rashodiContainer.appendChild(createElementBtn); 
    }

    else{ 
        counterPrihodi += Number(iznosTxt); 
        prihodiCounter.innerHTML = `+${counterPrihodi}`;
        createDivOpis.className ='prihodiDiv';
        createDivIznos.className = 'prihodiDiv';
        createElementBtn.className = 'button';
        createDivOpis.innerHTML = opisTxt;
        createDivIznos.innerHTML = `+${iznosTxt}`;
        createElementBtn.innerHTML = "Delete";
        createElementBtn.addEventListener('click', (e)=>{
            counterPrihodi -= Number(e.target.previousElementSibling.textContent);
            counter -= Number(e.target.previousElementSibling.textContent);
            prihodiCounter.innerHTML = `+${counterPrihodi}`;
            container.innerHTML = counter;
            createDivOpis.remove();createDivIznos.remove();createElementBtn.remove();});
        prihodiContainer.appendChild(createDivOpis);
        prihodiContainer.appendChild(createDivIznos);
        prihodiContainer.appendChild(createElementBtn);
    }
   
    //Pokusao sam da namestim procenat ali ne radi lepo nakon brisanja stavki iz prihoda ili rashoda
    //let procenat = (counterRashodi/counterPrihodi)*100; 
    //rashodiProcenat.innerHTML = `(${procenat}%)`;

    counter = counterPrihodi - counterRashodi;
    container.innerHTML = counter;
    container.className = 'container';
    
    opis.value = '';
    iznos.value = '';
}
