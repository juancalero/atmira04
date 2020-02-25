import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userS: UserService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: [''],
      telefono: ['']
    });
  }

  sendForm() {
    console.log(this.myForm.value);
    this.userS.addUser(this.myForm.value);
  }
}
