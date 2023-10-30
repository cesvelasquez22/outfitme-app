import { Directive, inject, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuiteResult } from 'vest';

@Directive({
    // make sure it has a model and suite
    selector: 'form[model][suite]',
    standalone: true,
})
export class FormDirective<T> {
    @Input() public model!: T;
    @Input() public suite!: (model: T, field: string) => SuiteResult<string, string>;

    // expose ngForm, we need it in our child directives/components
    public readonly ngForm = inject(NgForm, { self: true });
}