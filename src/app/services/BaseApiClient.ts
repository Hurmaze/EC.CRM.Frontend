import { Observable } from "rxjs/internal/Observable";

export class BaseApiClient {
  authToken = '';
  protected constructor() {
  }
  
  setAuthToken(token: string) {
      this.authToken = token;
  }

  protected transformOptions(options: any): Promise<any> {
    if (this.authToken === '' || this.authToken === null || this.authToken === undefined){
        console.log('No token was set.')
        return Promise.resolve(options);
    }
    
    options.headers = options.headers.append('authorization', `Bearer ${this.authToken}`);
    return Promise.resolve(options);
  }

  protected transformResult(url_: string, response_: any, arg2: (r: any) => Observable<any>): any {
    arg2(response_);
  }
}