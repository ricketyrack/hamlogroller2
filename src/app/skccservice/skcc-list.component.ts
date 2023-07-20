import {Component, OnInit} from '@angular/core'
import { SkccService } from './skcc.service'
import { ISkcc } from './skcc.model'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'skcc-list',
  templateUrl: './skcc-list.component.html',
  styleUrls: ['./skcc-list.component.scss','../../styles.scss']
})

export class SkccListComponent implements OnInit {
  skccs: ISkcc[] = [];
  loading: boolean = false;

  constructor(private skccService: SkccService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
