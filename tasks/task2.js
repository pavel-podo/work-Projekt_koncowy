(function() {


  // Zadanie 2
  // Pobierz dwie wartosci z inputow ("firstNumberToCompare", "secondNumberToCompare") i sprawdz ktora liczba jest wieksza.
  // Następnie w div'ie o id: resultContainer2 po kliknieciu w przycisk "Porownaj" dodaj napis: 
  // "Wieszka liczba jest ..." (gdzie w miejsce 3 kropek trzeba wpisac ta liczbe)
  
  // UWAGA: Pamietaj ze div z rezultatem ma ustawiony atrybut CSS: "display" na wartość none, a więc oznacza ze nie wyswietli sie na stronie
  // Nalezy tak zmienic ten atrybut zeby napis byl widoczny na stronie (wartosc: 'block')

  // UWAGA: jezeli chcesz z inputa dostac liczbe, zastosuj funkcje parseInt np: parseInt(wartoscInputa)

  
  document.querySelector('#task2SubmitButton').addEventListener('click',(e)=>{
    const a = Number(document.querySelector('#firstNumberToCompare').value)
    const b = Number(document.querySelector('#secondNumberToCompare').value)
    const resultContainer = document.querySelector('#resultContainer2')
    if (a>b){
      resultContainer.innerHTML=`Wieszka liczba jest ${a}`
      resultContainer.style.display ='block'
    }
    if(b>a){
      resultContainer.innerHTML=`Wieszka liczba jest ${b}`
      resultContainer.style.display ='block'

    }
    console.log(a,b)
  })






})();