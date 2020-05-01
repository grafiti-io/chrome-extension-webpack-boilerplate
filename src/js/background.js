import '../img/icon-128.png';
import '../img/icon-34.png';
import '../img/icon-light-128.png';
import '../img/icon-light-34.png';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.dir(request);
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    ([currentTab]) => {
      console.log(currentTab.id);
      console.dir(currentTab);

      const url = 'https://beta.grafiti.io/sources';
      const formData = new FormData();

      formData.append('submitted_url', currentTab.url);

      fetch(url, {
        method: 'post',
        mode: 'no-cors',
        body: formData,
      })
        .then((r) => {
          console.log(r);
          sendResponse({ sent: r.status === 0 || r.ok, url: currentTab.url });
        })
        .catch((r) => {
          console.error(r);
          sendResponse({ sent: false, url: currentTab.url });
        });
    },
  );

  return true; // we'll respond asynchronously
});
