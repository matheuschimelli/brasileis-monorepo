export interface Notification {
  title: string;
  error: boolean;
  errorMsg?: string;
  crawler: {
    name: string;
    id: string | number;
    startTime?: string | Date;
    endTime?: string | Date;
    day?: string | Date
  }
}
