(function () {

  // Zadanie 1 
  // Pobierz wartość z inputa (id: randomNumber) i sprawdź czy jest równa szczęśliwej liczbie (7)
  // Jeżeli po kliknieciu przycisku "losuj" szczesliwa liczba rowna sie siedem w div'ie "resultContainer1" dodaj tekst "Gratulacje, wygrałeś!" 
  // (Pokolorowany na zielono), a jeżeli nie dodaj to napis "Niestety przegrałeś" (pokolorwany na czerwono)


  const luckyNumber = "7";
  document.querySelector('#task1SubmitButton').addEventListener('click', (e) => {
    //const number = Number(document.querySelector('#randomNumber').value)
    const number = document.querySelector('#randomNumber').value
    const resultContainer = document.querySelector('#resultContainer1')
    if (luckyNumber === number) {
      resultContainer.innerHTML = 'Gratulacje, wygrałeś!'
      resultContainer.style.color = 'green'
    } else {
      resultContainer.innerHTML = 'Niestety przegrałeś'
      resultContainer.style.color = 'red'
    }

  })






})();

