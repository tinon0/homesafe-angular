import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModeGet, ModePost, Status } from '../interfaces';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit{
  private service : ApiService = inject(ApiService)
  allModes : ModeGet[] = []

  newStatus : FormGroup = new FormGroup({
    activated : new FormControl(true),
    userId: new FormControl(localStorage.getItem('userId')),
    lastUpdateDate: new FormControl(new Date()),
    modeId: new FormControl('')
  })

  submit() {
    console.log(this.newStatus.value);
    const data = this.newStatus.value as Status
    
    this.service.postPanel(data).subscribe({
      next : () => {
        if (data.activated) {
          alert("Activada")
        }
        else {
          alert("Desactivada")
        }
        this.newStatus.reset()
      },
      error : (error) => {
        alert("Hubo un error")
        console.log(error);
        console.error(error)
      }
    })
  }

  ngOnInit(): void {
    this.service.getModelsByUserId(localStorage.getItem('userId')).subscribe(data => this.allModes = data)
  }
  armar() {
    this.newStatus.get('activated')?.patchValue(true)
  }
  desarmar() {
    this.newStatus.get('activated')?.patchValue(false)
  }
}
