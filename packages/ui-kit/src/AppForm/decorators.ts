export const APP_FORM_SUBMIT = Symbol.for('APP_FORM_SUBMIT');

export const Submit = () => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(APP_FORM_SUBMIT, propertyKey, target, 'method');
}
