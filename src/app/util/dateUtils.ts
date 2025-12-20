import { localDateTimeArrayToDate } from '../helpers/dateHelpers';
import { PostResponseDto } from '../model/post';

export interface PostUi
  extends Omit<PostResponseDto, 'fechaHora' | 'createdAt'> {
  fechaHora: Date | null;
  createdAt: Date | null;
}

export class DateUtils {
  static parseDMY_HM(value: string): Date {
    // "06-12-2025 22:18"
    const [datePart, timePart] = value.trim().split(' ');
    const [dd, mm, yyyy] = datePart.split('-').map(Number);
    const [HH, MM] = timePart.split(':').map(Number);

    return new Date(yyyy, mm - 1, dd, HH, MM, 0, 0); // mes 0-based
  }
}
