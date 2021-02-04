import { Component, OnInit } from '@angular/core';
import { GenericService1 } from 'src/app/services/generic1.service';
import { faEdit, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consultoria',
  templateUrl: './consultoria.component.html',
  styleUrls: ['./consultoria.component.scss']
})
export class ConsultoriaComponent implements OnInit {
  faSpinner = faSpinner;
  url = "consultoriaList";
  startList: any[] = [];
  fetching = false;

  constructor(private genericService:GenericService1) { }

  ngOnInit(): void {
    this.fetchConsultoria();
  }

  fetchConsultoria(){
    this.fetching = true;
    this.genericService.getItem(this.url).subscribe(data => {
      Object.assign(this.startList, data);
      this.fetching = false
    }, error => {
      console.log("Error while getting data ", error);
    });
  }

}
