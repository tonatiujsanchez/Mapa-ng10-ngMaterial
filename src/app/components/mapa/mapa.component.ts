import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditarMapaComponent } from './editar-mapa.component';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  
  marcadores: Marcador[] = [];


  lat = 51.678418;
  lng = 7.809007;

  zoom = 16;
  constructor( private snackBar: MatSnackBar,
               public dialog: MatDialog ) { 
    this.leerStorage();
  }

  ngOnInit(): void {
  }

  agregarMarcador( evento ){

    const coordenadas: {
      lat: number,
      lng: number
    } = evento.coords;

    const nuevoMarcador = new Marcador( coordenadas.lat,  coordenadas.lng );
    this.marcadores.push( nuevoMarcador );
    this.guardarStorage();
    this.mostrarSnack('Marcador agregado.');
  }
  
  guardarStorage(){
    localStorage.setItem( 'marcadoresMap', JSON.stringify( this.marcadores ));
  }

  leerStorage(){
    if( localStorage.getItem( 'marcadoresMap' ) ){
      this.marcadores = JSON.parse( localStorage.getItem( 'marcadoresMap' ));
    }
  }

  eliminarMarcador( idx ){
    this.marcadores.splice( idx, 1 )
    this.guardarStorage();
    this.mostrarSnack('Marcador eliminado.');
  }

  editarMarcador( marcador: Marcador ){  
    const dialogRef = this.dialog.open(EditarMapaComponent, {
        width: '250px',
        data: {
          titulo: marcador.titulo,
          descripcion: marcador.descripcion
        }
      });
      
      dialogRef.afterClosed().subscribe(result => {
        console.log( result );
        
        if( !result ){
          return;
        }
        marcador.titulo = result.titulo;
        marcador.descripcion = result.descripcion;
        this.guardarStorage();
        this.mostrarSnack('El marcador se actualizó correctamente.');
      });
  }

  mostrarSnack( mensaje:string ){
    this.snackBar.open( mensaje, 'Cerrar', {
      duration: 1500,
    });
  }

}
