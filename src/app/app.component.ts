import { Component } from '@angular/core';
import { CardData } from './cards/interfaces/CardData.interface';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from './restart/restart-dialog/restart-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-card-game';

  //para crear la cuadrícula de tarjetas usando una matriz de tarjetas de juego
  //creamos la matriz para almacenar nuestras cadenas de imageID
  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0'
  ];
  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  constructor(private dialog: MatDialog) {}


  ngOnInit(): void {
    this.setupCards();
  }

  //esta función recorre los ID de imagen de nuestra tarjeta,
  //crea un objeto CardData para cada uno y luego envía dos
  //copias del objeto a nuestra matriz de tarjetas.
  setupCards(): void {
    this.cards = [];
    
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };
      this.cards.push({ ...cardData });   //importante ... (operador de propagación) porque queremos nuevos objetos con los mismos datos, no copias por referencia.
      this.cards.push({ ...cardData });
    });
    
    this.cards = this.shuffleArray(this.cards);
  }

  //esta función mezcla las cartas
  shuffleArray(anArray: any[]): any[] {
  return anArray.map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
    // Se convierte en una matriz de matrices, con un número aleatorio como primer miembro y el objeto CardData como segundo miembro.
    // Ordena la matriz según el primer miembro, lo que da como resultado una clasificación aleatoria
    // Se convierte de nuevo en una matriz del segundo miembro, que es nuestro objeto CardData


  }
  //función que se activa al hacer click en una tarjeta
  //recibe el index de la carta que se selecciona al hacer click
  cardClicked(index: number): void {
    const cardInfo = this.cards[index];
    
    //el .length<2 para evitar que se muevan más de 2 cartas a la vez
    //se cambia el estado de la tarjeta de default a flipped y al revés
    if (cardInfo.state === 'default' && this.flippedCards.length < 2)  {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);   //se guardan en la matriz flippedCards las cartas que están volteadas
      
      if (this.flippedCards.length === 2) { //cuando la matriz contiene dos cartas volteadas se llama al método que comprueba si coinciden
        this.checkForCardMatch();
     }
     
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  //este método comprueba si existe una coincidencia entre dos cartas
  checkForCardMatch(): void {
    //se usa el setTimeout para dar tiempo a que se completen las animaciones antes de verificar si hay o no coincidencias
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];

      //averiguamos cuál debería ser el siguiente estado de las tarjetas,
      //en función de si su ID de imagen es igual o no.
      //Si coinciden, lo configuramos para que coincida.
      //De lo contrario, los restablecemos a los valores predeterminados
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        //cuando el contador sea igual a la cantidad de imágenes que tenemos se muestra el diálogo que te felicita y te permite reiniciar el juego
        if (this.matchedCount === this.cardImages.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 1000);
  }

  //esta función permite al usuario reiniciar el juego
  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
}


