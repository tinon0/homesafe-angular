import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private service : ApiService = inject(ApiService)
  private router : Router = inject(Router)

  login : FormGroup = new FormGroup({
    user : new FormControl('', [Validators.required, this.userValidation()]),
    password : new FormControl('', [Validators.required, Validators.minLength(10),this.passwordValidation()])
  })


  submit() {
    console.log(this.login.value);
    
    this.service.getUser(this.login.get('user')?.value, this.login.get('password')?.value).subscribe({
      next : () => {
        //this.login.reset()
        alert('Bienvenido')
        this.router.navigate(['/panel'])
      },
      error : (error) => {
        alert('error')
        console.log(error);
        console.error(error)
      }
    })
  }

  passwordValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value as string
      let contUpper = 0
      let contLower = 0
      let contSpecial = 0
  
      for (let index = 0; index < password.length; index++) {
        if (this.isLowerChar(password.charAt(index))) {
          contLower++
        }
        if (this.isUpperChar(password.charAt(index))) {
          contUpper++
        }
        if (password.charAt(index).match(/\W/)) {
          contSpecial++
        }
      }
  
      if (contLower < 1 || contUpper < 1 || contSpecial < 1) {
        return { validationPass: true }
      }
  
      return null
    }
  }
  userValidation(): ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      const user = control.value as string

      if (user.split('@').pop() === 'homesafe.io') {
        return null
      }
      return {incorrectDomain : true}
    }
  }
  

  private isLowerChar(char : string) {
    return char >= 'a' && char <= 'z'
  }
  private isUpperChar(char : string) {
    return char >= 'A' && char <= 'Z'
  }

}
