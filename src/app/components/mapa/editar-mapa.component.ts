import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-mapa',
  templateUrl: './editar-mapa.component.html',
  styleUrls: ['./editar-mapa.component.css']
})
export class EditarMapaComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarMapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this. forma = this.fb.group({
        'titulo': data.titulo,
        'descripcion': data.descripcion
      });
    }

  ngOnInit(): void {
  }

  guardarCambios(){
    this.dialogRef.close( this.forma.value );
  }
  cancelar(): void {
    this.dialogRef.close();
  }
}
