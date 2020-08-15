var storage = {
  set(key, list){
    localStorage.setItem(key, JSON.stringify(list));
  },
  get(key){
    return JSON.parse(localStorage.getItem(key));
  },
  remove (key){
    localStorage.removeItem(key)
  }
}

export default storage
