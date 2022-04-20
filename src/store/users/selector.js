export const selectToken = () => localStorage.getItem('token') ? true : false
export const selectUserFromToken = () => localStorage.getItem('token')