import { Component, OnInit } from '@angular/core';
import { Generic2Service } from '../../services/generic2.service';

import { faEdit, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { AddGeneric1Component } from './add-generic1/add-generic1.component';
import { DeleteGeneric1Component } from './delete-generic1/delete-generic1.component';
import { EditGeneric1Component } from './edit-generic1/edit-generic1.component';

@Component({
  selector: 'app-generic1',
  templateUrl: './generic1.component.html',
  styleUrls: ['./generic1.component.scss']
})
export class Generic1Component implements OnInit {

  startList: any[] = [];
  returnedArray: any[] = [];
  bsModalRef: BsModalRef;

  faEdit = faEdit;
  faTrash = faTrash;
  faSpinner = faSpinner;

  currentPage = 1;
  itemsPerPage = 5;
  startItem = 0;
  endItem = 5;
  fetching = false;

  gestionar = "inicio";
  url = "inicioList";

  constructor(private generic1Service: Generic2Service, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchGeneric();
  }

  fetchGeneric(){
    this.fetching = true;
    if(this.url != ""){
      this.generic1Service.getItem(this.url).subscribe(data => {
        Object.assign(this.startList, data);
        this.returnedArray = this.startList.slice(0,this.itemsPerPage)
        this.fetching = false
      }, error => {
        console.log("Error while getting data ", error);
      });
    }


  }

  addGeneric(){
    let initialState = {
      gestionar: this.gestionar
    };

    this.bsModalRef = this.bsModalService.show(AddGeneric1Component,{initialState:initialState});
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.fetchGeneric();
      }
    });
  }

  deleteGeneric(id: number, titulo: string){
    let initialState = {
      gestionar: this.gestionar
    };

    this.bsModalRef = this.bsModalService.show(DeleteGeneric1Component,{initialState:initialState});
    this.bsModalRef.content.id = id;
    this.bsModalRef.content.titulo = titulo;
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      this.fetching = true;
      if (result == 'OK') {
        setTimeout(() => {
          this.startList = []
          this.fetchGeneric();
          this.fetching = false
        }, 5000);
      }
    });
  }

  editGeneric(id: number, titulo:string, descripcion: string){


    let initialState = {
      descripcion: descripcion,
      titulo: titulo,
      id: id,
      gestionar: this.gestionar
    };
    this.bsModalRef = this.bsModalService.show(EditGeneric1Component,{initialState:initialState});
    this.bsModalRef.content.id = id;
    this.bsModalRef.content.titulo = titulo;
    this.bsModalRef.content.descripcion = descripcion;
    this.bsModalRef.content.event.subscribe(result => {
      this.fetching = true;
      if (result == 'OK') {
        setTimeout(() => {
          this.startList=[];
          this.fetchGeneric();
          this.fetching = false
        }, 5000);
      }
    });
  }

  pageChanged(event:PageChangedEvent):void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.startList.slice(startItem,endItem);
}

selectedItemsPerPage(event){
this.itemsPerPage = event.target.value;
this.startList = [];
this.returnedArray = [];
this.fetchGeneric();
}

selectedItem(event){
  const selected = event.target.value;
  this.gestionar = selected;
  if(selected == "inicio"){
    this.url = "inicioList";
    this.startList = [];
    this.returnedArray = [];
    this.fetchGeneric();
  }
  if(selected == "nosotro"){
    this.url = "nosotroList";
    this.startList = [];
    this.returnedArray = [];
    this.fetchGeneric();
  }
  if(selected == "consultoria"){
    this.url = "consultoriaList";
    this.startList = [];
    this.returnedArray = [];
    this.fetchGeneric();
  }
  if(selected == "producto"){
    this.url = "productoList";
    this.startList = [];
    this.returnedArray = [];
    this.fetchGeneric();
  }
  if(selected == "servicio"){
    this.url = "servicioList";
    this.startList = [];
    this.returnedArray = [];
    this.fetchGeneric();
  }
  if(selected == "entrenamientos"){
    this.url = "entrenamientoList";
    this.startList = [];
    this.returnedArray = [];
    this.fetchGeneric();
  }
}


}
