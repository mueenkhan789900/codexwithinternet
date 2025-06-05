document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('emailList');
  const clearBtn = document.getElementById('clear');

  function render(emails) {
    list.innerHTML = '';
    if (emails.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No emails saved';
      list.appendChild(li);
    } else {
      emails.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        list.appendChild(li);
      });
    }
  }

  chrome.storage.local.get({ emails: [] }, ({ emails }) => {
    render(emails);
  });

  clearBtn.addEventListener('click', () => {
    chrome.storage.local.set({ emails: [] }, () => {
      render([]);
    });
  });
});
