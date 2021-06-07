import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { fadeIn } from '@app/animations/fadeIn.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ],
  animations: [ fadeIn ]
})
export class ProfileComponent {

  user$ = this.auth.profile$;

  url: string | ArrayBuffer | null | undefined = '';

  editName = false;
  changePassword = false;

  hasPhotoUploaded = false;

  changePasswordForm = this.fb.group({
    oldPassword: [ '', Validators.required ],
    newPassword: [ '', Validators.required ],
    confirmPassword: [ '', Validators.required ]
  }, { validators: this.checkPasswords });

  constructor(private auth: AuthService, private fb: FormBuilder,
              private snackBar: MatSnackBar,
  ) {
  }

  submitName(name: string): void {
    this.editName = false;

    this.auth.changeName(name).pipe(take(1)).subscribe(
      user => console.log(user)
    );
  }

  submitChangePassword(): void {
    this.auth.changePassword(this.changePasswordForm.value).pipe(take(1)).subscribe(
      user => {
        this.changePassword = false;
        this.openSnackBar('Password was changed successfully!', 'success-snackbar');
      },
      error => {
        this.changePassword = true;
        if (typeof error.error.message === 'string') {
          this.openSnackBar(error.error.message, 'alert-snackbar');
        }
      }
    );
  }

  checkPasswords(group: FormGroup): null | { notSame: boolean } {
    // tslint:disable-next-line:no-non-null-assertion
    const password = group.get('newPassword')!.value;
    // tslint:disable-next-line:no-non-null-assertion
    const confirmPassword = group.get('confirmPassword')!.value;

    return password === confirmPassword ? null : { notSame: true };
  }

  openSnackBar(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass
    });
  }

  onSelectFile(event: any): void {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e) => { // called once readAsDataURL is completed
        this.url = e?.target?.result;
        this.hasPhotoUploaded = true;
        console.log(this.url);
      };
    }
  }
  delete(): void {
    this.url = null;
    this.hasPhotoUploaded = false;
  }

  save(): void {
    console.log(this.url);
    this.hasPhotoUploaded = false;
  }

}
