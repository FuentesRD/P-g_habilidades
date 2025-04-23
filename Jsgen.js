document.querySelector('.dropdown').addEventListener('click', function(e) {
e.preventDefault();
this.querySelector('.dropdown-content').classList.toggle('show');
});