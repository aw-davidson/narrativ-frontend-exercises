# Frontend exercises

Modify the javascript file without changing HTML or CSS. Use of jQuery is supported.

## Navigation
- Modify `nav.js`.

- When nav item is clicked on, the dropdown should toggle down, and the sub navigation fades in. The nav item should be underlined (hint: use `active` class on the link element).

- When clicking on another nav item, the sub nav should fade in (dropdown stays open);

- When clicking on a nav item that is already displayed, the dropdown should toggle up (hidden).

## Slideslow
- Modify `slideshow.js`.

- On load, the slide show should display the first image.

- When clicking the left or right nav button, the previous or next image should be shown (hint: use class `current`).

- At the last image, the next button should be disabled. At the first image, the previous button should be disabled.

- The caption div (`#caption`) should show the caption corresponding to the current image.

### Archive
- Modify `archive.js`.

- On load, the four static articles are shown. When clicking load more:
  + An ajax request should be made to the JSON endpoint to retrieve the next four articles.
  + While loading, the button should be disabled and read `Loading articles`.
  + Display the new articles in the list.

- Article endpoint: takes an offset parameter in order to return more articles. E.g. `https://credentials-api.generalassemb.ly/explorer/posts?offset=4`.

- When there's no more article to load, the button should be disabled and read `End of Archive`.

- If there's an error loading articles, the button should say `Error loading articles`.
