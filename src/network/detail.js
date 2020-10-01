import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'https://api.apiopen.top/musicRankingsDetails?type=1/detail',
    params:{
      iid
    }
  })
}


