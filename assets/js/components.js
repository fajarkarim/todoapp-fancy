
let API_URL = 'http://localhost:3000/api'
axios.defaults.baseURL = API_URL

Vue.component('coba', {
  name: 'coba',
  template: `<p>halo</p>`
})

Vue.component('login', {
  name: 'login',
  props: ['loginstatus'],
  template:
  `
  <div class="container">
    <div class="row justify-content-center">
      <div class="card col-md-4 login-box">
        <div class="card-block">
          <form class="" action="index.html" method="post">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">{{ status }}</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" placeholder="Enter password">
            </div>
            <button @click.prevent="loginState" type="submit" class="btn btn-primary">Submit</button>
          </form>
          <div class="text-center">
            <p>or</p>
          </div>
          <hr />
          <div class="" id="fb-login-btn">
            <button @click.prevent="loginState" class="btn btn-primary col-12">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  data () {
    return {
      email: ''
    }
  },
  methods: {
    loginState () {
      this.$emit('status')
    }
  },
  computed: {
    status () {
      return this.email.length ? '' : 'please enter somthing'
    }
  }

})

Vue.component('sidebar',{
  name: 'sidebar',
  template: `
  <div class="col-12 col-md-3" style="border: blue solid">
    <div class="list-group">
      <a v-for="c in categories" href="#" class="list-group-item list-group-item-action">{{ c }}</a>
    </div>
  </div>`,
  data () {
    return {
      categories: ['Personal', 'Work']
    }
  },
  methods: {
    getCategories: function () {

    }
  }
})

Vue.component('navbar', {
  name: 'navbar',
  template: `
  <header>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">logo</a>

        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <form class="form-inline my-2 my-lg-0">
            <input v-model="searchValue" class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="#">+</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">user</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>`,
  data () {
    return {
      items: '',
      searchValue: ''
    }
  },
  methods: {
    searchTodo: function () {
      let self = this
      axios.get('/search', {
        params: {
          q: self.searchValue
        }
      })
      .then(response => {
        self.items = response.data
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
})

Vue.component('addtodo', {
  template: `
  <div id="newTask-box" class="pb-3">
    <div class="card">
      <div class="card-block">
        <div class="input-group">
          <input v-model="todo" type="text" class="form-control" placeholder="add new task">
          <span class="input-group-btn">
          <button @click="addTodo" class="btn btn-secondary" type="button">+</button>
          </span>
        </div>
      </div>
    </div>
  </div>`,
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo: function () {
      this.$emit('add', this.todo)
    }
  }
})

Vue.component('todos', {
  name: 'todos',
  template: `
  <div class="col-12 col-md-9" style="border: red solid">
    <div id="agenda">
      <div >
        <h2 class="text-center">Today Todos</h2>
      </div>

      <addtodo
      @add="newTodo"/>

      <ul>
        <li v-for="item in todos">
          <span v-if="!item.editState" @click="edit(item)">{{ item.content }}</span>
          <input v-else @keyup.enter="saveTodo"></input>
          <span class="float-right">X</span>
        </li>
        <li>makan bakpia</li>
      </ul>
    </div>
  </div>`,
  data () {
    return {
      userID: '59869e587fda0c4972d7f49b',
      editVal: [],
      todos: []
    }
  },
  methods: {
    edit: function (idx) {
      // this.todos[idx].editState = true
      console.log(this.todos);
    },
    saveTodo: function () {

    },
    newTodo: function() {
      console.log(`masuk bikin`);
    },
    addTodo: function () {
      console.log(`masuk nih`);
    },
    getTasks: function() {
      let self = this
      axios.get(`/tasks/${self.userID}`)
      .then(response => {
        self.todos = response.data[0].todos
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
  created: function () {
    this.getTasks()
  }
})
