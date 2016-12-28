import { FormBuilder } from '@angular/forms';
import { RutValidator } from '../../src/ng2-rut.module';
export declare class DemoAppComponent {
    user: User;
    private reactiveForm;
    constructor(fb: FormBuilder, rv: RutValidator);
    onSubmit(form: any): void;
}
export declare class User {
    name: string;
    rut: string;
    constructor(name: string, rut: string);
}
