import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data: Product[] = [];
  category: string[] = [];
  filteredStatus = '';
  filteredPrice = '';

  constructor(private service: CheckoutService) {}

  ngOnInit(): void {
    this.category = this.service.data
      .map(
        (item) => item.category.charAt(0).toUpperCase() + item.category.slice(1)
      )
      .filter((value, index, self) => self.indexOf(value) === index);
    this.data = this.service.data;
  }
  setArticle(item: Product) {
    this.service.article = item;
  }

  sortArticle() {
    if (this.filteredPrice === 'ascending') {
      this.data.sort((a: Product, b: Product) => {
        return a.price - b.price;
      });
    } else if (this.filteredPrice === 'descending') {
      this.data.sort((a: Product, b: Product) => {
        return b.price - a.price;
      });
    }
  }
}
