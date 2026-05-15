import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.html', /* Matched to your exact file name */
  styleUrl: './book-form.css'      /* Matched to your exact file name */
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  isEditMode: boolean = false; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Strict validation rules for the Excellent rubric criteria
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      author: ['', [Validators.required, Validators.maxLength(50)]],
      category: ['', [Validators.required, Validators.maxLength(30)]],
      shortDesc: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  // Helper to make HTML cleaner
  get f() { return this.bookForm.controls; }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      // Force all red error messages to show if they try to submit an empty form
      this.bookForm.markAllAsTouched();
      return;
    }

    // If valid, grab the data!
    const formData = this.bookForm.value;
    console.log(this.isEditMode ? 'Updating...' : 'Saving new...', formData);
  }
}