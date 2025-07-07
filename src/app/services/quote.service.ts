import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiKey = 'ti8MB7eni8qqJzgiS0Omig==1gee68FkyojA0S8Q';

  constructor(private http: HttpClient) {}

  getRandomQuote() {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });
    return this.http.get<any>('https://api.api-ninjas.com/v1/quotes', { headers });
  }
}
