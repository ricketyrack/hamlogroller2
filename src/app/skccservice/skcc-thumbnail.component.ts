import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ISkcc } from './skcc.model'

@Component({
    selector: 'skcc-thumbnail',
  templateUrl: './skcc-thumbnail.component.html',
    styles: [`
      .pad-left   { margin-left: 10px; }
      .well div   { color: #bbb; height: 50px; }

    `]
})

export class SkccThumbnailComponent {
  @Input() skcc : ISkcc | undefined;

  constructor(private routerLink: ActivatedRoute) {

  }
}

