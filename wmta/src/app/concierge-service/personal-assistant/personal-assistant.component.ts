import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-personal-assistant',
  templateUrl: './personal-assistant.component.html',
  styleUrls: ['./personal-assistant.component.css']
})
export class PersonalAssistantComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    //this.changeLange();
  }

}
