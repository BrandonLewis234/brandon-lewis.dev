const expandSidebar = document.querySelector('[data-expand-sidebar]');

expandSidebar.addEventListener('click', function(e)
{
    e.preventDefault();
    document.body.classList.toggle('sb-expanded');
});