class User {
    protected _firstName: string;
    protected _lastName: string;
    protected _email: string;
    protected _isOnline: boolean;
    protected _createdAt?: string;
    protected _lastModifiedAt?: string;
    
    public constructor(firstName: string, lastName: string, email: string, isOnline: boolean) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._isOnline = isOnline;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public get email(): string {
        return this._email;
    }
    public get isOnline(): boolean {
        return this._isOnline;
    }

    public makeOnline(): void {
        if (this._isOnline) {
            throw new Error ("The user is already online");
        }
        this._isOnline = true;
    }

    public makeOffline(): void {
        if (!this._isOnline) {
            throw new Error ("The user is already offline");
        }
        this._isOnline = false;
    }
}