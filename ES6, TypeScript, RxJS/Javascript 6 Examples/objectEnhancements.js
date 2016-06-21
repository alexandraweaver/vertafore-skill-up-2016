// You now have a shorthand syntax for creating Objects that have the same property names as names of variables.

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
const person = {
    first: "John",
    last: "Lundquist"
}

// Start with what you want the final outcome to be
// Arguments: new object, what you want to copy the properties from, what you want to override
// If you don't pass in a new object, you will override properties of the object you wanted to copy properties from
const son = Object.assign ({}, person, {first: "Ben"});


document.body.innerHTML = "${son.first} ${son.last}";

