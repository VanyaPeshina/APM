import { PipeTransform } from "@angular/core";
import {Pipe} from "@angular/core";

// A custom Pipe to transform any string which contains some character with " ".
@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, " ");
  }
}
