import { BaseDto } from './base-dto';

export class TodoDto extends BaseDto {
    description: string | undefined;
    isCompleted: boolean | undefined;
}
