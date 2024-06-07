import { Injectable } from '@nestjs/common';
import type { ResponseData } from '../responseData';

@Injectable()
export class UserService {
  getUserInfo(token:string): ResponseData {
    if(token == 'tzxka0620ttxka1029'){
      return {
        success: true,
        message: '',
        data: {
          user:{
            username:'lyy',
            userType:'normal'
          },
        }
      };
    }else {
      return {
        success: false,
        message: '不存在此用户',
        data: null
      };
    }
  }

  login(request:any): ResponseData {
    if(request.username == 'lyy' && request.password == 'lyy123123'){
      return {
        success: true,
        message: '登录成功',
        data: {
          user:{
            username:'lyy',
            userType:'normal'
          },
          token:'tzxka0620ttxka1029'
        }
      };
    }else {
      return {
        success: false,
        message: '账号或密码错误',
        data: null
      };
    }
  }
}
