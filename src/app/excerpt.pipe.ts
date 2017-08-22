import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, wordCount: number = 5): string {
    return value
      .split(' ') // split into words
      .slice(0, wordCount) // get a subset
      .join(' '); // combine into string
  }

}
