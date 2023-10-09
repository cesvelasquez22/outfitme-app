import { Component, OnInit } from '@angular/core';

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
  profiles: Profile[] = [
    {
      id: 1,
      profileName: 'John Doe',
    },
    {
      id: 2,
      profileName: 'Jane Doe',
    },
    {
      id: 3,
      profileName: 'John Smith',
    },
  ];

  constructor() {}

  ngOnInit() {}

  trackByFn(index: number, item: Profile) {
    return item.id;
  }
}
