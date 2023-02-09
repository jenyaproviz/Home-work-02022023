class User {
  fname
  lname
  phone
  birthday
  email
  constructor(fnameInput, lnameInput, phoneInput, birthdayInput, emailInput) {
    this.fname = fnameInput
    this.lname = lnameInput
    this.phone = phoneInput
    this.birthday = birthdayInput
    this.email = emailInput
  }
}
class UsersData {
  users
  constructor() {
    this.users = []
    this.readMethod()
  }
  addUser(information) {
    this.users.push(information)
    this.saveUser()
  }
  saveUser() {
    localStorage.setItem('usersStorage', JSON.stringify(this.users))
  }
  readMethod() {
    if (localStorage.getItem('users') != null) {
      this.users = JSON.parse(localStorage.getItem('users'))
    } else {
      this.saveUser()
    }
  }
}

let newUserData = new UsersData()
document.getElementById('save').addEventListener('click', () => {
  let fname = document.getElementById('fname').value
  let lname = document.getElementById('lname').value
  let phone = document.getElementById('phone').value
  let birthday = document.getElementById('birthday').value
  let email = document.getElementById('email').value

  let newUser = new User(fname, lname, phone, birthday, email)
  newUserData.addUser(newUser)
})

this.users = JSON.parse(localStorage.getItem('userStorage'))
