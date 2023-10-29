import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from './profiles.service';

interface Profile {
  id: number;
  profileName: string;
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage implements OnInit {
  @ViewChild('headerEl') headerEl!: ElementRef;
  @ViewChild('profilesEl') profilesEl!: ElementRef;

  constructor(readonly profilesService: ProfilesService) {}

  ngOnInit() {}

  onClick() {}

  trackByFn(index: number, item: Profile) {
    return item.id;
  }
}
