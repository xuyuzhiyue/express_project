import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'
export default {
  addCart(context,payload){
    // payload新添加的商品
    // let oldProduct =null;
    // for (let item of context.state.carList){
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }

    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.carList.find(item => item.iid === payload.iid)

      // 2.判断oldProduct
      if (oldProduct){
        // oldProduct.count += 1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前数量加+1')
      } else {
        payload.count = 1
        // context.state.carList.push(payload)
        context.commit(ADD_TO_CART,payload)
        resolve('添加了新的商品')
      }
    })

  }
}
