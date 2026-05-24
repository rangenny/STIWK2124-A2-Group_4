import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookList } from './components/book-list/book-list'; 
import { BookFormComponent } from './book-form/book-form';
import { Book } from './services/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookList, BookFormComponent],
  templateUrl: './app.html', 
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  title = 'assignment1-group4-frontend';
  
  currentView: 'list' | 'form' = 'list';
  selectedBookForEdit: Book | null = null;

  ngOnInit(): void {
    // FORCE-RESET: Ensures that on initial cold-boot or hard browser refresh, 
    // the application explicitly loads 'list' as the active view state.
    this.currentView = 'list';
  }

  navigateToAddTask(): void {
    this.selectedBookForEdit = null; 
    this.currentView = 'form';
  }

  navigateToEditTask(book: Book): void {
    this.selectedBookForEdit = book; 
    this.currentView = 'form';
  }

  onFormFinished(): void {
    this.currentView = 'list';
    this.selectedBookForEdit = null;
  }
}