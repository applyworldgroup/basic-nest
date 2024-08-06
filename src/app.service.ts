import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private defaultObject: { status: boolean; message: string };

  constructor() {
    this.defaultObject = { status: true, message: 'Operation Successful' };
  }

  getHello(): { status: boolean; message: string } {
    return this.defaultObject;
  }
}
