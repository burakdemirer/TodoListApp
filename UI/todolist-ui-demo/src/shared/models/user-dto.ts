import { BaseDto } from './base-dto';

export class UserDto extends BaseDto {
    username: string | undefined;
    password: string | undefined;
}
