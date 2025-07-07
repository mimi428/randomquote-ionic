import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicRouteStrategy} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  imports: [CommonModule, FormsModule, IonicModule],
})
export class HomePage implements OnInit {
  quote: { text: string; author: string } | null = null;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.loadQuote();
  }

  loadQuote() {
    this.quoteService.getRandomQuote().subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          this.quote = {
            text: res[0].quote,
            author: res[0].author,
          };
        }
      },
      error: (err) => {
        console.error('Error fetching quote', err);
      },
    });
  }


}
