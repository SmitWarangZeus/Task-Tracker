# Feedback — Task1 / Day1

Hi! Here is feedback on your **Task-Tracker** work.

**Overall:** Good job

## What you did well

- You built a working task tracker with HTML, CSS, and JavaScript — nice choice for Day 1.
- All four required features work: **add**, **view list**, **mark complete**, and **delete**.
- You use **localStorage** to save tasks — data persists after refresh.
- You validate empty task name and past due dates before adding.
- Tasks are sorted by due date — a thoughtful extra touch.
- HTML, CSS, and JS are in separate files — good separation.
- README covers technology, how to run, features, challenges, and planned improvements.
- You committed your code to Git.

## What is missing or incomplete

- README is missing a short **"What you built"** section — the requirements ask for this explicitly.
- **Screenshot or screen recording** of the working app is required — add this if you have not submitted it yet.
- Description field is not validated — you can add a task with an empty description (only name and date are checked).

## Coding practices to improve

- **Bug to fix** — in `addTask()`, line 24 says `task.dueDate.value = ''` but it should be `taskDue.value = ''`. Right now the due date input does not clear after adding a task.
- **Use constants for repeated text** — `'Incomplete'`, `'Complete'`, and the localStorage key `'tasks'` are hardcoded in multiple places. Put them at the top of `script.js` as constants (e.g. `const STORAGE_KEY = 'tasks'`).
- **Fix duplicate IDs** — three divs all use `id="task-form"`. IDs must be unique in HTML; use a class instead (`class="task-form"`).
- **Use `<th>` for table headers** — your header row uses `<td>`; it should use `<th>` for "Task Name", "Due Date", etc.
- **Move inline styles to CSS** — `style="width: 70%"` and button margins in `index.html` belong in `style.css` to keep HTML clean.
- **Prefer event listeners over inline `onclick`** — attach the Add button click in `script.js` with `addEventListener` instead of `onclick="addTask()"` in HTML.
- **Add missing `<html>` tag** — your page starts with `<head>` but should wrap everything in `<html lang="en">`.
- **Improve delete logic** — `deleteTask` uses `forEach` + `splice`, which can skip items. Use `filter` or `findIndex` instead — cleaner and safer.
- **User feedback** — `alert()` works for Day 1, but showing a small message on the page is nicer than popup alerts.

## Next step for you

- Fix the due date clear bug (`taskDue.value = ''`) — quick win, test by adding two tasks in a row.
- Add constants for status strings and the storage key.
- Update README with a "What you built" paragraph and attach a screenshot or short recording.

