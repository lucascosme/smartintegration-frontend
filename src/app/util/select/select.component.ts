import { Component, OnInit, Input } from '@angular/core';
import {Brand} from '../../car/brand.model'
import * as $ from 'jquery';

@Component({
  selector: 'smt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() brands: Brand[]
  @Input() label: string

  constructor() { }

  ngOnInit() {
    this.itemSelected()
  }
  
  itemSelected(){
    $('body').on('click','.option li',function(){
      var i = $(this).parents('.select').attr('id');
      var v = $(this).children().text();
      var o = $(this).attr('id');
      $('#'+i+' .selected').attr('id',o);
      $('#'+i+' .selected').text(v);
    });
    
  }
}
