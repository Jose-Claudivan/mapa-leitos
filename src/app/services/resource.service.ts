import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Resource } from "../models/resource";
import { Serializer } from "../serializers/serializer";
import { QueryOptions } from "./query-options";
import { ResourceServiceInterface } from "./resource.service.interface";

export class ResourceService<T extends Resource> implements ResourceServiceInterface<T>{
    constructor(
        protected httpClient: HttpClient,
        protected url: string,
        protected endpoint: string,
        protected serializer: Serializer) {}
    
      public create(item: T): Observable<T> {
        return this.httpClient
          .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
          .pipe(map(data => this.serializer.fromJson(data) as T,
                err => err
          ));
      }
    
      public update(item: T): Observable<T> {
        return this.httpClient
          .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
            this.serializer.toJson(item))
          .pipe(map(data => this.serializer.fromJson(data) as T));
      }
    
      public read(id: any): Observable<T> {
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${id}`)
          .pipe(map((data: any) =>{
              return this.serializer.fromJson(data) as T
            }));
      }
    
      listWithID(id: any): Observable<T[]> {
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${id}`)
          .pipe(map((data: any) => {
            return this.convertData(data)
            }));
      }

           
      list(queryOptions: QueryOptions): Observable<T[]> {
          console.log("URL"+`${this.url}/${this.endpoint}/${queryOptions.toQueryString()}`)
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${queryOptions.toQueryString()}`)
          .pipe(map((data: any) => {
              console.log(data)
              return this.convertData(data)
            }));
      }
    
      delete(id: any) {
        return this.httpClient
          .delete(`${this.url}/${this.endpoint}/${id}`);
      }

      public updateChild(item: T, child: string,serializer: Serializer): Observable<T>{
        return this.httpClient
          .put<T>(`${this.url}/${this.endpoint}/${item.id}/${child}`,
            serializer.toJson(item[child]));
    
            
      }
    
      private convertData(data: any): T[] {
        return data.map(item => this.serializer.fromJson(item));
      }
    }