import _ from 'lodash'
import {socket} from '../paths'

/**
 * Join a channel.
 *
 * @param object channel
 * @return console.log (either OK or ERROR)
 */
const join_1 = (channel) => {
  if (!_.isObject(channel)) return console.log("join_1() - passed param should be an object.");
  //topic name
  const {topic} = channel
  //join
  return channel.join()
    .receive("ok", () => console.log(`${topic} join() OK`) )
    .receive("error", () => console.log(`${topic} join() ERROR`) )
}

/**
 * Join a channel and do something on OK and ERROR.
 *
 * @param object channel
 * @param function ok_fn
 * @param function ok_error
 * @return channel.join()
 */
const join_3 = (channel, ok_fn, error_fn) => {
  if (!_.isObject(channel)) return console.log("join_3() - first passed param should be an object.");
  if (!_.isFunction(ok_fn) || !_.isFunction(error_fn)) return console.log("join_3() - second and third passed params should be functions.");
  //join
  return channel.join()
    .receive("ok", ok_fn)
    .receive("error", error_fn)
}


/**
 * Leave a channel.
 *
 * @param object channel
 * @return console.log (either OK or ERROR)
 */
const leave_1 = (channel) => {
  if (!_.isObject(channel)) return console.log("leave_1() - passed param should be an object.");
  //topic name
  const {topic} = channel
  //join
  channel.leave()
    .receive("ok", () => console.log(`${topic} leave() OK`) )
    .receive("error", () => console.log(`${topic} leave() ERROR`) )
}


/**
 * Leave a channel and do something on OK and ERROR.
 *
 * @param object channel
 * @param function ok_fn
 * @param function ok_error
 * @return channel.leave()
 */
const leave_3 = (channel, ok_fn, error_fn) => {
  if (!_.isObject(channel)) return console.log("leave_3() - first passed param should be an object.");
  if (!_.isFunction(ok_fn) || !_.isFunction(error_fn)) return console.log("leave_3() - second and third passed params should be functions.");

  //leave
  return channel.leave()
    .receive("ok", ok_fn)
    .receive("error", error_fn)
}

export {join_1, join_3, leave_1, leave_3}
