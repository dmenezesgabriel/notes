ifneq (,$(wildcard .env))
  include .env
  export
endif

up:
	docker compose up

down:
	docker compose down


penpot-init-user:
	docker exec notes-penpot-backend-1 python3 manage.py create-profile \
		-e "$(PENPOT_INIT_EMAIL)" \
		-n "$(PENPOT_INIT_NAME)" \
		-p "$(PENPOT_INIT_PASSWORD)" \
		--skip-tutorial --skip-walkthrough
