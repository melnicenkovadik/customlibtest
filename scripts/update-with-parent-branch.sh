#!/bin/bash

# Определяем родительскую ветку, например, 'main'
PARENT_BRANCH="main"

# Получаем текущую ветку
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Проверяем, находимся ли мы не на родительской ветке
if [ "$CURRENT_BRANCH" = "$PARENT_BRANCH" ]; then
  echo "Вы находитесь на родительской ветке '$PARENT_BRANCH'. Этот скрипт нужно запускать с других веток."
  exit 1
fi

# Обновляем родительскую ветку из удалённого репозитория
echo "Обновляем родительскую ветку '$PARENT_BRANCH'..."
git fetch origin
git checkout $PARENT_BRANCH
git pull origin $PARENT_BRANCH

# Возвращаемся на текущую ветку и мержим изменения из родительской ветки
echo "Возвращаемся на ветку '$CURRENT_BRANCH' и мержим изменения из '$PARENT_BRANCH'..."
git checkout $CURRENT_BRANCH
git merge $PARENT_BRANCH --no-edit

# Проверяем, были ли изменения после мерджа
if [ "$(git status --porcelain)" ]; then
  # Если изменения есть, пушим их в текущую ветку
  echo "Пушим изменения в ветку '$CURRENT_BRANCH'..."
  git push origin "$CURRENT_BRANCH"
  echo "Изменения были успешно запушены в ветку '$CURRENT_BRANCH'."
else
  echo "Нет изменений для пуша."
fi

echo "Мерж завершен!"
echo "БУУУМ!!!"
