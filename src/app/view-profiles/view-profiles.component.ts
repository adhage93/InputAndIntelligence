import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {

  private profileList: any;

  private requestedJobId = this.route.snapshot.paramMap.get('jobId');

  constructor(private route: ActivatedRoute, private apiCallService: ApiCallService) { }

  ngOnInit() {

    this.apiCallService.getAppliedResumes(this.requestedJobId).subscribe(
      (val) => {
        console.log('GET call successful value returned in body', val);
        this.profileList = val.result;
        console.log(this.profileList);
      },
      (res) => {
        console.log('GET call in error', res);
      },
      () => {
        console.log('The GET observable is now completed.');
      });
  }

  public getCurrentProfileShortlisted(): void {
  }

}
