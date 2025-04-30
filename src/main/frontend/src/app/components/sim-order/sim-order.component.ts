import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimOrderService } from '../../services/sim-order.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sim-order',
  templateUrl: './sim-order.component.html',
  styleUrls: ['./sim-order.component.css']
})
export class SimOrderComponent implements OnInit {
  simOrderForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(
    private fb: FormBuilder,
    private simOrderService: SimOrderService,
    private authService: AuthService
  ) {
    this.simOrderForm = this.fb.group({
      deliveryName: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{7}$')]], // Ireland Eircode
      country: ['Ireland', Validators.required]
    });
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage = 'Please log in to order a SIM.';
    }
  }

  onSubmit(): void {
    console.log("Submitted")
    if (this.simOrderForm.valid && this.authService.isLoggedIn()) {
      this.simOrderService.orderSim(this.simOrderForm.value).subscribe(
        response => {
          this.successMessage = 'SIM order placed successfully!';
          this.simOrderForm.reset();
        },
        error => {
          this.errorMessage = error.error.message || 'Failed to place SIM order.';
        }
      );
    }
  }
}