const header = document.querySelector('header');
header.style.backgroundColor = 'yellow';

const h1InHeader = header.querySelector('h1');

console.log(h1InHeader);

h1InHeader.style.fontFamily = 'Arial Black';
h1InHeader.textContent = 'Preambula';

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.border = '2px solid brown';
});

const h1InSection = document.querySelector('section.main_column h1');

console.log(h1InSection);

h1InSection.textContent = 'Specjalnosc szefa';
const mainColumn = document.querySelector('.main_column');

const footer = document.querySelector('footer');

const divElement = document.createElement('div');
divElement.style.backgroundColor = 'pink';

const pInsideDiv = document.createElement('p');
pInsideDiv.style.textAlign = 'center';
pInsideDiv.innerHTML = '&copy;';
divElement.appendChild(pInsideDiv);
footer.appendChild(divElement);


