import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ProfilesService } from './profiles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from './profiles.types';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage {
  @ViewChild('headerEl') headerEl!: ElementRef;
  @ViewChild('profilesEl') profilesEl!: ElementRef;

  editing = false;

  readonly profilesService = inject(ProfilesService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  onClickProfile(profile: Profile) {
    if (this.editing) {
      this.router.navigate([profile.id], { relativeTo: this.activatedRoute });
    } else {
      this.profilesService.setActiveProfile(profile);
      this.router.navigate(['/home']);
    }
  }

  trackByFn(index: number, item: Profile) {
    return item.id;
  }
}
