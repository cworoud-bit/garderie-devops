# Déroulé Git de l'épreuve (à supprimer avant le rendu si vous voulez)

```bash
# 1. Dépôt initial (tâches 1 à 8)
git init -b main
git add backend frontend docker-compose.yml .gitignore
git commit -m "feat: application Ma Garderie (frontend, backend, docker)"
git remote add origin https://github.com/<GITHUB_USER>/garderie-devops.git
git push -u origin main

# 2. Jenkins (tâche 9)
git add Jenkinsfile && git commit -m "ci: pipeline Jenkins" && git push

# 3. Vagrant (tâches 15-18)
git checkout -b feature/vagrant
git add Vagrantfile && git commit -m "feat: Vagrantfile Ubuntu"
git checkout main && git merge feature/vagrant

# 4. Ansible (tâches 19-24)
git checkout -b feature/ansible
git add ansible Vagrantfile && git commit -m "feat: rôle Ansible docker"
git checkout main && git merge feature/ansible

# 5. Déploiement (tâches 25-29)
git checkout -b feature/deployment
git add deploy && git commit -m "feat: docker-compose de déploiement"
git checkout main && git merge feature/deployment

# 6. Documentation (tâches 32-34)
git checkout -b docs/readme
git add README.md screenshots && git commit -m "docs: README et captures"
git checkout main && git merge docs/readme
git push --all
```
