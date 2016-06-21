// Use Array.from

document.body.innerHTML = `
  <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
`;


Array.from(document.querySelectorAll('li')).forEach(el =>{
    console.log(el.innerText);
})


/////////////////////////////* NOTES */////////////////////////////

//ul>li*10>{$} creates a list of 10 numbers 1-10 ($ makes #s)

// Get the text corresponding the every list element
const numbers = Array.from(document.querySelectorAll("li")).map(el => el.innerText);

document.body.innerHTML = "${numbers}";


const family = [
    {age: 23, name: "Alden"},
    {age: 26, name: "Vaughn"},
    {age: 0, name: "Tycho"},
    {age: 0, name: "Tayla"}];

// Returns object if return statement is true; finds only the first one
// Returns undefined if doesn't find
const vaughn = family.find(function(member) {return member === "Vaughn"});

const twentyThreeYO = family.find(member => member.age === 23);

// Gives the index of the object it finds
const id = family.findIndex(member => member.age === 23);

document.body.innerHTML = "${vaughn}";
