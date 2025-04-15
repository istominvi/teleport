#!/bin/bash

cd /opt/teleport
git add .
git commit -m "auto: sync from server $(date '+%Y-%m-%d %H:%M:%S')" || echo "Ничего не изменилось"
git push origin main
