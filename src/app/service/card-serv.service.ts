import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Imagenes } from '../cards/interfaces/imagenes.interface';

@Injectable({
  providedIn: 'root'
})
export class CardServService {

  imagenes : string [] = [];
  url : string = `http://api.unsplash.com/search/photos?client_id=foJ9ixeob1OJ6creWsYVtvn3LlurNmdWRtyrNNz16R4`;

  constructor(private httpClient : HttpClient) { }

  buscarImagenes(inputBusqueda: string){

    this.httpClient.get<Imagenes>(this.url+'&query='+inputBusqueda+'&per_page=5')
    .subscribe(resp =>{
      console.log(resp.results)
    });

  }

}