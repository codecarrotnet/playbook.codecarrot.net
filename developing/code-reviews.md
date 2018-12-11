# Code Reviews

Here's the flow. Read [our git protocol](https://guides.codecarrot.net/protocol) for the git commands.

1. Create a local feature branch based off master.
2. When feature is complete and tests pass, stage the changes.
3. When you've staged the changes, commit them.
4. Write a [good commit message](https://blog.codecarrot.net/5-useful-tips-for-a-better-commit-message).
5. Share your branch.
6. Submit a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).
7. Ask for a code review in [Flock](https://www.flock.com).
8. A team member other than the author reviews the pull request. They follow [Code Review guidelines](https://guides.codecarrot.net/code-review) to avoid miscommunication.
9. They make comments and ask questions directly on lines of code in the GitHub web interface or in Slack.
10. When satisfied, they approve or comment on the pull request that it's ready to merge.
11. Rebase interactively. Squash commits like "Fix whitespace" into one or a small number of valuable commit(s). Edit commit messages to reveal intent.
12. View a list of new commits. View changed files. Merge branch into master.
13. Delete your remote feature branch.
14. Delete your local feature branch.

Test-Driven Development moves code failure earlier in the development process. It's better to have a failing test on your development machine than in production. It also allows you to have tighter feedback cycles.

Code reviews that happen right before code goes into master offer similar benefits:

* The whole team learns about new code as it is written.
* Mistakes are caught earlier.
* Coding standards are more likely to be established, discussed, and followed.
* Feedback from this style of code review is far more likely to be applied.
* No one forgets context ("Why did we write this?") since it's fresh in the author's mind.
