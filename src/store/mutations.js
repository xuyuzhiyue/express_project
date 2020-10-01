import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // mutations唯一目的就是修改state的状态
  // mutations中的每一个方法尽可能完成事件比较单一
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){
    payload.checked =true
    state.carList.push(payload)
  }


}
