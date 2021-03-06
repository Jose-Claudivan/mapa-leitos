import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { ResourceServiceInterface } from './resource.service.interface';
import { HttpClient } from '@angular/common/http';
import { REQUEST_BASE_URL } from '../models/request';
import { UnidadeSerializer } from '../serializers/unidade.serializer';
import { Unidade } from '../models/unidade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Leito } from '../models/leito';
import { LeitoSerializer } from '../serializers/leito.serializer';
import { Serializer } from '../serializers/serializer';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService extends ResourceService<Unidade> implements ResourceServiceInterface<Unidade>{
  
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      REQUEST_BASE_URL,
      'unidade',
      new UnidadeSerializer);
  }
}
