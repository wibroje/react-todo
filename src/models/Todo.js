import axios from 'axios'

class TodoModel {
  static all(){
    let request = axios.get("https://super-crud.herokuapp.com/api/todos")
    return request
  }
}

export default TodoModel