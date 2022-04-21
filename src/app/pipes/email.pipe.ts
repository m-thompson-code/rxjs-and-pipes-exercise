import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe',
})
export class EmailPipe implements PipeTransform {
  /**
   * Formats email as a link that opens default mail program,
   * create new message with the TO field already filled out.
   */
  transform(value: string): string {
    if (!value) {
      return "";
    }

    // We don't want to worry about case-sensitive emails,
    // so we will lowercase them
    return `mailto:${value.toLowerCase()}`;
  }
}
