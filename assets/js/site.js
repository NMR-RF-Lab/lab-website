// Assemble email links in the browser so the address is not sitting in the HTML for scrapers.
document.querySelectorAll('a.email[data-user][data-domain]').forEach(function (a) {
  var address = a.dataset.user + '@' + a.dataset.domain;
  a.href = 'mailto:' + address;
  a.textContent = address;
});
