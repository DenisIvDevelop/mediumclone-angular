import { isSubmittingSelector, validationErrorsSelector } from './../../store/selectors';
import { registerAction } from './../../store/actions/register.action';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class ReqisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: '',
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
