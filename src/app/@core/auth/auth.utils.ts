// -----------------------------------------------------------------------------------------------------
// @ AUTH UTILITIES
//
// Methods are derivations of the Auth0 Angular-JWT helper service methods
// https://github.com/auth0/angular2-jwt
// -----------------------------------------------------------------------------------------------------

export class AuthUtils
{
    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Is token expired?
     *
     * @param token
     * @param offsetSeconds
     */
    static isTokenExpired(token: string, offsetSeconds?: number): boolean
    {
        // Return if there is no token
        if ( !token || token === '' )
        {
            return true;
        }

        // Get the expiration date
        const date = this._getTokenExpirationDate(token);

        offsetSeconds = offsetSeconds || 0;

        if ( date === null )
        {
            return true;
        }

        // Check if the token is expired
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }

     /**
     * Get token expiration date
     *
     * @param token
     * @private
     */
     private static _getTokenExpirationDate(token: string): Date | null
     {
         // Get the decoded token
         const decodedToken = this._decodeToken(token);
 
         // Return if the decodedToken doesn't have an 'exp' field
         if ( !decodedToken.hasOwnProperty('exp') )
         {
             return null;
         }
 
         // Convert the expiration date
         const date = new Date(0);
         date.setUTCSeconds(decodedToken.exp);
 
         return date;
     }

}