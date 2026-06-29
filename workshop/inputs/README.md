# inputs — drop your notes here

The drop zone for anything you bring **before** you start the harness: a problem
statement, discovery-interview notes, a survey export, a sample data file, a
screenshot. Save it here, then run `/1-problem` — it reads whatever it finds in
this folder and pre-fills the interview instead of asking you to paste a wall of
text.

- Any format is fine — `.md`, `.txt`, `.csv`, `.json`, `.pdf`, an image.
- One idea at a time: this is a **shared** drop zone, so clear it (or move files
  into your run folder) before starting a second idea, or the notes will mix.
- Everything here is **gitignored** — your notes stay local, exactly like your
  run output under `workshop/runs/`. Only this README is tracked.

Where it goes next: `/1-problem` mines these notes, creates
`workshop/runs/<slug>/`, and captures your problem statement into
`01-problem.html`. The notes themselves stay here unless you move them.
