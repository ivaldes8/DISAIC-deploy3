import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Generic2Service } from '../../../services/generic2.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-generic1',
  templateUrl: './add-generic1.component.html',
  styleUrls: ['./add-generic1.component.scss']
})
export class AddGeneric1Component implements OnInit {

  GenericForm:FormGroup;
  categories: any[] = [];
  event: EventEmitter<any>=new EventEmitter();
  gestionar:string;
  url:string;
  obj;

  constructor(private genericService:Generic2Service, private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.GenericForm = new FormGroup({
      titulo: new FormControl(null),
      descripcion: new FormControl(null)
    })

    if(this.gestionar == "inicio"){
      this.url = "inicioRegister";
    }
    if(this.gestionar =="consultoria"){
      this.url = "consultoriaRegister";
    }
    if(this.gestionar == "nosotro"){
      this.url = "nosotroRegister";
    }
    if(this.gestionar == "producto"){
      this.url = "productoRegister";
    }
    if(this.gestionar == "servicio"){
      this.url = "servicioRegister";
    }
    if(this.gestionar == "entrenamientos"){
      this.url = "entrenamientoRegister";
    }
  }

  onGenericFormSubmit(){

    this.obj = {
      titulo: this.GenericForm.controls.titulo.value,
      descripcion: this.GenericForm.controls.descripcion.value
      }

    if(this.GenericForm.controls.titulo.value == "" || this.GenericForm.controls.titulo.value == null){
      this.obj = {
        descripcion: this.GenericForm.controls.descripcion.value
        }
    }

    if(this.GenericForm.controls.descripcion.value == "" || this.GenericForm.controls.descripcion.value == null){
      this.obj = {
        titulo: this.GenericForm.controls.titulo.value
        }
    }
    //console.log(this.obj)

    this.genericService.postItem(this.obj,this.url).subscribe(data=>{
      if(data!=null){
        this.event.emit('OK');
        this.bsModalRef.hide();
      }
    });
  }

  onClose(){
    this.bsModalRef.hide();
  }


}
