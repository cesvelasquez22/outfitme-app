import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from '../profiles.types';
import { LoadingService } from '@core/services/loading';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-profiles-grid',
  templateUrl: './profiles-grid.component.html',
  styleUrls: ['./profiles-grid.component.scss']
})
export class ProfilesGridComponent implements OnInit {
  @ViewChild('headerEl') headerEl!: ElementRef;
  @ViewChild('profilesEl') profilesEl!: ElementRef;

  editing = false;

  readonly profilesService = inject(ProfilesService);
  private readonly loadingService = inject(LoadingService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  profiles: Profile[] = [];

  ngOnInit(): void {
    this.loadingService.isLoading(true);
    this.profilesService.profiles$
      .pipe(finalize(() => this.loadingService.isLoading(false)))
      .subscribe((profiles) => {
        this.profiles = profiles;
      });
  }

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
