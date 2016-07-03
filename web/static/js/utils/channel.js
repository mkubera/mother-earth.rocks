import {socket} from 'web/static/js/paths'


/**
 * Join a channel. On successful join, leave the channel.
 * Used to initiate some action on the server side (e.g. create db tables)
 *
 * @param object channel
 * @return console.log with either OK or ERROR (from either join() or leave())
 */
const joinAndLeave_1 = (channel) => {
  if (!_.isObject(channel))
    return console.log(`fn utils_channel.joinAndLeave_1 expects an object but got ${typeof channel} instead.`)

  //channel's topic name (e.g. "admin:db_init")
  const {topic} = channel;

  //join
  return channel.join()
    .receive("ok", ({msg}) => {
      console.log(`${topic} join() OK`)
      alert(msg)

      //AndLeave
      channel.leave()
        .receive("ok", ({msg}) => {
          console.log(`${topic} leave() OK`)
        })
        .receive("error", ({msg}) => {
          console.log(`${topic} leave() ERROR`)
        })
    })
    .receive("error", ({msg}) => {
      console.log(`${topic} join() ERROR`)
      alert(msg);
    })
}


/**
 * Join a channel.
 *
 * @param object channel
 * @return console.log (either OK or ERROR)
 */
const join_1 = (channel) => {
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
  //leave
  return channel.leave()
    .receive("ok", ok_fn)
    .receive("error", error_fn)
}

export { joinAndLeave_1, join_1, join_3, leave_1, leave_3 }
