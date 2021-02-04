import { Component, OnInit } from '@angular/core';
import { GenericService1 } from 'src/app/services/generic1.service';
import { faEdit, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";

import { ContratoServComponent } from './contrato-serv/contrato-serv.component';

@Component({
  selector: 'app-prod-serv',
  templateUrl: './prod-serv.component.html',
  styleUrls: ['./prod-serv.component.scss']
})
export class ProdServComponent implements OnInit {

  faSpinner = faSpinner;
  url1 = "productoList";
  url2 = "servicioList";
  startListP: any[] = [];
  startListS: any[] = [];
  fetching1 = false;
  fetching2 = false;

  bsModalRef: BsModalRef;

  constructor(private genericService:GenericService1, private bsModalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchP();
    this.fetchS();
  }

  fetchP(){
    this.fetching1 = true;
    this.genericService.getItem(this.url1).subscribe(data => {
      Object.assign(this.startListP, data);
      this.fetching1 = false
    }, error => {
      console.log("Error while getting data ", error);
    });
  }

  fetchS(){
    this.fetching2 = true;
    this.genericService.getItem(this.url2).subscribe(data => {
      Object.assign(this.startListS, data);
      this.fetching2 = false
    }, error => {
      console.log("Error while getting data ", error);
    });
  }

  AddPro(){
    const config: ModalOptions = { class: 'modal-lg' };
    this.bsModalRef = this.bsModalService.show(ContratoServComponent, config);
  }

}
