import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Generic2Service } from '../../../services/generic2.service';

@Component({
  selector: 'app-delete-generic1',
  templateUrl: './delete-generic1.component.html',
  styleUrls: ['./delete-generic1.component.scss']
})
export class DeleteGeneric1Component implements OnInit {

  id: number;
  titulo: string;
  event: EventEmitter<any> = new EventEmitter();
  gestionar:string;
  url:string;

  constructor(private bsModalRef: BsModalRef, private genericService:Generic2Service) { }

  ngOnInit(): void {
    if(this.gestionar == "inicio"){
      this.url = "inicioDelete"
    }
    if(this.gestionar == "consultoria"){
      this.url = "consultoriaDelete"
    }
    if(this.gestionar == "nosotro"){
      this.url = "nosotroDelete"
    }
    if(this.gestionar == "producto"){
      this.url = "productoDelete"
    }
    if(this.gestionar == "servicio"){
      this.url = "servicioDelete"
    }
    if(this.gestionar == "entrenamientos"){
      this.url = "entrenamientoDelete"
    }
  }

  async deleteGeneric(postId: number) {
    await this.genericService.deleteItem(postId, this.url).toPromise();
     this.event.emit('OK');
     this.bsModalRef.hide();
   }

   onClose() {
     this.bsModalRef.hide();

   }

}
