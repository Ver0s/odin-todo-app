# Todo app for the odin project

The deeper I was in this project the more I realized that essentialy every item on the page should be generated dynamically in this interaction-heavy CRUD project. Setting elements internal state - how many items does it have, handling empty states, dynamic styling. It all is much easier to manage if the element is created dynamically. But at the same time handling events in this type of app with vanilla JS is tricky. You can’t really select an item that doesn’t yet exist in the DOM. First I experimented with event delegation but I stuck with utility functions to attach all event listeners after an item has been added to DOM. I’m still debating whether event delegation is simpler and more proper way of doing this.

All of these things really hammer one conclusion into my head - every developer should go through this kind of project in vanilla JS at least once to be able to understand why tools such as React exist and what problems do they solve. It taught me a lot but there's still much room for improvement in terms of code structure etc. This was the first project that really made me question my abilities but I pushed through and hope to crack more challenging stuff in the future.

**Project live preview: https://ver0s.github.io/odin-todo-app/**
