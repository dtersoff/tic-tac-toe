# VARIABLE=VALUE sh curl-scripts/examples/create.sh

curl "https://sei-library-api.herokuapp.com/examples" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": "'"${ID}"'"
        "email": "'"${EMAIL}"'"
      },
      "player_o": null
    }
  }'

echo
