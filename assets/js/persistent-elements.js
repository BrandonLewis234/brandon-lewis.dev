// =============
// On Page Load
// =============

// Load all elements from local storage
document.addEventListener('DOMContentLoaded', function()  
{
    let element = document.body;
    let theme = localStorage.getItem("theme") || "";

    if (theme) {
        element.classList.add(theme);
    }
});

window.addEventListener("load", function () 
{
    document.body.classList.remove("preload");
});

// =============
// Sidebar
// =============

function screenIsSmall()
{
    return window.innerWidth <= 1200;
}

function toggleSidebar(e)
{
    const element = document.body;

    element.classList.toggle('sb-collapsed');
    const isExpanded = element.classList.contains("sb-collapsed");
    localStorage.setItem("sidebarState", isExpanded ? "sb-collapsed" : "");

    if(isExpanded)
    {
        Array.from(document.getElementsByClassName("show-submenu")).forEach(element => {
            element.classList.remove("show-submenu");
            element.previousElementSibling.querySelector('i:last-child').classList.toggle('rotate');
        });
    }
}

// Save sidebar state in local web storage to keep a persistent state choice on page reload.
document.addEventListener('DOMContentLoaded', function()
    {
    const collapseSidebar = document.querySelector('[data-collapse-sidebar]');
    const element = document.body;

    const storedSidebarState = localStorage.getItem("sidebarState");
    if (screenIsSmall()) {
        element.classList.add("sb-collapsed");
    }
    else if (storedSidebarState) {
        element.classList.add(storedSidebarState);
    }

    // Toggle sidebar when clicked anywhere other than an interactable element
    collapseSidebar.addEventListener('click', function(e)
    {
        const ignoredElement = e.target.closest('[href], #theme-toggle');

        if (!ignoredElement) {
            toggleSidebar(e);
        }
    });
    // Toggle sidebar when clicked off of it when screen is small
    document.addEventListener('click', function(e) 
    {
        const isLink = e.target.tagName === 'A' || e.target.closest('a');
        if (!(document.querySelector(".sidebar").contains(e.target)) && !(element.classList.contains("sb-collapsed")) && !(isLink))
        {
            toggleSidebar(e);
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

    const theme = element.classList.contains("light-mode") ? "light-mode" : "";
    localStorage.setItem("theme", theme);
}

// =============
// Sub-menu Toggle
// =============
function toggleSubMenu(element)
{
    
    element.nextElementSibling.classList.toggle("show-submenu");
    element.querySelector('i:last-child').classList.toggle('rotate');

    if (screenIsSmall())
    {
        return;
    }
    
    if(document.body.classList.contains("sb-collapsed"))
    {
        toggleSidebar();
    }
}