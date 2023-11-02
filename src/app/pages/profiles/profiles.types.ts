export class Profile {
    id:          number | null;
    profileName: string;
    default:     boolean;

    constructor(profile?: Profile) {
        this.id          = profile?.id || null;
        this.profileName = profile?.profileName || '';
        this.default     = profile?.default || false;
    }
}
