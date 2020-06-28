import { Injectable } from '@angular/core';
import { AccountService } from '../account/shared/account.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.accountService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token && !this.accountService.isTokenExpired(token)) {
            //O request é imutavel, o clone é feito para poder
            //alterar as propriedades, passando o token no header
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        //return o com erro tratado
        return next.handle(request)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            //Erro no lado do cliente ou rede
            console.error('Ocorreu um erro!', error.error.message);
        } else {
            //erro retornado do backend
            console.error(
                `Codigo de erro ${error.status}, ` +
                `Erro: ${JSON.stringify(error.error)}`);
        }
        //retornar um observable com uma mensagem de erro tratada
        return throwError('Ocorreu um erro, tente novamente!');
    }
}


