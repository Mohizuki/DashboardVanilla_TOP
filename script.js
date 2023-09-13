const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        sidebar.style.width = '250px';
    } else {
        sidebar.style.width = '0';
    }
});
