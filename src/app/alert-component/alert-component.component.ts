import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from './alert.service';


@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit, OnDestroy {

  constructor(
    private _alertService: AlertService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy()
  {


  }

}
