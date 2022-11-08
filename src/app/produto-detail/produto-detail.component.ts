import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  @Input() produto?: Produto | null;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void{
    this.produto = null
  }

}
