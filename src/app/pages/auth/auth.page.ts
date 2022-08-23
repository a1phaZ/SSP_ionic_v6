import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.page.html',
	styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

	form: FormGroup;

	constructor(
		private authService: AuthService
	) {
		this.form = new FormBuilder().group({
			login: [null, [Validators.required]],
			password: [null, [Validators.required]]
		});
	}

	ngOnInit() {
	}

	async onSubmit(form) {
		const authObject = {
			l: form.value.login,
			p: form.value.password
		};
		this.authService.authByLoginPass(authObject);
		// this.form.reset();
	}
}
