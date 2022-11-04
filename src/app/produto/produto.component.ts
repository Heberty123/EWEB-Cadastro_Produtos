import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];
  selectedProduto?: Produto;

  constructor(private produtoService: ProdutoService) { }

  getProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe(prod => this.produtos = prod);
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  onSelect(produto: Produto): void{
    this.selectedProduto = produto;
  }

}
