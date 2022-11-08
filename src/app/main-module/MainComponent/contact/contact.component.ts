import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

constructor() { }

  ngOnInit(): void {
    // this._ActivatedRoute.fragment.subscribe((fragment:any) => {
    //   this._Router.navigateByUrl(`/contact#${fragment}`);
    // })
  }

}
