// =======================================
// Header, Footer, and Sidebar Templates
// =======================================

class templateHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <script src="https://kit.fontawesome.com/38ef0d6706.js" crossorigin="anonymous"></script>
            <div>
                <a href="https://brandon-lewis.dev"><img src="../favicon.ico"></img></a>
                <h1>Brandon Lewis' Project Repository</h1>
            </div>
        `
    }
}

class templateSidebar extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <aside class="sidebar">
                <ul>
                    <li>
                        <a id="toggle-sidebar">
                            <i class="fa fa-angle-double-left"></i>
                            <span>Collapse</span>
                        </a>
                    </li>                
                    <li>
                        <a href="/" id="home">
                            <i class="fa fa-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="../preview" id="preview">
                            <i class="fa fa-magnifying-glass"></i>
                            <span>Preview</span>
                        </a>
                    </li>                
                    <li>
                        <a href="#" id="documentation">
                            <i class="fa fa-book"></i>
                            <span>Documentation</span>
                        </a>
                    </li>
                    <li>
                        <a onclick="toggleSubMenu(this)" href="#" id="projects dropdown">
                            <i class="fa fa-lightbulb"></i>
                            <span>Projects</span>
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="sub-menu">
                            <div>
                                <li><a href="#">Project 1</a></li>
                                <li><a href="#">Project 2</a></li>
                                <li><a href="#">Project 3</a></li>                    
                            </div>
                        </ul>
                    </li>                 
                    <li>
                        <a href="#" id="settings">
                            <i class="fa fa-cog"></i>
                            <span>Settings</span>
                        </a>
                    </li>      
                    <li>
                        <a onclick="themeToggle()" id="theme-toggle">
                            <i class="fa fa-moon"></i>
                            <span>Toggle Dark Mode</span>
                        </a>
                    </li>
                </ul>
            </aside>
        `
    }
}

class templateFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <h1>Footer</h1>
        `
    }
}

customElements.define('template-header', templateHeader)
customElements.define('template-sidebar', templateSidebar)
customElements.define('template-footer', templateFooter)