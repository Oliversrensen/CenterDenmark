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
  newChar: Characterdata = {name:"", description:"", image:"", subtitle:""};

  constructor(private modalService: NgbModal, private dataService: DataService, private router: Router) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  public createChar(): void{
    this.dataService.addNewCharacter(this.newChar).subscribe()
    this.modalService.dismissAll()
    location.reload()
  }

  goToDetails(name: string) {
    this.router.navigate(
      ['/detail-page'],
      {queryParams: {name: name}}
    ).then();
   }

  characters$ : any = this.dataService.getAllCharacters();

}
