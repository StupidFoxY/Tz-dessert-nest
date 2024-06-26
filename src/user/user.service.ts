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

  getAddress(token:string): ResponseData {
    if(token == 'tzxka0620ttxka1029'){
      return {
        success: true,
        message: '',
        data: [
          {
            id:"138004420",
            name: "李琰钰",
            provinceId: "15",
            cityId: "1262",
            countyId: "1265",
            townId: "8291",
            address: "秋滨工业城兴滨街8号",
            phone: "13773072140",
            provinceName: "浙江",
            cityName: "金华市",
            countyName: "婺城区",
            townName: "白龙桥镇",
            default: false,
            coord_type: "2"
          },
          {
            id:"138004421",
            name: "李琰钰",
            provinceId: "15",
            cityId: "1262",
            countyId: "1265",
            townId: "8291",
            address: "韵动四季花园",
            phone: "13773072140",
            provinceName: "江苏",
            cityName: "苏州市市",
            countyName: "虎丘区",
            townName: "浒墅关镇",
            default: true,
            coord_type: "2"
          }
        ]
      };
    }else {
      return {
        success: false,
        message: '不存在此用户',
        data: null
      };
    }
  }
}
