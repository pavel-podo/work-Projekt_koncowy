(function() {


  // Zadanie 3 
  // po kliknieciu przycisku "Oblicz sume", oblicz sumę liczb WIĘKSZYCH od 10 z podanej tablicy liczb (numbersArray) i 
  // wypisz w div'ie o id: resultContainer3 tą obliczoną sumę
  
  let numbersArray = [10, 0 , 5, 11, 20, 100, 5, -8, 7];

  let numbersArrayDiv = document.getElementById('numbersArray');
  numbersArrayDiv.innerHTML = numbersArray;
  const sumArr =()=>{
    document.querySelector('#resultContainer3').innerHTML= numbersArray.reduce((a, b) => a + b,0)   
  } 
  // Kod pomocniczy ktory, wyswietla tablice na stronie
  document.querySelector('#task3SubmitButton').addEventListener('click',(e)=>{
    sumArr()
  })
  
  document.querySelector('#task4SubmitButton').addEventListener('click',()=>{
    numbersArray.push(Number(document.querySelector('#numberToAddToArray').value))
    sumArr()
    numbersArrayDiv.innerHTML = numbersArray;
    console.log(numbersArray)
  })
  
  
  console.log()
  // ROZWIĄZANIE:




  

  // Zadanie 4

  // PO kliknieciu przycisku "Dodaj liczbe",
  // do tablicy: "numbersArray" dodaj kolejna liczbe podana przez uzytkownika w inpucie o id: numberToAddToArray
  
  // Dodatkowo lista liczb ktora jest widoczna na stronie (zadanie 3) powinna zostac odswiezona (powinna rozniez wyswietlac ta dodana liczbe)
  // UWAGA: jezeli chcesz z inputa dostac liczbe, zastosuj funkcje parseInt np: parseInt(wartoscInputa)
  // UWAGA: przed dodaniem do tablicy sprawdz czy wartosc rzeczywiscie nie jest nullem (np kiedy w inpucie nie zostala podana zadna liczba)

  // ROZWIĄZANIE:


})()