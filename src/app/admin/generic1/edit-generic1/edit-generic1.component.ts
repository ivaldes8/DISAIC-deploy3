import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Generic2Service } from '../../../services/generic2.service';

@Component({
  selector: 'app-edit-generic1',
  templateUrl: './edit-generic1.component.html',
  styleUrls: ['./edit-generic1.component.scss']
})
export class EditGeneric1Component implements OnInit {

  editGenericForm: FormGroup;
  categories: any[] = [];
  id: number;
  titulo: string;
  gestionar:string;
  url:string;
  descripcion: string;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();
  obj;
  invalid = false;

  constructor(private builder: FormBuilder,private genericService: Generic2Service,private bsModalRef: BsModalRef) {

    this.editGenericForm = new FormGroup({
      titulo: new FormControl(null),
      descripcion: new FormControl(null)
    })

   }

   onEditFormSubmit() {

    this.obj = {
      titulo: this.editGenericForm.controls.titulo.value,
      descripcion: this.editGenericForm.controls.descripcion.value
      }

    if(this.editGenericForm.controls.titulo.value == "" || !this.editGenericForm.controls.titulo.value){
      this.obj = {
        descripcion: this.editGenericForm.controls.descripcion.value
        }
    }

    if(this.editGenericForm.controls.descripcion.value == "" || !this.editGenericForm.controls.descripcion.value){
      this.obj = {
        titulo: this.editGenericForm.controls.titulo.value
        }
    }



    console.log(this.editGenericForm)

    this.genericService.updateItem(this.obj,this.url,this.id).subscribe(data => {
        this.event.emit('OK');
        this.bsModalRef.hide();
    });
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit(): void {
    this.editGenericForm.controls['titulo'].setValue(this.titulo);
    this.editGenericForm.controls['descripcion'].setValue(this.descripcion);

    if(this.gestionar == "inicio"){
      this.url = "inicioUpdate"
    }
    if(this.gestionar == "consultoria"){
      this.url = "consultoriaUpdate"
    }
    if(this.gestionar == "nosotro"){
      this.url = "nosotroUpdate"
    }
    if(this.gestionar == "producto"){
      this.url = "productoUpdate"
    }
    if(this.gestionar == "servicio"){
      this.url = "servicioUpdate"
    }
    if(this.gestionar == "entrenamientos"){
      this.url = "entrenamientoUpdate"
    }
  }

}
