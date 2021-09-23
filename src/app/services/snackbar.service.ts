import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
    constructor(
        public snackBar: MatSnackBar,
        public zone: NgZone,
    ) {
    }

    public successMessage(message: string): void {
        this.zone.run(() => {
            const snackBar = this.snackBar.open(
                message,
                "OK",
                {
                    panelClass: "success-message",
                    verticalPosition: 'bottom',
                    horizontalPosition: 'end',
                    duration: 5000
                });
            snackBar.onAction().subscribe(() => {
                snackBar.dismiss();
            })
        });
    }

    public errorMessage(message: string): void {
        this.zone.run(() => {
            const snackBar = this.snackBar.open(
                message,
                "OK",
                {
                    panelClass: "error-message",
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center',
                    duration: 5000,
                });
            snackBar.onAction().subscribe(() => {
                snackBar.dismiss();
            })
        });
    }


    public warnMessage(message: string): void {
        this.zone.run(() => {
            const snackBar = this.snackBar.open(
                message,
                "OK",
                {
                    panelClass: "warn-message",
                    verticalPosition: 'bottom',
                    horizontalPosition: 'end',
                    duration: 8000
                });
            snackBar.onAction().subscribe(() => {
                snackBar.dismiss();
            })
        });
    }

    public unexpectedMessage(code?): void {
        if (code) {
            code = '[' + code + ']';
        } else {
            code = '';
        }
        this.zone.run(() => {
            const snackBar = this.snackBar.open(
                "Ocorreu um erro inesperado, tente novamente!" + code,
                "OK",
                {
                    panelClass: "error-message",
                    verticalPosition: 'bottom',
                    horizontalPosition: 'end',
                    duration: 6000
                });
            snackBar.onAction().subscribe(() => {
                snackBar.dismiss();
            })
        });
    }
}