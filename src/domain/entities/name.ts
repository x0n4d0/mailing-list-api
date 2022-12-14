import { Either, left, right } from '@/shared';
import { InvalidNameError } from '@/domain/errors';

export class Name {
  private readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static create(name: string): Either<InvalidNameError, Name> {
    if (!this.validate(name)) {
      return left(new InvalidNameError(name));
    }

    return right(new Name(name.trim()));
  }

  static validate(name: string): boolean {
    if (!name || name.trim().length < 2 || name.trim().length > 256) {
      return false;
    }

    return true;
  }

  public get value(): string {
    return this.name;
  }
}
