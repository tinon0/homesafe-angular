import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AbstractControl, Form, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ModePost, Zone } from '../interfaces';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-mode',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './new-mode.component.html',
  styleUrl: './new-mode.component.css'
})
export class NewModeComponent implements OnInit{

  private service : ApiService = inject(ApiService)
  allZones : Zone[] = []
  userName : string = ''

  newMode : FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    userId : new FormControl(localStorage.getItem('userId')),
    creationDate : new FormControl(new Date()),
    zones : new FormArray([], [Validators.required])
  })

  get zoneArray() {
    return this.newMode.get('zones') as FormArray
  }
  addZone() {
    const newZone : FormGroup = new FormGroup({
      name : new FormControl('', [Validators.required, this.validationZones()])
    })
    this.zoneArray.push(newZone)
  }
  removeZone(index : number) {
    this.zoneArray.removeAt(index)
  }

  ngOnInit(): void {
    this.service.getAllZones().subscribe(data => this.allZones = data)
    this.service.getUserName(localStorage.getItem('userId')).subscribe(data => this.userName = data)
  }


  submit() {

    const namesArray : string[] = []
    this.zoneArray.controls.forEach(control => {
      namesArray.push(control.get('name')?.value)
    });
    
    const data : ModePost = {
      userId: this.newMode.get('userId')?.value,
      name: this.newMode.get('name')?.value,
      zones: namesArray,
      createdAt: new Date(),
      creationDate: this.newMode.get('creationDate')?.value
    }
    console.log(data);

    this.service.postMode(data).subscribe({
      next: () => {
        alert("Modo creado exitosamente!")
        this.zoneArray.reset()
        this.newMode.reset()
      },
      error: (error) => {
        alert("Hubo un error")
        console.log(error);
        console.error(error)
      }
    })
  }

  validationZones() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      const zoneName = control.value as string
      const namesArray : string[] = []

      if (this.zoneArray.length < 2) {
        return null
      }

      this.zoneArray.controls.forEach(control => {
      namesArray.push(control.get('name')?.value)
      })

      const find = namesArray.find(n => n === zoneName)
      return find ? {repitedZone : true} : null
    }
  }
}
