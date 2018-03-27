# NgxPhoneMaskBr

Angular directive for autoformatting brazilian phone numbers.

## Usage
Install via npm:
```shell
npm install ngx-phone-mask-br
```

Import in your `app.module.ts`:
```ts
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';

@NgModule({
  imports: [
    NgxPhoneMaskBrModule
  ]
})
```

Use it:
```html
<input ngxPhoneMaskBr [(ngModel)]='yourModelName'>
or
<input ngxPhoneMaskBr [formControl]='yourControl'>
or
<input ngxPhoneMaskBr formControlName='yourControlName'>
```

## Contribution
This component is under development. Pull requests and issues (PR's better) are welcome.

To publish:
```
git commit
npm version patch
npm run build
npm publish dist
```