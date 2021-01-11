document.addEventListener('DOMContentLoaded', () => {

  if(!localStorage.getItem('username')) {
    //if localstorage doesn't contain username display login page at receive username as input.
    document.querySelector('#init').style.display = 'block';
    document.querySelector('#main').style.display = 'none';

    document.querySelector('#login').onsubmit = () => {
      let username = document.querySelector('#user-name').value;
      localStorage.setItem('username', username);
      alert(`Welcome ${username}`);
    }
  }
  else {
    //if localstorage contains username display channel page.
    document.querySelector('#init').style.display = 'none';
    document.querySelector('#main').style.display = 'block';
    document.querySelector('#display').innerHTML = localStorage.getItem('username');
  }
});
