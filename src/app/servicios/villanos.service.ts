import { Injectable } from '@angular/core';
import { Villano } from '../components/shared/interfaces/villano.interface';

@Injectable()
export class VillanosService{

  private villanos: Villano[] = [
    {
      nombre_pila: "Jack Napier",
      nombre: "Guason",
      bio: "Es un enemigo de Batman y su archirrival; una de las razones para considerarlo así es que ha sido responsable de numerosas tragedias en su vida, como la parálisis de Barbara Gordon y la muerte de Jason Todd quien fue el segundo Robin.",
      img: "assets/img/joker-dc.png",
      aparicion: "1949-05-27",
      casa:"DC"
    },
    {
      nombre_pila: "Lester Benjamin Poindexter",
      nombre: "Bullseyes",
      bio: " Es el archienemigo de Daredevil. Bullseye, un asesino psicopático, aprovecha las oportunidades que le brinda su línea de trabajo para ejercer sus tendencias homicidas y elaborar su propia venganza personal contra Daredevil. Cualquier objeto arrojadizo (lápices, cartas, clips, etcétera) es un arma mortal en las expertas manos del asesino conocido con el nombre de Bullseye.",
      img: "assets/img/bullseyes.png",
      aparicion: "1973-03",
      casa:"DC"
    },
    {
      nombre_pila: "David Hyde",
      nombre: "Black Manta",
      bio: "Black Manta es el archienemigo principal de Aquaman; quiénes con el paso de los años han tenido infinidad de batallas uno contra uno.",
      img: "assets/img/black-manta.png",
      aparicion: "1967-09",
      casa: "DC"
    },
    {
      nombre_pila: "Emil Blönsky",
      nombre: "Abominación",
      bio: "La Abominación es similar a Hulk en términos de fuerza, resistencia, velocidad, durabilidad y capacidad de regeneración lo que lo hace ser inmortal. En contraste con Hulk, él conserva su intelecto después de su transformación, y no puede volver a su forma humana.",
      img: "assets/img/abominacion.png",
      aparicion: "1967-04",
      casa:"Marvel"
    },
    {
      nombre_pila: "Thaal Sinestro",
      nombre: "Thaal Sinestro de Korugar",
      bio: "Sinestro nació en el planeta Korugar en el sector espacial 1417. Su dedicación a preservar el orden se manifestó originalmente en su carrera anterior, un antropólogo especializado en reconstrucciones de ruinas de civilizaciones muertas hace mucho tiempo.",
      img: "assets/img/Sinestro.png",
      aparicion: "1961-08-07",
      casa: "DC"
    },
    {
      nombre_pila: "Harry Osborn",
      nombre: "Duende Verde",
      bio: " El Duende Verde parece ser un hombre normal (aunque muy ágil y atlético) que obtiene sus poderes de sus muchos artilugios. En apariciones posteriores, se establece que debido a la 'Fórmula Duende', Norman y la mayoría de los sucesores de la persona Duende poseen fuerza sobrehumana (levantando 9 toneladas en condiciones óptimas).",
      img: "assets/img/duende-verde.png",
      aparicion: "1964-07-14",
      casa: "Marvel"
    },
    {
      nombre_pila: "Erik Lehnsherr",
      nombre: "Magneto",
      bio: "Un poderoso terrorista mutante con la habilidad de generar y controlar campos magnéticos mentales, Magneto ha sido el enemigo más eminente que hayan tenido los X-Men desde su creación",
      img: "assets/img/magneto.jpg",
      aparicion: "1963-9-01",
      casa: "Marvel"
    }
  ];

  constructor() {
    console.log("Servicio Arriba!!!");
  }
  
  getVillanos(): Villano[]{
    return this.villanos;
  }
  getVillano(idx: string) {
    return this.villanos[idx];
  }
  buscarVillanos(termino: string):Villano[]{
    
    let villanoArr: Villano[] = [];
    termino = termino.toLowerCase();

    for (let index = 0; index < this.villanos.length; index++) {

      let villano = this.villanos[index];
      let nombre = villano.nombre.toLowerCase();

       // batman  == b
      if (nombre.indexOf(termino) >= 0) {
        villano.idx = index;
        villanoArr.push(villano);
      }
      
    }
    return villanoArr;
  }

}