import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Book {
  id: string | number;
  title: string;
  author: string;
  description?: string;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList { // <-- Changed to BookList
  @Input() books: Book[] = [];
  @Input() searchTerm: string = '';
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 5;

  @Output() searchChange = new EventEmitter<string>();
  @Output() pageChange = new EventEmitter<number>();

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchChange.emit(inputElement.value);
  }

  onPageChange(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.pageChange.emit(newPage);
    }
  }
}