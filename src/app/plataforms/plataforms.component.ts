import { Component, OnInit } from '@angular/core';
import { Plataform } from 'src/app/shared/plataform/plataform';
import { PlataformService } from 'src/app/shared/plataform/plataform.service';

@Component({
  selector: 'app-plataforms',
  templateUrl: './plataforms.component.html',
  styleUrls: ['./plataforms.component.css']
})
export class PlataformsComponent implements OnInit {

  constructor(private plataformService : PlataformService) { }

  plataforms: Plataform[];

  ngOnInit(): void {
    this.getPlataforms();
  }

  getPlataforms() {
    this.plataformService.getPlataforms().subscribe((plataforms: Plataform[]) => {
      this.plataforms = plataforms;
    });
  }

  deleteById(id: number) {
    this.plataformService.deletePlataformById(id).subscribe(
      () => {
        console.log(`Plataforma ${id} deletada!`);
      }
    );
  }

}
