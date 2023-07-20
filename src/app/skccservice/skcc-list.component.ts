import {Component, OnInit} from '@angular/core'
import { SkccService } from './skcc.service'
import { ISkcc } from './skcc.model'
import { ActivatedRoute } from '@angular/router'
import { SkccThumbnailComponent } from './skcc-thumbnail.component'

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
    this.loading = true;
    this.skccService.getSkccPage('')
      .subscribe((skccResponse: ISkcc[]) => {
        console.log(`skcclist: response received with count: ${skccResponse.length}`);
        this.skccs = skccResponse;
      });
  }

}
