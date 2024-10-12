import { isEmpty } from "utils/string.utils";

class Task {
    protected _title: string;
    protected _description?: string;
    protected _createdAt?: Date;
    protected _lastModifiedAt?: Date;
    protected _status: TaskStatus;
    protected _assignee?: User;
    protected _isBeingEditedBy?: User;
    
    public constructor(title: string, description?: string) {
        this._title = title;
        this._description = description;

        this._status = TaskStatus.New;
    }

    public get title(): string {
        return this._title;
    }
    public get description(): string | undefined {
        return this._description;
    }
    public get status(): TaskStatus | undefined {
        return this._status;
    }
    public get assignee(): User | undefined {
        return this._assignee;
    }
    public get isBeingEditedBy(): User | undefined {
        return this._isBeingEditedBy;
    }
    public get createdAt(): Date | undefined {
        return this._createdAt;
    }
    public get lastModifiedAt(): Date | undefined {
        return this._lastModifiedAt;
    }

    public editTitle(newTitle: string): void {
        if (isEmpty(newTitle)) {
            throw new Error('"title" cannot be empty');
        }

        this._title = newTitle;
    }

    public editDescription(newDescription?: string): void {
        this._description = newDescription;
    }

    public setStatus(newStatus: TaskStatus): void {
        this._status = newStatus;
    }

    public startEditingBy(currentEditor: User): void {
        if (this._isBeingEditedBy != undefined) {
            throw new Error('The task is being edited by someone else');
        }

        this._isBeingEditedBy = currentEditor;
    }

    public finishEditing(): void {
        if (this._isBeingEditedBy == undefined) {
            throw new Error('The task is not being edited anyways');
        }

        this._isBeingEditedBy = undefined;
    }

    public remove(): void {
        // remove a task
    }
}