import { AccessTokenInterceptor } from './access-token.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpResponseIntrceptor } from './http-response.interceptor';

export const HTTP_INTERCEPTORS_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseIntrceptor, multi: true },
];
