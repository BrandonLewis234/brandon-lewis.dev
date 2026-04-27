// =============
// On Page Load
// =============

// Load all elements from local storage
document.addEventListener('DOMContentLoaded', function()  {
    let element = document.body;
    let theme = localStorage.getItem("theme") || "";
    let sidebarState = localStorage.getItem("sidebar-extended") || "";

    if (theme) {
        element.classList.add(theme);
    }

    if (sidebarState) {
        element.classList.add(sidebarState);
    }
});

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});

// =============
// Sidebar
// =============

function screenIsSmall() {
    return window.innerWidth <= 1200;
}

// Save sidebar state in local web storage to keep a persistent state choice on page reload.
document.addEventListener('DOMContentLoaded', function() {
    const collapseSidebar = document.querySelector('[data-collapse-sidebar]');
    const element = document.body;

    const storedSidebarState = localStorage.getItem("sidebarState");
    if (screenIsSmall()) {
        element.classList.add("sb-collapsed");
    }
    else if (storedSidebarState) {
        element.classList.add(storedSidebarState);
    }

    // Toggle sidebar on click
    collapseSidebar.addEventListener('click', function(e) {
        const ignoredElement = e.target.closest('[href], #theme-toggle');

        if (!ignoredElement) {
            e.preventDefault();
            element.classList.toggle('sb-collapsed');
            const isExpanded = element.classList.contains("sb-collapsed");
            localStorage.setItem("sidebarState", isExpanded ? "sb-collapsed" : "");
        }
    });
});


// =============
// Theme Toggle
// =============

// Save theme in local web storage to keep a persistent style choice on page reload.
function themeToggle() 
{
    let element = document.body;
    element.classList.toggle("light-mode");

    let theme = element.classList.contains("light-mode") ? "light-mode" : "";
    localStorage.setItem("theme", theme);
}