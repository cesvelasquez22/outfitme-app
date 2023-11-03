import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { Profile } from '../profiles.types';
import { LoadingService } from '@shared/loading';
import { finalize } from 'rxjs';
import { profileValidations } from '../profile.validations';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  private readonly profilesService = inject(ProfilesService);
  private readonly loadingService = inject(LoadingService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  profileId: number | null = +this.activatedRoute.snapshot.params['id'];

  profile = new Profile();
  readonly profileSuite = profileValidations;

  readonly alertButtons = [
    {
      text: 'Cancelar',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Eliminar',
      cssClass: 'alert-button-confirm',
      handler: () => this.onRemove(),
    },
  ];

  ngOnInit(): void {
    if (this.profileId) {
      this.loadingService.show();
      this.profilesService
        .getProfileById(this.profileId)
        .pipe(finalize(() => this.loadingService.hide()))
        .subscribe((profile) => (this.profile = profile));
    }
  }

  onSubmit() {
    if (this.profile.id) {
      // Then edit
      this.loadingService.show();
      this.profilesService
        .updateProfile(this.profile)
        .pipe(finalize(() => this.loadingService.hide()))
        .subscribe((profile) => {
          this.profile = profile;
        });
    } else {
      // Then create
      this.loadingService.show();
      this.profilesService
        .createProfile(this.profile)
        .pipe(finalize(() => this.loadingService.hide()))
        .subscribe((profile) => {
          this.router.navigate(['/profiles']);
        });
    }
  }

  onRemove() {
    console.log('onRemove');
  }
}
