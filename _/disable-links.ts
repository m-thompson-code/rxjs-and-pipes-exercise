export function disableLinks() {
  document.body.addEventListener('click', function (event) {
    const target = event?.target as any;

    // filter out clicks on any other elements
    if (target?.nodeName == 'A') {
      console.log('href', target?.href);
      event.preventDefault();
    }
  });
}
