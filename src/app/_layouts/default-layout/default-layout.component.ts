import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public isExpanded = false;

  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'auth-body');
  }

  ngOnInit() {
  }

}
