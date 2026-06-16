# Re-review — Task1 / Day1 (Review 1)

Hi! I checked your code again against the earlier Day 1 feedback. Here is what changed and what is still open.

**Overall:** Some fixes done — a few items still pending, and **delete is currently broken**.

## What you fixed since last review

- Due date input now clears correctly after adding a task (`taskDue.value = ''`).
- Duplicate `id="task-form"` removed from the form divs.
- Table headers now use `<th>` instead of `<td>`.

## Still missing from requirements

- **Description field** is still not validated (empty description is allowed).

## Coding practices — please update

- **Use constants** — `'Incomplete'`, `'Complete'`, and `'tasks'` are still hardcoded. Add at the top of `script.js`, e.g. `const STORAGE_KEY = 'tasks'`.
- **Move inline styles to CSS** — `style="width: 70%"` on the container and button margins in `index.html` should live in `style.css`.
- **Use `addEventListener`** — Add button still uses `onclick="addTask()"` in HTML; attach the click handler in `script.js` instead.
- **Add `<html lang="en">`** — page has `<!DOCTYPE html>` and `<head>` but no `<html>` wrapper around the document.

## Bug to fix

- **Delete does not work. Leaving on you to figure out why. Revert backon teams once you figure that out why**

## Next step for you

1. Fix **delete** first — assign the filtered array back to `tasks`, then test delete in the browser.

