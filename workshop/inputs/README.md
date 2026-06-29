# inputs — drop your notes here

The drop zone for anything you bring **before** you start the harness: a problem
statement, discovery-interview notes, a survey export, a sample data file, a
screenshot. Save it here, then run `/1-problem` — it reads whatever it finds in
this folder and pre-fills the interview instead of asking you to paste a wall of
text.

- Any format is fine — `.md`, `.txt`, `.csv`, `.json`, `.pdf`, an image.
- One idea at a time: this is a **shared** drop zone, so clear it (or move files
  into your run folder) before starting a second idea, or the notes will mix.
- **Sample inputs to start off:** `problem-statement.md`, `discovery-notes.md`,
  and `seed-data.json` are checked in as an example of what good notes look like.
  Read them for the shape, then replace them with your own before running
  `/1-problem`.

Where it goes next: `/1-problem` mines these notes, creates
`workshop/runs/<slug>/`, and captures your problem statement into
`01-problem.html`. The notes themselves stay here unless you move them.
