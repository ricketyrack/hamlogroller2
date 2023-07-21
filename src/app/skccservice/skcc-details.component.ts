import { Component, OnInit } from '@angular/core'
import { SkccService } from './skcc.service'
import { ISkcc } from './skcc.model'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'skcc-details',
  templateUrl: './skcc-details.component.html',
  styleUrls: [
    '../../styles.scss',
    './skcc-details.component.scss']
})

export class SkccDetailsComponent implements OnInit {
    skcc : ISkcc | undefined;

  constructor(private skccService: SkccService, private route: ActivatedRoute,
	      private router: Router) {

    }

  ngOnInit() {
      console.log(`skcc-details: callsign is: ${this.route.snapshot.params['callsign']}`);
      this.skcc = this.skccService.getSkcc(this.route.snapshot.params['callsign']);
  }

  onList() {
    this.router.navigate(["/skccs/next/A"]);
  }

}
