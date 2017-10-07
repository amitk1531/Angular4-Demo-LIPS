import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  FormControl, Validators, FormArray
} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name: string = 'Test';
  isVisible: boolean = false;
  customerForm: FormGroup;
  maxCardsReached: boolean = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      age: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
        addressLine2: new FormControl(''),
        state: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required])
      }),
      cards: this.fb.array([this.buildForm()])
    })
  }

  buildForm() {
    return this.fb.group({
      cardNumber: new FormControl('', [Validators.required]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required])
    })
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  addCard() {
    const cards = this.customerForm.controls['cards'] as FormArray;
    if (cards.length <= 4) {
      this.maxCardsReached = false;
    }
    cards.push(this.buildForm());
  }

  addCustomer() {

  }

  removeCard(i: number) {
    const cards = this.customerForm.controls['cards'] as FormArray;
    cards.removeAt(i);
  }

}
