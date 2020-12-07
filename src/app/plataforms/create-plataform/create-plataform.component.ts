import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plataform } from 'src/app/shared/plataform/plataform'
import { PlataformService } from 'src/app/shared/plataform/plataform.service';

@Component({
  selector: 'app-create-plataform',
  templateUrl: './create-plataform.component.html',
  styleUrls: ['./create-plataform.component.css']
})

export class CreatePlataformComponent implements OnInit {

  plataform = {} as Plataform;
  formPlataforms : FormGroup
  submitted = false;

  constructor(private formBuilder : FormBuilder, private plataformService : PlataformService) {}

  ngOnInit() {
    this.formPlataforms = this.formBuilder.group(
      {
        name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      }
    );
  }

  get f() {
    return this.formPlataforms.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.formPlataforms.invalid) {
      return;
    }
  }

  cleanForm(formPlataforms: FormGroup) {  
    formPlataforms.reset();
    this.plataform = {} as Plataform;      
  }

  savePlataform(plataform: Plataform) {    
    this.plataformService.savePlataform(plataform).subscribe(() => {
      this.cleanForm(this.formPlataforms);
    });  
  }
}