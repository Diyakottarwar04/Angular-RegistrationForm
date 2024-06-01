import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.RegisterForm = this.fb.group({
      firstName: ['john', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
    this.RegisterForm.get('country')?.valueChanges.subscribe((value: string) => {
      if (value === 'Canada') {
        this.RegisterForm.get('firstName')?.setValue('john doe');
      } else {
        this.RegisterForm.get('firstName')?.setValue('john');
      }
    });
  }

  onSubmit(): void {
    if (this.RegisterForm.valid) {
      console.log(this.RegisterForm.value);
    }
  }
}
