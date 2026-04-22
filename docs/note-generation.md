# Text to parse:

```
<div id="content" contenteditable="true" style="border:1px solid #ccc; padding:10px; min-height:100px;">
  !!! [type of note]
  [note contents]
</div>
```

# Javscript:

```
<script>
  function parseNotes(container) {
    const rawText = container.innerText || container.textContent;

    // Regex to match !!! <type> (optional title) + content lines until next note or end
    // We'll keep it simple: !!! <type> \n content lines
    const noteRegex = /!!!\s*(\w+)\s*\n([\s\S]*?)(?=(\n!!!|$))/g;

    let html = rawText.replace(noteRegex, (match, type, content) => {
      content = content.trim().replace(/\n/g, '<br>'); // preserve line breaks
      const title = type.charAt(0).toUpperCase() + type.slice(1); // capitalize

      return `
        <div class="note note-${type.toLowerCase()}">
          <div class="note-title">${title}</div>
          <div class="note-content">${content}</div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  const contentDiv = document.getElementById('content');

  // Initial parse
  parseNotes(contentDiv);

  // Optional: re-parse on input (live update)
  contentDiv.addEventListener('input', () => {
    // Save caret position if needed (advanced)
    parseNotes(contentDiv);
  });
</script>
```

# CSS:

```
.note {
  border-left: 4px solid #4a90e2;
  background-color: #e6f0fa;
  padding: 12px 16px;
  margin: 1em 0;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  position: relative;
}

.note-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #2a4a8a;
  margin-bottom: 4px;
}

.note-content {
  color: #333;
}

.note-to-do {
  border-color: #f39c12;
  background-color: #fff4e5;
  color: #7f6000;
}
```