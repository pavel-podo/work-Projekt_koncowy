(function() {

  // Zadanie 5

  // Po klinknieciu w przycisk "dodaj Kwadraty" za pomocą metody "createElement" stworz 5 obiektow typu "div"
  // i ustylizuj je tak by mialy wysokosc i szerokosc ustawiona na 100px (mozna to zrobic ustawiajac atrybuty "style" lub dodac class'e za pomoca metody: classname.add('...'))
  // Ustaw takze dla kazdego kwadratu inny losowy (background)kolor (mozna uzyc do tego metody getRandomColor)
  // Nastepnie kazdy kwadrat nalezy dodac do naszej strony HTML i umiescic go w div'ie o id: "squaresContainer" (METODA: appendChild)

  // Uwaga: tworzenie i dodawanie kwadratow najlepiej zrobic za pomoca petli ale jesli ktos zrobi bez nie bedzie to mialo wplywu na ocenę
  // Uwaga: nowyKwadrat.style.width = '100px' (pamiętać o cudzysłowiach)
  
  
  function getRandomColor() {
    let color = '#' + Math.floor(Math.random() * 1000000);
    return color;
  }
  document.querySelector('#task5SubmitButton').addEventListener('click',()=>{
  const  squaresContainer = document.querySelector('#squaresContainer')
  squaresContainer.innerHTML = ''  
  for (let i=0; i<5;i++  ){
      const  el = document.createElement('div')
      el.style.width = '100px' 
      el.style.height = '100px' 
      el.style.backgroundColor = getRandomColor()
      squaresContainer.appendChild(el)
    }
  })
  
  //console.log(arr)
  // ROZWIĄZANIE:
  
})()



/*
proto
 __prototip__
*/
String.prototype.hello = function(){
  return  'hello ' + this
}

/*
console.log('Arek'.hello())
console.log('Arek'.__proto__)
*/
//Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга
//чтото вроде родителя

//__proto__ - доступ к родителям элемента


/**
 * 
 * this  сылка на то место откуда вызывается
 */


/**
 * 
 * замыкание -- функция которая вызывает функцию
 */


 /**
  * class
  */

 class Animal{
  static type = 'Animal'  // 'доступна только внутри класса'
  constructor(options){
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }
  voise(){
    console.log('miav ')
  }
 }

class Cat extends Animal{
  static type ='cat'
  constructor(options){
    super(options)
    this.color = options.color
  }
}

 const animal = new Cat({
  name:'kat',
  age:5,
  color:'red',
  hasTail:true
 })
 console.log(animal)
/**
 * fetch asink away
 */

const url = 'https://uselessfacts.jsph.pl/random.json'
async function fetchAsync(){
  console.log ('fetch start')
  try{
    const resp  = await fetch (url)  
    const data = await resp.json()
    console.log(data)
  }
  catch(e){
console.error(e)
  }
 
}
//fetchAsync()

/**
 * 
 * spread
 */
const ar1 = ['red', 'white', 'black']
const ar2 = ['blue', 'green', 'yellow']
const allColor = [...ar1,...ar2]
console.log(...ar1)
console.log(ar1)
console.log(allColor)