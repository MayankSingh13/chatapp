document.addEventListener('DOMContentLoaded', () => {

  if(!localStorage.getItem('username')) {
    //if localstorage doesn't contain username display login page at receive username as input.
    document.querySelector('#init').style.display = 'block';
    document.querySelector('#main').style.display = 'none';
    document.querySelector('#chat').style.display = 'none';

    document.querySelector('#login').onsubmit = () => {
      let username = document.querySelector('#user-name').value;
      localStorage.setItem('username', username);
      alert(`Welcome ${username}`);
    }
  }
  else {
    //if localstorage contains username display channel page.
    if(!localStorage.getItem('currentchannel')) {
      document.querySelector('#init').style.display = 'none';
      document.querySelector('#main').style.display = 'block';
      document.querySelector('#chat').style.display = 'none';
      document.querySelector('#submit').disabled = true;
      document.querySelector('#display').innerHTML = localStorage.getItem('username');
      let username = localStorage.getItem('username');

      //select channel name from the list.
      document.querySelectorAll("#channel_name").forEach(li => {
      li.onclick = () => {
        oldchannel = localStorage.getItem('currentchannel');
        console.log(oldchannel);
        localStorage.setItem('currentchannel', li.dataset.channel);
        //socket.emit('join channel', localStorage.getItem('displayname'), li.dataset.channel, oldchannel);
        //return false;
      };
    });

    document.querySelector('#channels').onkeyup = () => {
      if (document.querySelector('#channels').value.length > 0)
        document.querySelector('#submit').disabled = false;
      else
        document.querySelector('#submit').disabled = true;
      };

    }
    else {
      //chat room if currentchannel and username exits in localStorage
      document.querySelector('#init').style.display = 'none';
      document.querySelector('#main').style.display = 'none';
      document.querySelector('#chat').style.display = 'block';
      document.querySelector('#submit_message').disabled = true;
      document.querySelector('#name').innerHTML = localStorage.getItem('username');
      document.querySelector('#curr_channel').innerHTML = localStorage.getItem('currentchannel');
      document.querySelector('#leave_channel').onsubmit = () => {
        localStorage.removeItem('currentchannel');
      }
      document.querySelector('#send_block').onkeyup = () => {
        if (document.querySelector('#send_block').value.length > 0)
          document.querySelector('#submit_message').disabled = false;
        else
          document.querySelector('#submit_message').disabled = true;
        };

    }
  }
});
