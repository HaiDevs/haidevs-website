# Contributing to this project
Thank you for considering contributing to HaiDevs! We welcome all types of contributions, including bug fixes, feature requests, and documentation improvements. By contributing to HaiDevs, you're helping us build a better community.

## We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use the [Github Flow](https://guides.github.com/introduction/flow/index.html)

Pull requests are the best way to propose changes to the codebase (we use the [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests!

## Custom Branch Prefixes

- Bugfix: `bugfix/`
  - For work fixing product bugs
  - Branches from `develop`
  - Merges into `remote/develop` through the GitHub UI
- Feature: `feature/`
  - For work on new product features
  - Branches from `develop`
  - Merges into `remote/develop` through the GitHub UI
- Hotfix: `hotfix/`
  - For fixing urgent bugs on production that have high impact. It bypasses CI tests
  - Branches from `develop`
  - Merges into `remote/develop` through the GitHub UI

## Branching Model

- Development branch: `develop`
  - For all development work
  - Feature, Hotfix and Bugfix branches merge into it
  - Merges into main when we confirm it’s stable and correct
- Production branch: `main`
  - For production deployments
  - `develop` merges into it

## Development Branch

We use a `develop` branch for active development work, and a `main` branch for production. When we have completed a new feature, hot fix, or bug fix, me merge them into the `develop` branch.

After the changes on the `develop` branch have been tested, we create another pull request to merge them into the `main` branch.

Notice that no matter what, code flows like:

    `develop` → Custom branch (Code review via a Pull Request) → `develop` (Staging preview) → `main` (Production release) → `develop` → Custom branch (here we go again!)

## Merge Strategies

In addition to using separate branches for each stage of development, we use fast-forward merges for the `main` branch, which allows us to move this branch forward to include the changes from `develop` without creating new merge commits. This makes it easier to revert changes if necessary.

To merge a branch into the `develop` branch, we use squash merges to combine multiple commits into a single commit. This helps to keep our git history clean and organized.

## Quick guide

1. Fork the repository and create your Custom Branch from `develop`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Report bugs using Github's [issues](https://github.com/HaiDevs/haidevs-website/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/HaiDevs/haidevs-website/issues/new/choose); it's that easy!

## License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/HaiDevs/HaiDevs/blob/main/LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

