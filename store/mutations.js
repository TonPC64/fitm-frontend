export const INCREMENT = (state) => {
  state.counter++
}

export const SETACTIVITY = (state, {label, description}) => {
  state.dataUpload.label = label
  state.dataUpload.description = description
}

export const AUTH = (state, auth) => {
  state.auth = auth
}

export const FILENAME = (state, filename) => {
  state.filename = filename
}

export const PATH = (state, path) => {
  state.dataUpload.img.push(path)
}

export const ADD_IMG_FIELD = (state) => {
  state.images.push('')
}

export const IMAGE_INDEX = (state, {index, imgData}) => {
  state.images[index] = imgData
}

export const FINDEDATANEW = (state, index) => {
  let dataRecieve = state.dataRecieve
  state.dataNew = dataRecieve[index]
}
