import { Component, OnInit } from '@angular/core';
import { Brand } from './brand.model';
import { CarService } from './car.service';
import { CarModel } from './car-model.model';

@Component({
  selector: 'smt-car',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit {

  newCliente: boolean
  brands: Brand[]
  carModels: CarModel[]
  hasCarModel: boolean = true

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getAllBrands()
  }

  isNewCliente() {
    this.newCliente = true
  }

  getAllBrands() {
    this.carService.getBrands()
      .subscribe(brands => this.brands = brands)
  }

  getCarModel(brandId: number) {
    this.carModels = []
    this.hasCarModel = false
    this.carService.getCarModel(brandId)
      .subscribe(carModels => {
          this.carModels = carModels,
          this.hasCarModel = true
      });
  }
}
