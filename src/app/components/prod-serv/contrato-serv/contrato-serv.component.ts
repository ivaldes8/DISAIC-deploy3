import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faWrench, faFile, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contrato-serv',
  templateUrl: './contrato-serv.component.html',
  styleUrls: ['./contrato-serv.component.scss']
})
export class ContratoServComponent implements OnInit {
  faWrench = faWrench;
  faFile = faFile;
  faDownload = faDownload;
  faUpload = faUpload;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose(){
    this.bsModalRef.hide();
  }

}
