export const SUBMIT = 'SUBMIT';

export const sendData = (payload) => ({
  type: SUBMIT,
  ...payload
})