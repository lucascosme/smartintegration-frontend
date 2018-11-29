import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Brand } from './brand.model';
import { CarModel } from './car-model.model'
import { FIPE_API } from '../app.property';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getBrands(): Observable<Brand[]> {
    return this.http.get(`${FIPE_API}/marcas.json`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  getCarModel(brandId: number): Observable<CarModel[]> {
    return this.http.get(`${FIPE_API}/veiculos/${brandId}.json`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
