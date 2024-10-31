#!/bin/bash

# Получаем имя текущей ветки
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Указываем родительскую ветку, из которой будем делать pull и merge
parent_branch="main"  # замените на нужную родительскую ветку, если нужно

# Обновляем локальную копию родительской ветки
git fetch origin "$parent_branch"

# Делаем pull из родительской ветки
git pull origin "$parent_branch"

# Мерджим изменения в текущую ветку
git merge "$parent_branch" --no-edit

# Проверяем, были ли изменения после мерджа
if [ "$(git status --porcelain)" ]; then
  # Если изменения есть, пушим их в текущую ветку
  git push origin "$current_branch"
  echo "Changes have been pushed to $current_branch."
else
  echo "No changes to push."
fi
