import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;
  dataResp: any;
  
  constructor(private http: HttpClient,
    public modal: NgbModal,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.http.get('http://127.0.0.1:3000/repository')
      .subscribe((resp: any) => {
        this.dataResp = resp;
       console.log(this.dataResp);
       
      })
  }
  

  subirArchivo(archivo:any){
  
    console.log(archivo);

    
    

  }

  btnAceptarArchivo(){

  }
  cambio = true
  nuevoRepo:any = "";
  onChangeNuevoRp(a:any){
    console.log(a);
    console.log(a.length );
    if(a.length > 0){
     this.cambio = false
    }else{
      this.cambio = true
    }
  }

  crearNuevoRep(Nombre:any){
    console.log(this.nuevoRepo);
    console.log(Nombre);
    

  }

}
