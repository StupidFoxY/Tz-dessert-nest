import { Injectable } from '@nestjs/common';
import type { ResponseData } from '../responseData';

const initData = [
  {id:'s1',name:'焦糖海盐摩卡卷',img:'http://sns-webpic-qc.xhscdn.com/202406191352/e496ff3b28d1a398da643194539d1cd2/1040g008310ipm7ng6c6g49hgntkihr7g78hccl8!nd_dft_wlteh_webp_3',price:30, type:'cake'},
  {id:'s2',name:'茉莉抹茶卷',img:'http://sns-webpic-qc.xhscdn.com/202406191354/7ab779b11b1b0899c6db68c1366c1631/1040g008310l4h0tr6o6g49hgntkihr7gqhlfn5o!nd_dft_wlteh_webp_3',price:30, type:'cake'},
  {id:'s3',name:'北海道吐司',img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',price:333, type:'bread'},
  {id:'s4',name:'黄油曲奇',img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',price:444, type:'cookies'},
  {id:'s5',name:'香草奶油泡芙',img:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',price:555, type:'sweet'},
];

@Injectable()
export class SweetService {
  getSweetList(): ResponseData {
    return { success: true, message: '', data: initData };
  }

  getSweetDetail(request: any): ResponseData {
    if(request.length){
      let data = initData.filter((item) => request.includes(item.id));

      if(data.length == request.length){
        return { success: true, message: '', data: data };
      }else{
        return { success: false, message: 'Id does not exist' };
      }
    }else{
      return { success: true, message: '', data: [] };
    }
    
  }
}
