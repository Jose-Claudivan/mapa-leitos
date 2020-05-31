import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { ResourceServiceInterface } from './resource.service.interface';
import { HttpClient } from '@angular/common/http';
import { REQUEST_BASE_URL } from '../models/request';
import { Leito } from '../models/leito';
import { LeitoSerializer } from '../serializers/leito.serializer';
import { Observable } from 'rxjs';
import { Serializer } from '../serializers/serializer';
import { map } from 'rxjs/operators';
import { Unidade } from '../models/unidade';


@Injectable({
  providedIn: 'root'
})
export class LeitoService extends ResourceService<Leito> implements ResourceServiceInterface<Leito>{
  
   
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      REQUEST_BASE_URL,
      'leito',
      new LeitoSerializer);

      
  }


  
}
