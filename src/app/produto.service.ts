import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Produtos } from './mock-produto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<Produto[]> {
    const produtos = of(Produtos);
    return produtos;
  } 
}
