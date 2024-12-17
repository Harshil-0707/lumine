# Contributing to Lumine

Thank you for considering contributing to **Lumine**! Whether you're fixing bugs, adding features, or improving documentation, your contributions are invaluable to the project. This document outlines the guidelines to ensure a smooth and collaborative contribution process.

---

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Reporting Issues](#reporting-issues)
- [Suggesting Features](#suggesting-features)
- [Contributing Code](#contributing-code)
  - [Repository Setup](#repository-setup)
  - [Code Style and Standards](#code-style-and-standards)
  - [Testing](#testing)
- [Commit and PR Guidelines](#commit-and-pr-guidelines)
- [Code Review Process](#code-review-process)
- [Support and Questions](#support-and-questions)

---

## Code of Conduct

By participating in this project, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Please help us maintain a welcoming and inclusive environment.

---

## Getting Started

### Prerequisites
Before contributing, ensure you have the following tools installed:

- **Git**: For version control
- **Go**: Golang runtime (v1.21+)
- **Docker**: Container runtime
- **Kubernetes**: A local or cloud-based cluster

### Fork and Clone Repository
1. **Fork** this repository to your GitHub account.
2. **Clone** your forked repository:
   ```bash
   git clone https://github.com/<your-username>/lumine.git
   cd lumine
   ```
3. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/your-org/lumine.git
   ```

4. Fetch the latest changes:
   ```bash
   git fetch upstream
   ```

---

## Reporting Issues

If you encounter a bug or have a question, please create a new issue:

1. Check the existing [Issues](https://github.com/your-org/lumine/issues) to ensure it hasn't been reported.
2. Use the appropriate issue template:
   - **Bug Report**: Clearly describe the issue, including steps to reproduce and environment details.
   - **Question**: Provide sufficient context for your query.
3. Include logs, screenshots, or outputs when relevant.

---

## Suggesting Features

We welcome ideas for enhancements to Lumine! To propose a new feature:

1. Open a new **Feature Request** issue.
2. Describe the feature's purpose, use case, and benefits.
3. If possible, outline a rough implementation plan.

---

## Contributing Code

### Repository Setup

1. Ensure your local `main` branch is up-to-date:
   ```bash
   git checkout main
   git pull upstream main
   ```
2. Create a new branch for your contribution:
   ```bash
   git checkout -b feature/<feature-name>
   ```

### Code Style and Standards

- **Go**: Follow standard Go best practices. Ensure your code passes `gofmt` and `golint` checks.
   ```bash
   go fmt ./...
   golint ./...
   ```
- **Testing**: Write unit tests for new features and bug fixes.
   ```bash
   go test ./...
   ```
- **Docker/Kubernetes**: Test containerization and deployment locally if applicable.

---

## Commit and PR Guidelines

### Commit Messages
Use clear, descriptive commit messages following this format:
```
<type>: <subject>
```
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Refactoring or setup changes

**Example**:
```
feat: add user authentication to lumine-core
```

### Submitting Pull Requests

1. Push your changes to your fork:
   ```bash
   git push origin feature/<feature-name>
   ```
2. Open a Pull Request (PR):
   - Compare your branch with the `main` branch of the upstream repository.
   - Include a **clear title** and description explaining your changes.
   - Link any relevant issues.
3. Ensure your PR meets these requirements:
   - Code builds and passes tests.
   - Follows the project style guidelines.

---

## Code Review Process

1. Your PR will be reviewed by maintainers.
2. You may receive feedback and be asked to make changes.
3. Once approved, your PR will be merged into the main branch.

Please be respectful during code reviews, and don't hesitate to ask questions!

---

## Support and Questions

If you need help, you can:
- Start a discussion on the repository.
- Open an issue for specific problems or ideas.

Together, we can make Lumine even better! 🚀

