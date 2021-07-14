import { StringLiteralLike } from "typescript";

export interface Villano{
  nombre_pila: string;
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}