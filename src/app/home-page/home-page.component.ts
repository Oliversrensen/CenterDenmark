import { Component } from '@angular/core';
import {Characterdata} from "../characterdata";
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  newChar: Characterdata = {name:"", description:"", image:"", subtitle:"", data: [], id: undefined};

  constructor(private modalService: NgbModal, private dataService: DataService, private router: Router) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  public createChar(): void{
    this.dataService.addNewCharacter(this.newChar).subscribe()
    this.modalService.dismissAll()
    this.characters$ = this.dataService.getAllCharacters();
  }

  goToDetails(name: string) {
    this.router.navigate(
      ['/detail-page'],
      {queryParams: {name: name}}
    ).then();
  }

  deleteCharacter(id: string) {
    this.dataService.deleteCharacter(id).subscribe();
    location.reload()
  }

  characters$ : any = this.dataService.getAllCharacters();
}
