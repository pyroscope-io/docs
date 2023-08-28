# updates slack url
SLACK_INVITE_URL="https://join.slack.com/t/pyroscope/shared_invite/zt-188djmr07-fGVF19hFTPZrLCFJAgwPyw"

API_ADDRESS=https://pyroscope.io

.PHONY: install
install:
	yarn install

.PHONY: build-info
build-info:
	git show-ref --head --hash=8 2> /dev/null | head -n1 > static/build-info.txt
	date >> static/build-info.txt

.PHONY: build
build: install build-info
	yarn build

.PHONY: generate-pdfs
generate-pdfs: invalidate-cache
	ruby generate-pdfs.rb

.PHONY: create-redirects
create-redirects:
	ruby create-redirects.rb

.PHONY: slack-url
slack-url:
	aws s3api put-object --bucket pyroscope.io --key slack/index.html --body static/slack/index.html --website-redirect-location ${SLACK_INVITE_URL}
	aws cloudfront create-invalidation --distribution-id E35O9P6VNL3Z5X --paths '/*'

.PHONY: upload
upload:
	# This bucket is set up with a static website endpoint and no public-read.
	# There's a cloudfront distribution in front of it.
	# Access is set up to only allow reads with a special refferer header that's
	#   set on cloudfront side. This way it's only accessible via cloudfront.
	aws s3 sync --exclude 'videos/*' --exclude 'storybook/*' build/ s3://pyroscope.io/
	aws s3 cp --acl public-read static/img/favicon.ico s3://pyroscope.io/favicon.ico

.PHONY: invalidate-cache
invalidate-cache:
	aws cloudfront wait invalidation-completed --distribution-id E35O9P6VNL3Z5X --id $(shell aws cloudfront create-invalidation --distribution-id E35O9P6VNL3Z5X --paths '/*' | jq .Invalidation.Id)

.PHONY: deploy
deploy:
	$(MAKE) build
	$(MAKE) upload
	$(MAKE) create-redirects
	$(MAKE) slack-url
	$(MAKE) invalidate-cache
