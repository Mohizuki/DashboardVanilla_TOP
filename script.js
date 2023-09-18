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

// Add this code to handle smaller screens (e.g., phones)
const mediaQuery = window.matchMedia('(max-width: 720px)');

function handleMobileView(event) {
    if (event.matches) {
        sidebar.classList.remove('active');
        sidebar.style.width = '0';
    } else {
        // Reset sidebar for larger screens
        sidebar.style.width = '250px'; // Adjust the width as needed
    }
}

mediaQuery.addListener(handleMobileView);
handleMobileView(mediaQuery);
