import { Injectable } from '@nestjs/common';
import type { ResponseData } from '../responseData';

@Injectable()
export class SweetService {
  getSweetList(): ResponseData {
    return {
      success: true,
      message: '',
      data: [
        {id:'s1',name:'11',image:'11',price:'111',type:'cake'},
        {id:'s2',name:'22',image:'22',price:'222',type:'cake'},
        {id:'s3',name:'33',image:'33',price:'333',type:'bread'},
        {id:'s4',name:'44',image:'44',price:'444',type:'cookies'},
        {id:'s5',name:'55',image:'55',price:'555',type:'sweet'},
      ]
    };
  }
}
